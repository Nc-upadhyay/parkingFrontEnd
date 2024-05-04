import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookSlotComponent } from './pages/book-slot/book-slot.component';
import { ShowbookingComponent } from './pages/showbooking/showbooking.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookSlotComponent,
    ShowbookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,// backgroud loader
    NgxUiLoaderRouterModule,//loader start when navigate route
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    }),// loader start when http api call
    ToastrModule.forRoot(),//ToastrModule added
    BrowserAnimationsModule //required for animation module
  ],
  providers: [
    provideAnimations(),
    provideToastr({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar:true,
  
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
