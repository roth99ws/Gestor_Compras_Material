let MaterialesP;

async function getMaterialesP() {
    let response;
    const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
    
    try {
      // Fetch first 10 files
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'MaterialesP!A:G',
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }

    console.log(response); 

    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
        console.warn("No se encontraron valores")
      return;
    }

    MaterialesP = [];
    range.values.forEach((fila)=>{
        if(isNaN(parseInt(fila[0])) || fila[8] !== undefined) return;
        const NuevoMaterial ={
            id : fila [0],
            Area : fila [1],
            Material : fila [2],
            PrecioU : fila [3],
            Provedor : fila [4],
            Obra : fila [5],
            Estado : fila [6],

        };
        MaterialesP.push(NuevoMaterial);
    })
    console.log(MaterialesP)
}