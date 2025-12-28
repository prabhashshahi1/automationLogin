import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';


test('test-valid', async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage(); 
  await Login.login('tomsmith', 'SuperSecretPassword!');
});

test('test-invalid', async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage(); 
  await Login.login('tomsmithno', 'noooSuperSecretPassword!');
});



