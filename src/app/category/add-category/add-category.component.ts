import { CategoryServiceService } from './../../services/category-service.service';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  imports: [HeaderComponent,FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  newCategory = {
    categoryname : '',
    categorystatus : ''
  };

  constructor(private CategoryServiceService:CategoryServiceService, private router: Router){};


  addcategory(){
    if(this.newCategory.categoryname.trim() && this.newCategory.categorystatus.trim()){
      this.CategoryServiceService.createCategory(this.newCategory).then(
        () => {
        alert('Category added succcessfully');
         this.router.navigate(['/category']);
        });
    }
  }
}
