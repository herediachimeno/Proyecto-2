function buscar() {
  let valoracionBuscar = document.getElementById("valoracion").value;
  fetch("/resenyas/buscarvaloracion/" + valoracionBuscar)
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
                <h5>${datos[i].item}</h5></a>
            </div>
        </div>
        <div class="resenyaTipoUsuario">
            <div class="resenyaUsuario">
                <p>Tipología: <strong>${datos[i].tipo}</strong></p>
            </div>
            <div class="resenyaUsuario">
                <p>${datos[i].texto_resenya}</></p>
            </div>
            <div class="resenyaUsuario">
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
      document.getElementById("mostrarResenyasBuscadas").innerHTML = resenyas;
    });
}

function buscarDato() {
  let datoBuscar = document.getElementById("datoBuscar").value;
  fetch("/resenyas/buscardato/" + datoBuscar)
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
                <h5>${datos[i].item}</h5></a>
            </div>
        </div>
        <div class="resenyaTipoUsuario">
            <div class="resenyaUsuario">
                <p>Tipología: <strong>${datos[i].tipo}</strong></p>
            </div>
            <div class="resenyaUsuario">
                <p>${datos[i].texto_resenya}</></p>
            </div>
            <div class="resenyaUsuario">
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
      document.getElementById("mostrarResenyasBuscadas").innerHTML = resenyas;
    });
}

function buscarNombre() {
  let nombreBuscar = document.getElementById("nombreBuscar").value;
  fetch("/resenyas/buscarpalabra/" + nombreBuscar)
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
                <h5>${datos[i].item}</h5></a>
            </div>
        </div>
        <div class="resenyaTipoUsuario">
            <div class="resenyaUsuario">
                <p>Tipología: <strong>${datos[i].tipo}</strong></p>
            </div>
            <div class="resenyaUsuario">
                <p>${datos[i].texto_resenya}</></p>
            </div>
            <div class="resenyaUsuario">
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
      document.getElementById("mostrarResenyasBuscadas").innerHTML = resenyas;
    });
}
