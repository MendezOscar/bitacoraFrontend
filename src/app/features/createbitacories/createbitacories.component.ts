import { Component, OnInit } from '@angular/core';
import { BitacoryService } from 'src/app/services/bitacory.service';
import { Router } from '@angular/router';
import { Bitacory } from 'src/app/models/Bitacory';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-createbitacories',
  templateUrl: './createbitacories.component.html',
  styleUrls: ['./createbitacories.component.css']
})
export class CreatebitacoriesComponent implements OnInit {
  categories: Category[];
  bitacory: Bitacory;
  date: Date;
  activity: string;
  category: string;
  initialDate: Date;
  finalDate: Date;

  constructor(private bitacoraService: BitacoryService, private router: Router,
              private categoryService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategorires().subscribe(res => {
      this.categories = res;
    });
  }

  createBitacory() {
    this.bitacory = new Bitacory();
    this.bitacory.date = this.date;
    this.bitacory.activity = this.activity;
    // tslint:disable-next-line: radix
    this.bitacory.categoryId = parseInt(this.category);
    this.bitacory.initialDate = this.initialDate;
    this.bitacory.finalDate = this.finalDate;

    if (this.bitacory) {
      this.bitacoraService.createBitacory(this.bitacory).subscribe(() => {
        this.router.navigate(['/bitacories']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/bitacories']);
  }

}
