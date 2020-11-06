window.onload = function () {
    RecibirDatos()
}


function RecibirDatos() {
    var nombreYApellido = document.getElementById("nombreYApellidoDelSolicitante").value

    var direccionRetiro = document.getElementById("direccionRetiroDelSolicitante").value

    var direccionEntrega = document.getElementById("direccionEntregaDelSolicitante").value

    var mail = document.getElementById("mailDelSolicitante").value

    var recordatorioLocalidad = document.createElement("p")

    recordatorioLocalidad.innerHTML = "No te olvides de indicar la localidad en las direcciones :)"
    
    document.getElementById("alertaLocalidad").appendChild(recordatorioLocalidad)


}
