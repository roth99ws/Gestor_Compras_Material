// Este archivo debería llamarse formulario.js

// Inicialización del objeto de materiales prediseñados
let materialData = {};

// Función para cargar datos de Google Sheets
async function loadMaterialData() {
    try {
        const response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: 'tu_spreadsheetId', // Reemplaza con tu ID de hoja de cálculo
            range: 'Materiales Prediseñados!A2:G',
        });

        const rows = response.result.values;

        // Procesar cada fila y llenar el objeto materialData
        rows.forEach(row => {
            const [id, area, material, precio, proveedor, obra, estado] = row;
            materialData[material] = { precio, proveedor, obra, estado };
        });

        // Llamar a la función de pre-rellenado después de cargar los datos
        populatePreFilledData();

    } catch (error) {
        console.error("Error al cargar los datos de Google Sheets: ", error);
    }
}

// Función que se ejecuta cuando se selecciona un material en el formulario
function populatePreFilledData() {
    const material = document.getElementById('material').value;

    // Si el material tiene datos prediseñados, los rellenamos en el formulario
    if (materialData[material]) {
        document.getElementById('precio').value = materialData[material].precio;
        document.getElementById('proveedor').value = materialData[material].proveedor;
        document.getElementById('obra').value = materialData[material].obra;
        document.getElementById('estado').value = materialData[material].estado;
    } else {
        // Si no hay datos prediseñados, dejamos los campos en blanco
        document.getElementById('precio').value = '';
        document.getElementById('proveedor').value = '';
        document.getElementById('obra').value = '';
        document.getElementById('estado').value = '';
    }
}

// Función para enviar los datos a Google Sheets
async function submitForm() {
    const material = document.getElementById('material').value;
    const cantidad = document.getElementById('cantidad').value;
    const precio = document.getElementById('precio').value;
    const fecha = document.getElementById('fecha').value;
    const proveedor = document.getElementById('proveedor').value;
    const obra = document.getElementById('obra').value;
    const estado = document.getElementById('estado').value;

    // Validación básica de campos
    if (!material || !cantidad || !precio || !fecha || !proveedor || !obra || !estado) {
        alert('Por favor, rellena todos los campos obligatorios.');
        return;
    }

    try {
        // Enviar los datos a Google Sheets
        await gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: 'tu_spreadsheetId', // Reemplaza con tu ID de hoja de cálculo
            range: 'Pedidos!A:G',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[material, cantidad, precio, fecha, proveedor, obra, estado]],
            },
        });

        alert('Datos enviados exitosamente.');
        // Limpiar el formulario o redireccionar si es necesario
    } catch (error) {
        console.error("Error al enviar los datos a Google Sheets: ", error);
        alert('Hubo un error al enviar los datos.');
    }
}

// Asociar el envío del formulario a la función submitForm
document.getElementById('materialForm').onsubmit = function(event) {
    event.preventDefault();
    submitForm();
};

// Cargar los datos al inicio y asociar el cambio de material a la función de pre-rellenado
window.onload = async function () {
    await loadMaterialData();
    document.getElementById('material').onchange = populatePreFilledData;
};
