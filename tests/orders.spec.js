import { test, expect } from '@playwright/test';
const { login } = require('../utils/commands');

test('New Order', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await login (page, 'Login'); //login
    await page.click('button', 'Orders');
    await page.click('a:has-text("New order")');
    await page.isVisible('p.m-0.page_title:has-text("New Order")');
    await expect(page).toHaveURL('https://app.phptravels.com/orders-new');
});

test('All Orders', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await login (page, 'Login'); //login
    await page.click('button', 'Orders');
    await page.click('a:has-text("All orders")');
    await page.isVisible('p.m-0.page_title:has-text("All Orders")');
    await expect(page).toHaveURL('https://app.phptravels.com/orders');
});


