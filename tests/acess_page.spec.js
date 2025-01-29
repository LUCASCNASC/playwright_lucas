// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://store.maringafc.com/?srsltid=AfmBOopU22pmVsw5c_xF4Ei3xG5KJAUjLR1yYG_4HEYQlmQ1V_uruSmL');

  // Expect a title "to contain" a substring.
  await page.locator('text=Meus Pedidos');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://store.maringafc.com/?srsltid=AfmBOopU22pmVsw5c_xF4Ei3xG5KJAUjLR1yYG_4HEYQlmQ1V_uruSm');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });