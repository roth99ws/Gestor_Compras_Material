// Este archivo debería llamarse navigate.js

// Cargar las variables de entorno
require('dotenv').config();

// Asignar las credenciales desde las variables de entorno
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const API_KEY = process.env.API_KEY;

async function loadMaterialsFromSheets(area) {
    try {
        const response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID, // Usamos la variable de entorno
            range: 'MaterialesP!A:G',
        });

        const materialsData = response.result.values;

        const filteredMaterials = materialsData.filter(row => row[1] === area);
        const materialsGrid = document.getElementById('materials-grid');
        materialsGrid.innerHTML = '';

        filteredMaterials.forEach(row => {
            const [id, area, material, precio, proveedor, obra, estado] = row;
            const div = document.createElement('div');
            div.classList.add('material-item');
            div.textContent = material;
            div.setAttribute('href', `formulario.html?material=${material}`);
            materialsGrid.appendChild(div);
        });

        // También puedes cargar las órdenes relacionadas si están en otra hoja
        await loadOrdersFromSheets(area);

    } catch (error) {
        console.error("Error al cargar los materiales desde Google Sheets", error);
    }
}

async function loadOrdersFromSheets(area) {
    try {
        const response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID, // Usamos la variable de entorno
            range: 'Pedidos!A2:G',
        });

        const ordersData = response.result.values;
        const filteredOrders = ordersData.filter(row => row[1] === area);

        const orderList = document.getElementById('order-list');
        orderList.innerHTML = '';

        filteredOrders.forEach(row => {
            const [description, unit, rate, price, detail] = row;
            const tr = document.createElement('tr');
            tr.innerHTML = `<td><strong>${description}</strong><br><span class="description">${detail}</span></td>
                            <td>${unit}</td>
                            <td>$${rate}</td>
                            <td>$${price}</td>`;
            orderList.appendChild(tr);
        });

        // Cargar órdenes canceladas si es necesario
        await loadCancelledOrdersFromSheets(area);

    } catch (error) {
        console.error("Error al cargar las órdenes desde Google Sheets", error);
    }
}

async function loadCancelledOrdersFromSheets(area) {
    try {
        const response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID, // Usamos la variable de entorno
            range: 'Pedidos Cancelados!A2:G',
        });

        const cancelledData = response.result.values;
        const filteredCancelled = cancelledData.filter(row => row[1] === area);

        const cancelledOrders = document.getElementById('cancelled-orders');
        cancelledOrders.innerHTML = '';

        filteredCancelled.forEach(row => {
            const [description, unit, rate, price, detail] = row;
            const tr = document.createElement('tr');
            tr.innerHTML = `<td><strong>${description}</strong><br><span class="description">${detail}</span></td>
                            <td>${unit}</td>
                            <td>$${rate}</td>
                            <td>$${price}</td>`;
            cancelledOrders.appendChild(tr);
        });

    } catch (error) {
        console.error("Error al cargar las órdenes canceladas desde Google Sheets", error);
    }
}

function navigateTo(area) {
    window.location.href = `ventana4.html?area=${area}`;
}

function goBack() {
    window.history.back();
}

// Carga del área específica en la ventana 4
window.onload = async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get('area');
    if (area) {
        await loadMaterialsFromSheets(area);
    }
};
