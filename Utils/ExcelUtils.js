import xlsx from 'xlsx';
import fs from 'fs';


export default class ExcelUtils {

    readExcelData(filePath, sheetName) {
        const workbook = xlsx.readFile(filePath);
        const worksheet = workbook.Sheets[sheetName];
        return xlsx.utils.sheet_to_json(worksheet);
    }

   


    writeExcelData(filePath, sheetName, data) {

    let workbook;

    // Check whether Excel file already exists
    if (fs.existsSync(filePath)) {
        workbook = xlsx.readFile(filePath);
    } else {
        workbook = xlsx.utils.book_new();
    }

    // Check whether sheet already exists
    if (workbook.Sheets[sheetName]) {

        const worksheet = workbook.Sheets[sheetName];

        // Append data as a new row
        xlsx.utils.sheet_add_json(worksheet, [data], {
            skipHeader: true,
            origin: -1
        });

    } else {

        // Create new sheet with data
        const worksheet = xlsx.utils.json_to_sheet([data]);

        xlsx.utils.book_append_sheet(
            workbook,
            worksheet,
            sheetName
        );
    }

    // Save Excel file
    xlsx.writeFile(workbook, filePath);
}
}