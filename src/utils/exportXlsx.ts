import xlsx from "json-as-xlsx";

export async function exportToXlsx(data:any[]){

    const dataToExport = [{
        sheet:Date.now().toLocaleString(),
        columns:[
            { label:"email",value:"email"},
            {label:"username",value:"username"}
        ],
        content:data
    }];

    const settings ={
        fileName:Date.now().toString(),
        writeMode:"writeMode",
        //RTL:true
    }
    xlsx(dataToExport,settings);



}