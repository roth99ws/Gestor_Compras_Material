// Este archivo debería llamarse formulario.js

// Datos prediseñados para cada material
const materialData = {
    'Material 1': { precio: 100.00, proveedor: 'Proveedor A', obra: 'Obra 1', estado: 'Activo' },
    'Material 2': { precio: 150.00, proveedor: 'Proveedor B', obra: 'Obra 2', estado: 'Pendiente' },
    // Agrega más materiales según sea necesario
};

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
function submitForm() {
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

    // Aquí puedes integrar la API de Google Sheets para enviar los datos
    // Por ejemplo, usando Google Apps Script o un Web App

    alert('Datos enviados:\n' +
          'Material: ' + material + '\n' +
          'Cantidad: ' + cantidad + '\n' +
          'Precio/Unidad: ' + precio + '\n' +
          'Fecha: ' + fecha + '\n' +
          'Proveedor: ' + proveedor + '\n' +
          'Obra: ' + obra + '\n' +
          'Estado: ' + estado);

    // Aquí podrías hacer una redirección o limpieza del formulario después del envío exitoso
}

// Asociar el envío del formulario a la función submitForm
document.getElementById('materialForm').onsubmit = function(event) {
    event.preventDefault();
    submitForm();
};

// Asegúrate de que la función populatePreFilledData se ejecute cuando se cargue la página o se cambie el material
window.onload = populatePreFilledData;
document.getElementById('material').onchange = populatePreFilledData;
