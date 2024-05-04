import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.css']
})
export class ShowbookingComponent {
  bookSlot:any
  // result={
  //   "id": 1,
  //   "locality": "Nathupura",
  //   "city": "Delhi",
  //   "state": "Delhi",
  //   "pincod": "110084",
  //   "mapLink": "https://www.google.com/maps/place/New+Delhi,+Delhi,+India",
  //   "available": 46
  // }
  imageUrl:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TAaRPZV1z1azBh2TnWhOHb0hofWtLCOxDw&s"

  constructor(private router:ActivatedRoute,private toast:ToastrService){
  this.router.queryParams.subscribe(param=>{
    this.bookSlot=param
  })
  this.showSuccessToast();
  }
  showSuccessToast(){
    this.toast.success('Slot Booked !');
  }
}
