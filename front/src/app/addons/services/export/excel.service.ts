import { Business } from './../../interfaces/business';
import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs/dist/exceljs';
import * as fs from 'file-saver';
import { formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  generateExcelFix(pTit: string, pSubtit, objDato:Business, pHeader, pCol, data, pColtot, pHeader2, pCol2, data2, pDicc) {
    //Excel Title, Header, Data
    const title = pTit;        //Titulo
    const subtit = pSubtit;    //Subtitulo  
                               //objDato es el VTOC

    const header = pHeader;    //Titulos columnas ["Year", "Month", "Make", "Model", "Quantity", "Pct"]
    const cols = pCol;         //array con los anchos de datos
    //const data = pData;        //matriz de datos 
    const Coltot = pColtot;     //Array de columnasque precisan totales
    // ------------------------Para una hoja de detalles ---------------------------
    const header2 = pHeader2;      //Titulos columnas ["Year", "Month", "Make", "Model", "Quantity", "Pct"]
    const cols2   = pCol2;         //array con los anchos de datos
    


    //const Diccionario = pDicc;   Diccionario de datos filler

    //Create workbook and worksheet
    let workbook = new ExcelJS.Workbook();
    let worksheet = workbook.addWorksheet('Productos');
    //let worksheet2 = workbook.addWorksheet('Detalles');

    
    let  tope = String.fromCharCode(64+header.length);
    if (header.length > 8) {
      tope = String.fromCharCode(72);
    }

    //Add Row and formatting
    let titleRow = worksheet.addRow([title]);
    titleRow.font = { name: 'Arial', family: 4, size: 16, underline: 'double', bold: true }
    titleRow.alignment = {vertical: "middle", horizontal: "center"}
    worksheet.mergeCells('A1:' + tope + '1');


    worksheet.addRow([]);
    if (pSubtit !== '') {
      let subtiRow = worksheet.addRow(['',pSubtit]);
      subtiRow.font = {bold: true};
    }

    let fechaRow = worksheet.addRow(['', '[' + objDato.address + '] [' + formatDate(new Date(), 'dd-MM-yyyy HH:MM', 'en-US') + ']']);
    fechaRow.font = {bold: true};

    //Add Image
    //let logo = workbook.addImage({
    //    base64: logoFile.logoBase64,
    //  extension: 'png',
    //});
    //worksheet.addImage(logo, 'E1:F3'); //
    
    //Blank Row 
    worksheet.addRow([]);

    //Add Header Row
    let headerRow = worksheet.addRow(header);
    


    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ECC1C1' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
    data.forEach(d => {
      let row = worksheet.addRow(d);

      
    }

    );

    // ver si lo podemos formatear todo el rango
    for (let i=0; i < cols.length; i++) {
      if (cols[i] > 0 ) {
        worksheet.getColumn(i+1).width = cols[i];
      }
    }
    worksheet.addRow([]);


    //Footer Row
    let footerRow = worksheet.addRow([`Total de productos:  ${data.length}`]);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFCE5959' }
    };
    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }

    //worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);

    const nunu = footerRow.number;
    worksheet.mergeCells('A' + nunu.toString() + ':' + tope + nunu.toString());


    // ================================= Posible segunda hoja =========
    // if (pHeader2.length !== 0) {
    //   let headerRow2 = worksheet2.addRow(header2);
    //   headerRow2.eachCell((cell, number) => {
    //     cell.fill = {
    //     type: 'pattern',
    //     pattern: 'solid',
    //     fgColor: { argb: 'FF66CC00' },
    //     bgColor: { argb: 'FFFFFF00' }
    //     }
    //     cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    //   });
    //   data2.forEach(
    //     d => {
    //       let row2 = worksheet2.addRow(d);
    //     }
    //   );
    //   for (let i=0; i < cols2.length; i++) {
    //     if (cols2[i] > 0 ) {
    //       worksheet2.getColumn(i+1).width = cols2[i];
    //     }
    //   }
    // }



    //Generate Excel File with given names
    workbook.xlsx.writeBuffer().then((datun) => {
      let blob = new Blob([datun], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'xls' + formatDate(new Date(), 'yyyy-MM-dd hh-MM-ss', 'en-US'));
    });
  }
}
