import xlsx from 'xlsx';

export default class ExcelUtils {

    readExcelData(filePath, sheetName) {
        const workbook = xlsx.readFile(filePath);
        const worksheet = workbook.Sheets[sheetName];
        return xlsx.utils.sheet_to_json(worksheet);
    }
}