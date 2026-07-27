import path from 'path';

import { test, expect } from '@playwright/test';

test('Upload single file', async ({ page }) => {
  const filePath = path.resolve('TestData/vk1.jpg');
  console.log("File path => " + filePath);

  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.locator('#file-upload').setInputFiles(filePath);
  await page.locator('#file-submit').click();

  await expect(page.locator('#uploaded-files')).toContainText('vk1.jpg');
});

test('Upload multiple files', async ({ page }) => {
  const filePaths = [
    path.resolve('TestData/vk1.jpg'),
    path.resolve('TestData/vk2.jpg')
  ];
  console.log('File paths => ' + filePaths.join(', '));

  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
  await page.locator('#filesToUpload').setInputFiles(filePaths);

  await expect(page.locator('#fileList li')).toHaveCount(2);
  await expect(page.locator('#fileList li').first()).toContainText('vk1.jpg');
  await expect(page.locator('#fileList li').last()).toContainText('vk2.jpg');
});
