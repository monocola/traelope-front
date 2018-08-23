import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit {

  public name = 'Listado de Marcas';

  constructor() { }

  ngOnInit() {
  }

}
