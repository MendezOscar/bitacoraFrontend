import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { CreatecategoryComponent } from './features/createcategory/createcategory.component';
import { EditcategoryComponent } from './features/editcategory/editcategory.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { HomeComponent } from './features/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BitacoriesComponent } from './features/bitacories/bitacories.component';
import { CreatebitacoriesComponent } from './features/createbitacories/createbitacories.component';
import { EditbitacoriesComponent } from './features/editbitacories/editbitacories.component';
import { BitacoriesbydateComponent } from './features/bitacoriesbydate/bitacoriesbydate.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CreatecategoryComponent,
    EditcategoryComponent,
    NavigationComponent,
    HomeComponent,
    BitacoriesComponent,
    CreatebitacoriesComponent,
    EditbitacoriesComponent,
    BitacoriesbydateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
