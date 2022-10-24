"use strict";

import { series } from "./data";
import { Serie } from "./Serie";

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"

function renderSeriesinTable(series: Serie[]): void {
  series.forEach(serie => {
    let trElement = document.createElement("tr");
    let tdElement = document.createElement("td");

    let buttonElement = document.createElement("button");
    buttonElement.type = "button";
    buttonElement.className = "btn btn-link";
    buttonElement.innerHTML = `${serie.nombre}`;
    buttonElement.id = "btn" + serie.id;

    trElement.innerHTML = `<td> ${serie.id} </td>`;
    tdElement.appendChild(buttonElement);
    trElement.appendChild(tdElement);
    trElement.innerHTML += `<td> ${serie.channel} </td> <td> ${serie.seasons} </td>`;
    
    seriesTbody.appendChild(trElement);

    let botn: HTMLElement = document.getElementById("btn"+serie.id)!;
    botn.onclick = () => desplegarInfo(serie);
  });
} 

function desplegarInfo(serie: Serie): void {

    let colInfo: HTMLElement = document.getElementById("info")!;
    let cdExistente = document.getElementById("cardId");
  
    if (cdExistente != null){
      colInfo.removeChild(cdExistente);
    }
    
    let cdElement: HTMLElement = document.createElement("div");
    let cdBody: HTMLElement = document.createElement("div");
  
    cdElement.className = "card";
    cdElement.id = "cardId"
    cdElement.setAttribute("style", "width: 20rem;");
  
    cdBody.className = "card-body";
    
    cdElement.innerHTML = `<img src=${serie.imagen} class="card-img-top">`;
  
    cdBody.innerHTML = `<h5 class="card-title"> ${serie.nombre} </h5>
    <p class="card-text"> ${serie.synapsis} </p>
    <a href= ${serie.link} class="btn btn-primary" target="_blank"> Más información </a>`;
  
    cdElement.appendChild(cdBody);
    colInfo.appendChild(cdElement);
  }
  
  renderSeriesinTable(series);
  
  

