// Este archivo debería llamarse navigate.js

const areas = {
    'Carpintería': {
        materials: ['Material 1 de Carpintería', 'Material 2 de Carpintería', 'Material 3 de Carpintería', 'Material 4 de Carpintería'],
        orders: [
            { description: 'Item 1', unit: 2, rate: 200.00, price: 400.00, detail: 'Descripción 1 para Carpintería' },
            { description: 'Item 2', unit: 2, rate: 300.00, price: 600.00, detail: 'Descripción 2 para Carpintería' },
        ],
        cancelled: [
            { description: 'Item cancelado 1', unit: 1, rate: 150.00, price: 150.00, detail: 'Motivo cancelación 1 para Carpintería' },
            { description: 'Item cancelado 2', unit: 1, rate: 100.00, price: 100.00, detail: 'Motivo cancelación 2 para Carpintería' },
        ]
    },
    'Eléctrica': {
        materials: ['Material 1 de Eléctrica', 'Material 2 de Eléctrica', 'Material 3 de Eléctrica', 'Material 4 de Eléctrica'],
        orders: [
            { description: 'Item 1', unit: 3, rate: 150.00, price: 450.00, detail: 'Descripción 1 para Eléctrica' },
            { description: 'Item 2', unit: 5, rate: 220.00, price: 1100.00, detail: 'Descripción 2 para Eléctrica' },
        ],
        cancelled: [
            { description: 'Item cancelado 1', unit: 1, rate: 120.00, price: 120.00, detail: 'Motivo cancelación 1 para Eléctrica' },
            { description: 'Item cancelado 2', unit: 2, rate: 110.00, price: 220.00, detail: 'Motivo cancelación 2 para Eléctrica' },
        ]
    },
    'Pintura': {
        materials: ['Material 1 de Pintura', 'Material 2 de Pintura', 'Material 3 de Pintura', 'Material 4 de Pintura'],
        orders: [
            { description: 'Item 1', unit: 2, rate: 200.00, price: 400.00, detail: 'Descripción 1 para Pintura' },
            { description: 'Item 2', unit: 2, rate: 300.00, price: 600.00, detail: 'Descripción 2 para Pintura' },
        ],
        cancelled: [
            { description: 'Item cancelado 1', unit: 1, rate: 150.00, price: 150.00, detail: 'Motivo cancelación 1 para Pintura' },
            { description: 'Item cancelado 2', unit: 1, rate: 100.00, price: 100.00, detail: 'Motivo cancelación 2 para Pintura' },
        ]
    },
    'Plomería': {
        materials: ['Material 1 de Plomería', 'Material 2 de Plomería', 'Material 3 de Plomería', 'Material 4 de Plomería'],
        orders: [
            { description: 'Item 1', unit: 2, rate: 200.00, price: 400.00, detail: 'Descripción 1 para Plomería' },
            { description: 'Item 2', unit: 2, rate: 300.00, price: 600.00, detail: 'Descripción 2 para Plomería' },
        ],
        cancelled: [
            { description: 'Item cancelado 1', unit: 1, rate: 150.00, price: 150.00, detail: 'Motivo cancelación 1 para Plomería' },
            { description: 'Item cancelado 2', unit: 1, rate: 100.00, price: 100.00, detail: 'Motivo cancelación 2 para Plomería' },
        ]
    }
};


function loadArea(area) {
    const areaData = areas[area];

    if (!areaData) return;

    document.getElementById('area-name').textContent = area;
    document.getElementById('area-title').textContent = area;

    const materialsGrid = document.getElementById('materials-grid');
    materialsGrid.innerHTML = '';
    areaData.materials.forEach(material => {
        const div = document.createElement('div');
        div.classList.add('material-item');
        div.textContent = material;
        materialsGrid.appendChild(div);
    });

    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    areaData.orders.forEach(order => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td><strong>${order.description}</strong><br><span class="description">${order.detail}</span></td>
                        <td>${order.unit}</td>
                        <td>$${order.rate.toFixed(2)}</td>
                        <td>$${order.price.toFixed(2)}</td>`;
        orderList.appendChild(tr);
    });

    const cancelledOrders = document.getElementById('cancelled-orders');
    cancelledOrders.innerHTML = '';
    areaData.cancelled.forEach(cancel => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td><strong>${cancel.description}</strong><br><span class="description">${cancel.detail}</span></td>
                        <td>${cancel.unit}</td>
                        <td>$${cancel.rate.toFixed(2)}</td>
                        <td>$${cancel.price.toFixed(2)}</td>`;
        cancelledOrders.appendChild(tr);
    });
}

function navigateTo(area) {
    window.location.href = `ventana4.html?area=${area}`;
}

function goBack() {
    window.history.back();
}

// Carga del área específica en la ventana 4
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get('area');
    if (area) {
        loadArea(area);
    }
};
