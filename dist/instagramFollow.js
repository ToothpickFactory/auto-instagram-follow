var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class InstaFollow {
    constructor(maxFollows = 0) {
        this.maxFollows = maxFollows;
        this.ulList = document.querySelector("div[role='dialog'] ul");
        this.scrollContainer = this.ulList.parentElement;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.scrollLoop();
            yield this.loopFollow();
            alert(`Done following ${this.followButtons.length}`);
            return null;
        });
    }
    loopFollow() {
        return new Promise((resolve, reject) => {
            let idx = 0;
            const clickInterval = setInterval(() => {
                this.followButtons[idx].click();
                idx++;
                if (idx >= this.followButtons.length) {
                    clearInterval(clickInterval);
                    resolve();
                }
            }, 1000);
        });
    }
    scrollLoop() {
        return new Promise((resolve, reject) => {
            const scrollInterval = setInterval(() => {
                this.scrollContainer.scrollTo(0, this.ulList.scrollHeight);
                this.allButtons = [...this.ulList.querySelectorAll("button")];
                this.followButtons = this.allButtons.filter(btn => btn.textContent === "Follow");
                if (this.followButtons.length >= this.maxFollows) {
                    clearInterval(scrollInterval);
                    resolve();
                }
            }, 1000);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtRm9sbG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2luc3RhZ3JhbUZvbGxvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBTUMsWUFBb0IsYUFBcUIsQ0FBQztRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQztJQUVZLEtBQUs7O1lBQ2pCLE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztLQUFBO0lBRU8sVUFBVTtRQUNqQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNaLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2hDLEdBQUcsRUFBRSxDQUFDO2dCQUNOLElBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO29CQUNwQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxDQUFDO2lCQUNWO1lBQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sVUFBVTtRQUNqQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLE1BQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2hELGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUM7aUJBQ1Y7WUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCJ9