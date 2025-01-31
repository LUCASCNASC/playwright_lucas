import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://store.maringafc.com/');
  await page.getByRole('link', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Meus Pedidos' }).click();
  await page.getByRole('textbox', { name: 'E-mail: Digite o email que' }).click();
  await page.getByRole('textbox', { name: 'E-mail: Digite o email que' }).fill('camargolucasnasc@gmail.com');
  await page.getByRole('textbox', { name: 'Senha: Senha' }).click();
  await page.getByRole('textbox', { name: 'Senha: Senha' }).fill('@Lcn1998');
  await page.getByRole('textbox', { name: 'Senha: Senha' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Senha: Senha' }).fill('@L');
  await page.getByRole('textbox', { name: 'Senha: Senha' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Senha: Senha' }).fill('@Lcn1998');
  await page.getByRole('button', { name: 'Prosseguir' }).click();
  await page.getByRole('link', { name: 'Olá, Lucas Camargo do' }).click();
  await page.getByRole('link', { name: 'Sair' }).click();
});