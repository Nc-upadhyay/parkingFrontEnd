import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSlotComponent } from './pages/book-slot/book-slot.component';
import { SearchComponent } from './pages/search/search.component';
import { ShowbookingComponent } from './pages/showbooking/showbooking.component';

const routes: Routes = [
  {path:'book-slot',component:BookSlotComponent,data : {title:'book slot'}},
  {path:'search',component:SearchComponent,title:'search'},
  {path:'showbooking',component:ShowbookingComponent,data:{title:'showbooking'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
