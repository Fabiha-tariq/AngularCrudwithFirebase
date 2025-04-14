import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { CategoryServiceService } from '../../services/category-service.service';
import { error } from 'node:console';

@Component({
  selector: 'app-update-category',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'] // notice the plural "styleUrls"
})
export class UpdateCategoryComponent {

  categoryId: string = '';
  categoryData: any = {};

  constructor(private route: ActivatedRoute, private categoryService: CategoryServiceService, private router: Router ) {}

  ngOnInit(){
    this.categoryId = this.route.snapshot.paramMap.get('id') || '';

     this.categoryService.getCategoryById(this.categoryId).subscribe((data) => {
      this.categoryData = data;
      console.log('Fetched category data:', this.categoryData);
    });
  }

  updateCategory(){
    if(this.categoryId){
      this.categoryService.updatesCategory(this.categoryId,this.categoryData).then(()=>{
        alert('Category added succcessfully');
        this.router.navigate(['/category']);
       });
    }
  }

  // updatecategory(): void {
  //  this.categoryService.updateCategory(this.categoryId, this.categoryData)
  //     .then(() => {
  //       console.log('Category updated successfully!');
  //     })

  //     .catch((error : any) => {
  //       console.error('Error updating category:', error);
  //     });
  // }
}
