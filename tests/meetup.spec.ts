import { test, expect } from '@playwright/test';
import { GroupPage } from './pages/meetup/GroupPage';
import { PastEventsPage } from './pages/meetup/PastEventsPage';
import { EventPage } from './pages/meetup/EventPage';

test('has event location text', async ({ page }) => {
  const groupPage = new GroupPage(page, 'kwjavascript');
  await groupPage.goto();
  await groupPage.openPastEvents();

  const pastEventsPage = new PastEventsPage(page);
  await pastEventsPage.openEvent(/Intro to E2E/);

  const eventPage = new EventPage(page);
  await expect(eventPage.locationText).toBeVisible();
});
