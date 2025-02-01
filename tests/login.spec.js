import { test, expect } from '@playwright/test';

const email_correct = 'lucascnteste@gmail.com'
const password_correct = 'lucas1998@testando'
const email_wrong = '123@gmail.com'
const password_wrong = '123senhaerrada'

test('login correct', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await page.fill('#email', email_correct )
    await page.fill('#password', password_correct )
    await page.click('#submit')
    await page.locator('text', 'Dashboard', 'Orders', 'Tickets', 'Services')
});

test('login incorrect - wrong email', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await page.fill('#email', email_correct )
    await page.fill('#password', password_wrong )
    await page.click('#submit')
    await page.locator('text', 'Invalid Login')
  });

test('login incorrect - wrong password', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await page.fill('#email', email_wrong )
    await page.fill('#password', password_correct )
    await page.click('#submit')
    await page.locator('text', 'Invalid Login')
});

test('login incorrect - wrong email and password', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await page.fill('#email', email_wrong )
    await page.fill('#password', password_wrong )
    await page.click('#submit')
    await page.locator('text', 'Invalid Login')
});

test('login incorrect - empty email', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await page.fill('#email', '' )
    await page.fill('#password', password_correct )
    await page.click('#submit')
    await page.locator('text', 'Email is required to login')
});

test('login incorrect - empty password', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await page.fill('#email', email_correct )
    await page.fill('#password', '' )
    await page.click('#submit')
    await page.locator('text', 'Password is required to login')
});

test('login incorrect - empty email and password', async ({ page }) => {
    await page.goto('https://app.phptravels.com/user-login');
    await page.fill('#email', '' )
    await page.fill('#password', '' )
    await page.click('#submit')
    await page.locator('text', 'Email is required to login')
});