// window.onload = inicializar;
// function inicializar() {
// 	tbodyTablaVisitante = document.getElementById("tbody-tabla-visitante");
// 	refMostrarVisitante = firebase.database().ref().child("Reporte-incidencia");
// 	mostrarvisitantesDeFirebase();
// }

// const mostrarvisitantesDeFirebase = () => {
// 	refMostrarVisitante.on("value", function (data) {
// 		let datos = data.val();
// 		const inci = Object.values(data.val());
// 		filasAMostrar = "";
// 		inci.forEach((element) => {
// 			Object.values(element).forEach((e) => {
// 				// if (value === e.Region) {
// 					filasAMostrar += "<<tr>" +
// 						"<td>" + e.Mes + "</td>" +
// 						"<td>" + e.Region + "</td>" +
// 						"<td>" + e.Responsable + "</td>" +
// 						"<td>" + e.Sector + "</td>" +
// 						"<td>" + e.Sede + "</td>" +
// 						"<td>" + e.deadline + "</td>" +
// 						"<td>" + e.id + "</td>" +
// 						"<td>" + e.nro + "</td>" +
// 						"<td>" + e.status + "</td>" +
// 						"<td> </td>" +
// 						"<tr>";
// 				// }
// 			});
// 		});

// 		console.log()
// 		tbodyTablaVisitante.innerHTML = filasAMostrar;
// 	});
// }

// ==========================================

const select = document.getElementById('select');
const countries = document.getElementById('countries');
const content = document.getElementById('content');


firebase.database().ref().child('Paises').on('value', function (data) {
  const dataPaises = Object.keys(data.val());
  dataPaises.forEach(el => {
    countries.innerHTML += `<option>${el}</option>`;
  });
})


const selectCountries = (e) => {
  const value = e.target.value;
  firebase.database().ref().child('Incidencia').on('value', function (data) {
    const incidents = Object.values(data.val());
    let template = '';
    incidents.forEach((element) => {
      Object.values(element).forEach((e) => {
        if (value === e.Region) {
          // console.log(value);
          template += `
          <div class="card">
          <div class="card-body">
          <div><p>${e.Responsable}<p>
          <p>${e.Sector}<p>
          <p>${e.deadline}<p>
          <p>${e.status}<p></div>
          </div>
          </div>`;
        }
      })
		})
		
		const array = [];
    content.innerHTML = template;
  })
}
countries.addEventListener('change', selectCountries)
