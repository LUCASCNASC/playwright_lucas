import { test, expect } from '@playwright/test';
const { login } = require('../utils/commands');

test.only('login correct', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await login (page, 'Login');

    await page.click('button', 'Orders') //clicar em Orders
    await page.click('a:has-text("New order")') //clicar em New Order
    await page.isVisible('p.m-0.page_title:has-text("New Order")') //título New Order está visível na tela
    await expect(page).toHaveURL('https://app.phptravels.com/orders-new') //validar URL New Order
});

