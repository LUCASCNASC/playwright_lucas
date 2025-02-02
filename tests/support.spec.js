import { test, expect } from '@playwright/test';
const { login } = require('../utils/commands');

test.only('New Order', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await login (page, 'Login');

    await page.click('#support-collapse') //clicar em Orders
    // await page.click('a:has-text("All Tickets")') //clicar em New Order
    // await page.isVisible('p.m-0.page_title:has-text("Support Tickets")') //título New Order está visível na tela
    // await expect(page).toHaveURL('https://app.phptravels.com/tickets') //validar URL New Order
});