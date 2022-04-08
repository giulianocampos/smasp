import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-mapeamento',
  templateUrl: './mapeamento.component.html',
  styleUrls: ['./mapeamento.component.scss']
})
export class MapeamentoComponent implements OnInit {

  mapa: Mapboxgl.Map;

  constructor() { }

  ngOnInit(): void {
    
    (Mapboxgl as any).accessToken = environment.mapkey;
    this.mapa = new Mapboxgl.Map({
      container: 'map',
      //style: 'mapbox://styles/mapbox/streets-v11',
      //style: 'mapbox://styles/mapbox/dark-v10',
      style: 'mapbox://styles/mapbox/navigation-night-v1',
      //center: [-46.654204, -23.563388], //posição de início
      center: [-46.6358499, -23.5550799], //posição de início
      zoom: 12.5
    });

    //Abaixo será criado o buscador

    this.mapa.addControl(
      new MapboxGeocoder({
        accessToken: environment.mapkey,
        mapboxgl: Mapboxgl
      })
    );
  }
}
