import { test, expect } from '@playwright/test';

const email_correct = 'lucascnteste@gmail.com'
const password_correct = 'lucas1998@testando'

test.skip('login correct', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await page.isVisible('strong:has-text("Login Panel")');
    await page.fill('#email', email_correct );
    await page.fill('#password', password_correct );
    await page.click('#submit');
    await page.locator('text', 'Dashboard', 'Orders', 'Tickets', 'Services');
    await page.locator('text', email_correct );
    //await page.click('text', email_correct, {force:true} ) //email não está aparecendo para clicar e aparecer o botão logout
});

