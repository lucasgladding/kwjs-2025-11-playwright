import { expect, Page } from "@playwright/test";

export class EventPage {
    constructor(private page: Page) {
        //
    }

    get locationText() {
        return this.page.getByText(/200 Bathurst Drive/);
    }
}