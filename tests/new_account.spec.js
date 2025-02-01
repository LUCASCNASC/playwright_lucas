import { test, expect } from '@playwright/test';
import { generateFirstName } from '../utils/generated_data'



test('test', async ({ page }) => {
  await page.goto('https://signup.heroku.com/');
  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  await page.fill('#first_name', generateFirstName )
  // await page.fill('#last_name', 'Camargo')
  // await page.fill('#email', 'lucascnteste@gmail.com')
  // await page.fill('#company', 'Camargo LTDA')
  // await page.selectOption('#self_declared_country', { value: 'Brazil' })
  // await page.check('#receive_newsletter_choice')
  // await page.click('#signup-button')
  // await page.getByRole('heading', { name: 'Almost there …' }).click();
});