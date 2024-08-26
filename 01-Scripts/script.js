function selectProject(projectName) {
    // Aquí rediriges a la siguiente ventana, dependiendo del proyecto seleccionado
    // Por ahora, solo mostraremos un mensaje en la consola

    console.log(`Proyecto seleccionado: ${projectName}`);
    // Aquí podrías redirigir a la Ventana 2 usando window.location.href
    // Ejemplo:
    // window.location.href = `ventana2.html?project=${projectName}`;
}

function selectProject(projectName) {
    console.log(`Proyecto seleccionado: ${projectName}`);
    // Redirigir a la Ventana 2
    window.location.href = `ventana2.html?project=${projectName}`;
}
