import { CategoryServiceService } from './../../services/category-service.service';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-read-category',
  imports: [HeaderComponent,NgFor],
  templateUrl: './read-category.component.html',
  styleUrl: './read-category.component.css'
})
export class ReadCategoryComponent {

  constructor(private CategoryServiceService:CategoryServiceService){};
  item : any[] = [];

  ngOnInit() {
    this.CategoryServiceService.getCategory();
    this
  }

}
