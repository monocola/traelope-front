import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

    public name = 'Listado de Categorias';

  constructor() { }

  ngOnInit() {
  }

}
