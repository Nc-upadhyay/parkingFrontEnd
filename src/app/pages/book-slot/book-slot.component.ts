import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private api:ApiServiceService,private route: ActivatedRoute,private navi:Router,private toast:ToastrService) {
    this.route.queryParams.subscribe(params => {
      this.parkindAdressData = params
      console.log("data in book slot " + this.parkindAdressData);
    })
  }
  bookSlot(){
    const bookData={
      number_plate:this.numberPlate,
      username:this.name,
      addressId:this.parkindAdressData.id,
    }
    this.api.bookSlot(bookData).subscribe(
      response=>{        
        this.navi.navigate(['/showbooking'],{queryParams:this.parkindAdressData})
      },error=>{
        this.toast.error("Something goes wrong")
        console.error('Error submitting form:', error);
      }
    );
  }
}
