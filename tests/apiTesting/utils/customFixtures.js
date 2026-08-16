const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const USER_EMAIL = 'veena.katiyar@gmail.com';
const USER_PASSWORD = 'Ashlesha@128';

const SIX_EVENTS_RESPONSE = {
  events: [
    { id: 1, name: 'Event 1', date: '2026-08-15', venue: 'Hall A' },
    { id: 2, name: 'Event 2', date: '2026-08-16', venue: 'Hall B' },
    { id: 3, name: 'Event 3', date: '2026-08-17', venue: 'Hall C' },
    { id: 4, name: 'Event 4', date: '2026-08-18', venue: 'Hall D' },
    { id: 5, name: 'Event 5', date: '2026-08-19', venue: 'Hall E' },
    { id: 6, name: 'Event 6', date: '2026-08-20', venue: 'Hall F' },
  ],
  bookingCount: 9,
};

const FOUR_EVENTS_RESPONSE = {
  events: [
    { id: 1, name: 'Event 1', date: '2026-08-15', venue: 'Hall A' },
    { id: 2, name: 'Event 2', date: '2026-08-16', venue: 'Hall B' },
    { id: 3, name: 'Event 3', date: '2026-08-17', venue: 'Hall C' },
    { id: 4, name: 'Event 4', date: '2026-08-18', venue: 'Hall D' },
  ],
  bookingCount: 4,
};

async function loginAndGoToEvents(page) {
  await page.goto(BASE_URL);
  await page.fill('input[name="email"]', USER_EMAIL);
  await page.fill('input[name="password"]', USER_PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForURL('**/events**');
}

export { BASE_URL, USER_EMAIL, USER_PASSWORD, SIX_EVENTS_RESPONSE, FOUR_EVENTS_RESPONSE, loginAndGoToEvents };
