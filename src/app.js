import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let articulo = ["the", "de", "for"]
  let adjetivo = ["good", "nice","bad"]
  let nombre = ["place", "thing", "weather"]

  let elementoLista = document.getElementById("lista");

  for ( let i=0; i<articulo.length; i++)
  {
    for ( let j=0; j<adjetivo.length; j++)
    {
      for ( let k=0; k<nombre.length; k++)
        {
          console.log(articulo[i] + adjetivo[j] + nombre[k] + '.com');
          
          elementoLista.innerHTML += "<li>" + articulo[i] + adjetivo[j] + nombre[k] + '.com' + "</li>";
        }
    }
  }
  
  
};
