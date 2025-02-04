import { test, expect } from '@playwright/test';
const { login } = require('../utils/commands');

test.only('Affiliate', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await login (page, 'Login'); //login
    await page.click('button', 'Affiliate')
    await page.isVisible('p.m-0.page_title:has-text("Affiliate")')
});