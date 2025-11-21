import { Locator, Page } from "@playwright/test";

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

    async goto() {
        const url = `https://www.meetup.com/${this.name}/`;
        await this.page.goto(url);
    }

    async openPastEvents() {
        await this.pastEventsButton.click();
    }
}
