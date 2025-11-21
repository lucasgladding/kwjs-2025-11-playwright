import { test, expect } from '@playwright/test';

test('can rsvp', async ({ page }) => {
  await page.goto('https://www.meetup.com/kwjavascript/');
  await page.locator('#see-all-past-events-button').click();
  await page.getByRole('link', { name: /Intro to E2E/ }).click();
  await expect(page.getByText(/200 Bathurst Drive/)).toBeVisible();
});
