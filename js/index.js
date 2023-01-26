const data = document.getElementById("data");
const study = document.getElementById("study");
const jobs = document.getElementById("jobs");
const slider = document.getElementById("slider");



let meData = [
  {
    //data
    nombre: "Carlos Martin",
    apellido: "Gimenez",
    dia: "11",
    mes: "Julio",
    anio: "1983",
    nacionalidad: "Argentino",
    calle: "Corrientes",
    numero: "1079",
    localidad: "Santa Elena",
    provincia: "Entre Rios",
    estadoCivil: "Soltero",
    perfil: "../img/perfil.png",
    secundario: "Bachiller Informático Contable",
    institucionSec: "Instituto Santa Rosa de Lima D-103",
    titulo: "Técnico Universitario en Tecnologías de la Información",
    nombreuniversidad: "Universidad Tecnológica Nacional",
    region: "Facultad Regional Santa Fé",
    //jobs
    job1: "Profesor de Tecnologías de la Información y la Comunicación",
    lugarjob1: "Escuela N°51 Madre Patria",
    tiempojob1: "Marzo 2022",
    hastajob1: "Actualmente",
    job2: "Referente Técnico escolar",
    lugarjob2: "Escuela Secundaria N°7 José Manuel Estrada",
    tiempojob2: "Noviembre 2022",
    hastajob2: "Actualmente",
    //contac-me
    correo: "martingimenez2222@gmail.com",
    telefono: "3437431590",
    linkedin: "",
  },
];
let skill = [
    { nombre: "Java", img:"../img/java.png"},
    { nombre: "Javascript", img:"../img/javascript.png"},
    { nombre: "Html", img:"../img/html5.png"},
    { nombre: "Github", img:"../img/github.png"},
    { nombre: "Laravel", img:"../img/laravel.png"},
    { nombre: "MySql", img:"../img/mysql.png"},
    { nombre: "Node.js", img:"../img/node.png"},
    { nombre: "Office", img:"../img/office.png"},
    { nombre: "CSS", img:"../img/ccs3.png"},
    { nombre: "Php", img:"../img/php.png"},
    { nombre: "React.js", img:"../img/react.png"},
];

meData.map((x) => {
  data.innerHTML += `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${x.perfil}"
          class="img-fluid rounded-start"
          alt="Card title"
        />
      </div>
      <div class="col-md-8 me">
        <div class="card-body text-center">
          <h5 class="card-title" id="nombrecompleto">${x.apellido} ${x.nombre}</h5>
          <p class="card-text" id="carrera">${x.titulo}</p>
          <p class="card-text" id="univ">${x.nombreuniversidad}</p>
          <p class="card-text" id="univ">${x.region}</p>       
        </div>
        <div class="card-body text-start">
        <ul>
          <li class="card-text" id="nacimiento">Fecha de nacimiento: ${x.dia} ${x.mes} de ${x.anio}</li>
          <li class="card-text" id="nacionalidad">Nacionalidad: ${x.nacionalidad}</li>
          <li class="card-text" id="estCivil">Estado Civil: ${x.estadoCivil}</li>
          <li class="card-text" id="direccion">Direccion: ${x.calle}  ${x.numero}</li>
          <li class="card-text" id="localidad">Localidad: ${x.localidad}</li>
          <li class="card-text" id="localidad">Provincia: ${x.provincia}</li>
        </ul>
        </div>
      </div>
    </div>
  </div>`
})

meData.map((x) => {
    study.innerHTML +=`<div class="card mb-3 ">
        <div class="card text-center me">
            <div class="card-body">
            <h5 class="card-text">Secundaria: Completo</h5>

            <p class="card-text">${x.institucionSec}</p>
            <p class="card-text">${x.secundario}</p>
        </div>
        </div>
        <div class="card text-center me">
        <div class="card-body">
        <h5 class="card-text">Universitaria: Completo</h5>

        <p class="card-text">${x.nombreuniversidad}</p>
        <p class="card-text">${x.titulo}</p>
    </div>
    </div>
    </div>`;
  })

  meData.map((x) => {
    jobs.innerHTML +=`<div class="card mb-3 ">
        <div class="card text-center me">
            <div class="card-body">
                <p class="card-text">${x.job1}</p>
                <p class="card-text">${x.lugarjob1}</p>
                <p class="card-text">Desde: ${x.tiempojob1}</p>
                <p class="card-text">Hasta: ${x.hastajob1}</p>
            </div>
        </div>
        <div class="card text-center me">
            <div class="card-body">
            <p class="card-text">${x.job2}</p>
            <p class="card-text">${x.lugarjob2}</p>
            <p class="card-text">Desde: ${x.tiempojob2}</p>
            <p class="card-text">Hasta: ${x.hastajob2}</p>
            </div>
        </div>
    </div>`;
  })

  let myName = document.getElementById("nombrecompleto");

  myName.addEventListener('mouseover',function(){
    myName.style.color='darkblue'
  })
  myName.addEventListener('mouseout',function(){
    myName.style.color='black'
  })


