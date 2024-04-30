import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})
export class BookSlotComponent {
  parkindAdressData: any
  name:string="";
  numberPlate:string="";
  
  imageUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TAaRPZV1z1azBh2TnWhOHb0hofWtLCOxDw&s"
  constructor(private api:ApiServiceService,private route: ActivatedRoute,private navi:Router) {
    this.route.queryParams.subscribe(params => {
      this.parkindAdressData = params
      console.log("data in book slot " + this.parkindAdressData);
    })
  }
  bookSlot(){
    alert('click '+this.name+ " "+this.numberPlate);
    const bookData={
      number_plate:this.numberPlate,
      username:this.name,
      addressId:this.parkindAdressData.id,
    }
    console.log("data going to post "+bookData );
    this.api.bookSlot(bookData).subscribe(
      response=>{        
        console.log("slot booed")
        this.navi.navigate(['/showbooking'],{queryParams:this.parkindAdressData})
      },error=>{
        console.error('Error submitting form:', error);
      }
    );
  }
}
