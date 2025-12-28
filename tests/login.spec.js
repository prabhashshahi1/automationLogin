import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';


test('test-valid', async ({ page }) => {
    const Login = new LoginPage(page);

    await Login.gotoLoginPage();
    await Login.login('tomsmith', 'SuperSecretPassword!');
    await expect(page.getByText('You logged into a secure area')).toBeVisible();
    await Login.logout();

});

test('test-invalid', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.login('tomsmithno', 'noooSuperSecretPassword!');
    await expect(page.getByText('Your username is invalid!')).toBeVisible();

});



