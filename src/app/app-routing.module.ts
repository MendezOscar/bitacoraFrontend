import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { CreatecategoryComponent } from './features/createcategory/createcategory.component';
import { EditcategoryComponent } from './features/editcategory/editcategory.component';
import { BitacoriesComponent } from './features/bitacories/bitacories.component';
import { CreatebitacoriesComponent } from './features/createbitacories/createbitacories.component';
import { BitacoriesbydateComponent } from './features/bitacoriesbydate/bitacoriesbydate.component';


const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: '', component: HomeComponent},
  {path: 'category/create', component: CreatecategoryComponent},
  {path: 'category/edit/:id', component: EditcategoryComponent},
  {path: 'bitacories', component: BitacoriesComponent},
  {path: 'bitacory/create', component: CreatebitacoriesComponent},
  {path: 'bitacory/edit/:id', component: EditcategoryComponent},
  {path: 'bitacoty/range', component: BitacoriesbydateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
