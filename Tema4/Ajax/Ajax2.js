// 2. Escribe un programa que muestre información meteorológica de una localidad de Huelva 
// (o cualquier otra provincia de tu elección): temperatura máxima y mínima, 
// estado del cielo por tramo horario, dirección y velocidad del viento y humedad relativa).

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    myFunction(this);
  }
  xhttp.open("GET", "AEMET-Madrid.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  let x = xmlDoc.getElementsByTagName("temperatura");
  let table = "<tr><th>T. Máxima</th><th>T. Mínima</th></tr>";
  for (let i = 0; i < x.length; i++) {
    table += "<tr><td>" +
      x[i].getElementsByTagName("maxima")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("minima")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }

  x = xmlDoc.getElementsByTagName("estado_cielo");
  let table1="<tr><th>Est. Cielo</th></tr>";
  for (let i = 0; i <x.length; i++) {
    table1 += "<tr><td>" +
    x[i].attributes[0].nodeValue +
    "</td></tr>";
   }
   x = xmlDoc.getElementsByTagName("viento");
  let table2="<tr><th>Direcc. Viento</th><th>Vel. Viento</th><th>Humedad Relativa</th></tr>";
  for (let i = 0; i <x.length; i++) {
    table1 += "<tr><td>" +
    x[i].attributes[0].nodeValue +
    "</td></tr>";
   }  
  document.getElementById("demo").innerHTML = table;
  document.getElementById("cielo").innerHTML = table1;
  document.getElementById("viento").innerHTML = table2;

}