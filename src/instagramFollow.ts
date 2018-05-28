class InstagramFollow {
	private ulList: HTMLElement;
	private scrollContainer: HTMLElement;
	private allButtons: HTMLElement[];
	private followButtons: HTMLElement[];

	constructor(private maxFollows: number = 0){
		this.ulList = document.querySelector("div[role='dialog'] ul");
		this.scrollContainer = this.ulList.parentElement;
	}

	public async start(): Promise<null>{
		await this.scrollLoop();
		await this.loopFollow();
		alert(`Done following ${this.followButtons.length}`);
		return null;
	}

	private loopFollow(): Promise<null>{
		return new Promise((resolve, reject) => {
			let idx = 0;
			const clickInterval = setInterval(() => {
				this.followButtons[idx].click();
				idx++;
				if(idx >= this.followButtons.length) {
					clearInterval(clickInterval);
					resolve();
				}
			}, 1000);
		});
	}

	private scrollLoop(): Promise<null>{
		return new Promise((resolve, reject) => {
			const scrollInterval = setInterval(() => {
				this.scrollContainer.scrollTo(0, this.ulList.scrollHeight);
				this.allButtons = [...this.ulList.querySelectorAll("button")];
				this.followButtons = this.allButtons.filter(btn => btn.textContent === "Follow");
				if(this.followButtons.length >= this.maxFollows) {
					clearInterval(scrollInterval);
					resolve();
				}
			}, 1000)
		});
	}
}
