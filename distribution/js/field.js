window.onload = inicializar;
  function inicializar(){
    tbodyTablaVisitante = document.getElementById("tbody-tabla-visitante");
    refMostrarVisitante = firebase.database().ref().child("Incidencia");
    mostrarvisitantesDeFirebase();
  }

const mostrarvisitantesDeFirebase = () => {
  refMostrarVisitante.on("value", function(snap){
    let datos = snap.val();
    filasAMostrar="";
    for(var key in datos){
      filasAMostrar +="<<tr>" +
                        "<td>" + datos[key].aQuienVisita +  "</td>"  +
                        "<td>" + datos[key].celular +  "</td>"  +
                        "<td>" + datos[key].company +  "</td>"  +
                        "<td>" + datos[key].name +  "</td>"  +
                        "<td>" + datos[key].date +  "</td>"  +
                        "<td>" + datos[key].hour +  "</td>"  +
                        "<td>" + datos[key].photo +  "</td>"  +
                        "<td> </td>"  +
                      "<tr>";
    }
    tbodyTablaVisitante.innerHTML = filasAMostrar;
  })
}
