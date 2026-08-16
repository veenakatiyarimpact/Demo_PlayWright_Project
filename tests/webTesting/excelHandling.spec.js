import { test, expect } from '@playwright/test';
import ExcelUtils from '../../Utils/ExcelUtils.js';
import path from 'path';

const filePath = path.join(process.cwd(), 'TestData', 'TestData.ods');

test('Read data from excel', async () => {
    const excelUtils = new ExcelUtils();
    const sheetName = 'testdata';
    const excelData = excelUtils.readExcelData(filePath, sheetName);
    console.log(excelData);
    expect(excelData.length).toBeGreaterThan(0);
    console.log('Name : ' + (excelData[0].VALUE));
});

test('Write data into excel', async () => {
    const data = {
    username: "aashu123",
    password: "aashu@129",
    status: "Pass"
};
    const excelUtils = new ExcelUtils();
    const sheetName = 'testdata';
    
    excelUtils.writeExcelData(filePath, "Veena",data);
});