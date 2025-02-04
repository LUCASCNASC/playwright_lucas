import { test, expect } from '@playwright/test';
const { login } = require('../utils/commands');

test('All Tickets', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await login (page, 'Login'); //login
    await page.locator('button:has-text("Support")').click();
    await page.click('a:has-text("All Tickets")');
    await page.isVisible('p.m-0.page_title:has-text("Support Tickets")');
    await expect(page).toHaveURL('https://app.phptravels.com/tickets');
});

test('Open New Ticke', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await login (page, 'Login'); //login
    await page.locator('button:has-text("Support")').click();
    await page.click('a:has-text("Open New Ticket")');
    await page.isVisible('p.m-0.page_title:has-text("Submit Ticket")');
    await expect(page).toHaveURL('https://app.phptravels.com/ticket-new');
});

test.skip('Create New Ticket', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await login (page, 'Login'); //login
    await page.locator('button:has-text("Support")').click();
    await page.click('a:has-text("Open New Ticket")');
    await page.isVisible('p.m-0.page_title:has-text("Create New Ticket")');
    await expect(page).toHaveURL('https://app.phptravels.com/ticket-new'); 
    await page.fill('#subject', 'Test Subject' );
    await page.locator('select[name="priority"]').selectOption({ value: 'medium' });
    await page.locator('select[name="department"]').selectOption({ value: 'technical' });
    await page.locator('select[name="related"]').selectOption({ value: 'none' });
    await page.locator('div[contenteditable="true"]').type('Mensagem de teste');
    await page.locator('button:has-text("Submit Ticket")').click();
    await page.isVisible('Status');
});