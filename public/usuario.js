recibirResenyasUsuario();

// Función para recibir reseñas (máximo 4 por fila)

function recibirResenyasUsuario() {
  fetch("/resenyas/usuario")
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      let resenyas = "";
      let filaCuatroResenyas = 1;
      for (let i = 0; i < datos.length; i++) {
        console.log(filaCuatroResenyas);
        if (filaCuatroResenyas === 1) {
          resenyas += `
                    <div class="filaCuatroResenyas">
                `;
        }
        resenyas += `
                    <div class="resenyaIndividual">
                        <div class="ocultarDiv">${datos[i]._id}</div>
                        <div class="resenyaIndividualNombre">                        
                            <h3>${datos[i].titulo_resenya}</h3>
                        </div>
                        <div class="resenyaIndividualPeli">
                            <div>               
                                <a href="${datos[i].texto_resenya}" target="_blank"><img src="./img/icono_peli.png" alt="logotipo"/></a>
                            </div>
                            <div>                        
                                <a href="${datos[i].texto_resenya}" target="_blank"><h5>${datos[i].item}</h5></a>
                            </div>
                        </div>
                        <iframe class="videoResponsive" width="314" height="240" src="${datos[i].item}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                        
                        <div id="resenyaTCDMain">
                            <div class="resenyaTCD">
                                <div class="resenyaTCDIcono">
                                    <img src="./img/icono_tiempo.png" alt="icono_tiempo"/>
                                </div>
                                <p>${datos[i].tiempo} h.</p>
                            </div>
                            <div class="resenyaTCD">
                                <div class="resenyaTCDIcono">
                                    <img src="./img/icono_valoracion.png" alt="icono_valoracion"/>
                                </div>
                                <p>Dificultad ${datos[i].valoracion}</p>
                            </div>
                        </div>
                        <div class="resenyaTipoUsuario">
                            <div class="resenyaTipo">
                                <p><strong>${datos[i].tipo}</strong></p>
                            </div>
                            <div class="resenyaUsuario">
                                <div class="resenyaEditarBorrar">
                                    <div class="resenyaEditarBorrarIcono">
                                    <a href="./usuario_editar.html?id=${datos[i]._id}" target="_blank"><img src="./img/icono_editar.png" alt="icono_editar"/></a>
                                    </div>
                                    <div class="resenyaEditarBorrarIcono">
                                       <button onclick="eliminar('${datos[i]._id}')" id="borrarResenya"><img src="./img/icono_borrar.png" alt="icono_borrar"/></button>
                                    </div>
                                </div>
                                <p><strong>By:</strong> ${datos[i].usuario}</p>
                            </div>
                        </div>
                    </div>
            `;

        if (filaCuatroResenyas % 4 === 0) {
          resenyas += `
                    </div>
                `;
          filaCuatroResenyas = 1;
        } else {
          filaCuatroResenyas += 1;
        }
      }
      document.getElementById("resenyasMostrarUsuario").innerHTML = resenyas;
    });
}

// Función añadir reseñas, con todos los valores a tener en cuenta. Trailer se refiere

function anyadir() {
  const titulo_resenya = document.getElementById("titulo_resenya").value;
  const texto_resenya = document.getElementById("texto_resenya").value;
  const item = document.getElementById("item").value;
  const valoracion = document.getElementById("valoracion").value;
  const tipo = document.getElementById("tipo").value;
  const usuario = document.getElementById("usuario").value;

  const resenyaInsertar = {
    titulo_resenya,
    item,
    texto_resenya,
    valoracion,
    tipo,
    usuario,
  };

  fetch("/resenyas/nuevaResenya", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resenyaInsertar),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
      window.alert("La reseña se ha guardado correctamente");
      recibirResenyasUsuario();
    });
}

// FUNCIÓN ELIMINAR

function eliminar(id) {
  fetch(`/resenyas/borrarResenya/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
      window.alert("La resenya se ha borrado correctamente");
      recibirResenyasUsuario();
    });
}

function editarResenya() {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let idParametro = urlParams.get("id");

  if (idParametro !== null) {
    cargarResenyaEditar(idParametro);
  }
}
