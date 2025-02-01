import { test, expect } from '@playwright/test';
import { generateFirstName } from '../utils/generated_data'

test.skip('create new account', async ({ page }) => {
  await page.goto('https://app.phptravels.com/signup');
  await page.fill('#first_name', 'Lucas' )
  await page.fill('#last_name', 'Camargo' )
  await page.fill('#email', 'lucascnteste@gmail.com' )
  await page.fill('#password', 'lucas1998@testando' )
  //await page.selectOption('#country_id', { value: 'Brazil +55' }) //ajustar
  await page.fill('#mobile', '449858574930' )
  //resolver reCAPTCHA
  //await page.click('#submit')
});