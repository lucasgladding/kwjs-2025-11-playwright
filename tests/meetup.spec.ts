import { test, expect } from '@playwright/test';
import { GroupPage } from './pages/meetup/GroupPage';
import { PastEventsPage } from './pages/meetup/PastEventsPage';
import { EventPage } from './pages/meetup/EventPage';

test('has event location text', async ({ page }) => {
  const groupPage = new GroupPage(page, 'kwjavascript');
  await groupPage.open();
  const pastEventsPage = await groupPage.openPastEvents();
  const eventPage = await pastEventsPage.openEvent(/Intro to E2E/);
  await expect(eventPage.locationText).toBeVisible();
});
