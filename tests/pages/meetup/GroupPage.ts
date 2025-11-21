import { Locator, Page } from "@playwright/test";
import { PastEventsPage } from "./PastEventsPage";

export class GroupPage {
    constructor(
        private page: Page,
        private name: string,
    ) {
        //
    }

    private get pastEventsButton(): Locator {
        return this.page.locator('#see-all-past-events-button') ;   
    }

    async open() {
        const url = `https://www.meetup.com/${this.name}/`;
        await this.page.goto(url);
    }

    async openPastEvents(): Promise<PastEventsPage> {
        await this.pastEventsButton.click();
        return new PastEventsPage(this.page);
    }
}
