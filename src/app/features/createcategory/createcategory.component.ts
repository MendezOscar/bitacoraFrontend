import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/Category';
import { CastExpr } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {
  name: string;
  category: Category;

  constructor(private categoryService: CategoriesService, private router: Router) { }

  ngOnInit() {
  }

  createCategory() {
    this.category = new Category();
    this.category.name = this.name;
    if (this.category) {
      this.categoryService.createCategory(this.category).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/categories']);
  }

}
