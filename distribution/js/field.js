window.onload = inicializar;
function inicializar() {
    tbodyTablaVisitante = document.getElementById("tbody-tabla-visitante");
    refMostrarVisitante = firebase.database().ref().child("Incidencia");
    mostrarvisitantesDeFirebase();
}

firebase.database().ref().child('Incidencia').on('value', function (data) {
    const incidents = Object.values(data.val());
    content.innerHTML = '';
    filasAMostrar = "";
    incidents.forEach((element) => {
        Object.values(element).forEach((e) => {

            console.log("holaaa");
            console.log(e)
            filasAMostrar += "<tr>" +
                "<td>" + e.Mes + "</td>" +
                "<td>" + e.Region + "</td>" +
                "<td>" + e.Responsable + "</td>" +
                // "<td>" + e.name + "</td>" +
                // "<td>" + e.date + "</td>" +
                // "<td>" + e.hour + "</td>" +
                // "<td>" + e.photo + "</td>" +
                // "<td> </td>" +
                "<tr>";
        });
    });
    tbodyTablaVisitante.innerHTML = filasAMostrar;
})

