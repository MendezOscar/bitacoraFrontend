import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  category: Category;
  name: string;

  constructor(private categoryService: CategoriesService, private router: Router, private route: ActivatedRoute) { 
    this.category = new Category();
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCategory(id);
  }

  getCategory(id: number) {
    this.categoryService.getcategory(id).subscribe(res => {
      this.category = res;
    });
  }

  editCategory() {
    this.category.name = this.name;
    this.categoryService.editCategory(this.category).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }

  cancel() {
    this.router.navigate(['/categories']);
  }

}
