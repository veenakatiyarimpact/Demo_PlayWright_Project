import { test, expect } from '@playwright/test';
import path from 'path';
import ExcelUtils from '../../Utils/ExcelUtils.js';

const registrationUrl = 'https://rahulshettyacademy.com/client';
const workbookPath = path.join(process.cwd(), 'TestData', 'Password_Length_TestCases.xlsx');
const testCases = new ExcelUtils().readExcelData(workbookPath, 'Password Length TC');
const testCasesById = Object.fromEntries(testCases.map(testCase => [testCase['Test Case ID'], testCase]));

async function openRegistrationPage(page) {
	await page.goto(`${registrationUrl}/#/auth/register`);
}

async function completeRequiredFields(page, password) {
	await page.locator('#firstName').fill('Playwright');
	await page.locator('#lastName').fill('Test');
	await page.locator('#userEmail').fill(`pw-${Date.now()}-${Math.random().toString(36).slice(2)}@example.com`);
	await page.locator('#userMobile').fill('9987056745');
	await page.locator('select').selectOption({ label: 'Engineer' });
	await page.getByText('Male', { exact: true }).click();
	if (password !== '') {
		await page.locator('#userPassword').fill(password);
	}
	await page.locator('#confirmPassword').fill(password);
	await page.locator('input[type="checkbox"]').check();
	await page.locator('#login').click();
}

async function runPasswordTest(page, testCaseId) {
	const testCase = testCasesById[testCaseId];
	const password = testCase['Test Data (Password)'] === '(empty)'
		? ''
		: testCase['Test Data (Password)'];
	const expectsError = testCase['Expected Result'].includes('Error message');

	await openRegistrationPage(page);
	await completeRequiredFields(page, password);

	const passwordGroup = page.locator('#userPassword').locator('..');
	const validationMessage = passwordGroup.locator('.invalid-feedback');

	if (expectsError) {
		await expect(validationMessage).toBeVisible();
		return;
	}

	if (testCaseId === 'TC_PWD_LEN_11') {
		await expect(page.locator('#userPassword')).toHaveValue(password);
		return;
	}

	await expect(page.getByRole('heading', { name: 'Account Created Successfully' })).toBeVisible();
}

test('TC_PWD_LEN_01: Password exactly 8 characters', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_01');
});

test.fail('TC_PWD_LEN_02: Password less than 8 characters', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_02');
});

test.fail('TC_PWD_LEN_03: Password with only 1 character', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_03');
});

test('TC_PWD_LEN_04: Empty password field', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_04');
});

test('TC_PWD_LEN_05: Password greater than 8 characters', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_05');
});

test('TC_PWD_LEN_06: Password with exactly 9 characters', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_06');
});

test('TC_PWD_LEN_07: Password with maximum allowed length', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_07');
});

test.fail('TC_PWD_LEN_08: Password exceeding maximum allowed length', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_08');
});

test.fail('TC_PWD_LEN_09: Password with 8 spaces only', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_09');
});

test('TC_PWD_LEN_10: Password with special characters and numbers', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_10');
});

test('TC_PWD_LEN_11: Password trims leading and trailing spaces', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_11');
});

test.fail('TC_PWD_LEN_12: Error message wording and placement', async ({ page }) => {
	await runPasswordTest(page, 'TC_PWD_LEN_12');
});
