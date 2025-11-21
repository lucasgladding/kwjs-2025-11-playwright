import { Page } from "@playwright/test";

export class PastEventsPage {
    constructor(
        private page: Page
    ) {
        //
    }

    async openEvent(name: string | RegExp) {
        await this.page.getByRole('link', { name }).click();
    }
}