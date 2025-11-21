import { Page } from "@playwright/test";
import { EventPage } from "./EventPage";

export class PastEventsPage {
    constructor(
        private page: Page
    ) {
        //
    }

    async openEvent(name: string | RegExp): Promise<EventPage> {
        await this.page.getByRole('link', { name }).click();
        return new EventPage(this.page);
    }
}