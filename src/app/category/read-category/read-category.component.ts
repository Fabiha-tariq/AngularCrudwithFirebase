import { CategoryServiceService } from './../../services/category-service.service';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-category',
  imports: [HeaderComponent,NgFor],
  templateUrl: './read-category.component.html',
  styleUrl: './read-category.component.css'
})
export class ReadCategoryComponent {

  constructor(private CategoryServiceService:CategoryServiceService,  private router: Router){};
  item : any[] = [];

  ngOnInit() {
    this.CategoryServiceService.getCategory();
    this.CategoryServiceService.getItemObservable().subscribe((data) => {
      this.item = data;
    });
  }

  newCategory = {
    categoryname : '',
    categorystatus : ''
  };
  editCategoryId :string | null = null;

  SelectCategorytoEdit(id: string){
    this.router.navigate(['/category/update-category/', id]);
  }

}
