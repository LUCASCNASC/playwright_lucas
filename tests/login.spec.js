// @ts-check
import { test, expect } from '@playwright/test';

test('First Login and leave', async ({ page }) => {

  await page.goto('https://store.maringafc.com/?srsltid=AfmBOopU22pmVsw5c_xF4Ei3xG5KJAUjLR1yYG_4HEYQlmQ1V_uruSmL');

  // Expect a title "to contain" a substring.
  await page.locator('text=Meus Pedidos');

  //clicar no elemento "Meus Pedidos"
  await page.getByRole('link', { name: 'Meus Pedidos' }).click();

  //verificar se esse texto está presente na tela, após clicarmos em "Meus Pedidos"
  await expect(page.locator('text=Já sou cadastrado')).toBeVisible();

  //preencher campo email
  await page.getByLabel('email').fill('camargolucasnasc@gmail.com');

  //preencher campo senha 
  await page.getByLabel('senha').fill('@Lcn1998');

  //clicar no botão Prosseguir para logar
  await page.getByRole('button', { name: 'Prosseguir' }).click();

  //clicar em Olá, Lucas,
  await page.locator('span:text("Lucas Camargo do Nascimento")').click();

  //clicar para sair da conta
  await page.locator('a[title="Sair"]').click();
  
});