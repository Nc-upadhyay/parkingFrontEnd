import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() searchTerm: string = "";
  searchResults: any
  imageUrl:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TAaRPZV1z1azBh2TnWhOHb0hofWtLCOxDw&s"
  constructor(private api: ApiServiceService,private router:Router,private toast:ToastrService) { 
    this.toast.info("WelCome!")
  }
  search():void {
    console.log("search text is "+this.searchTerm);
    this.api.searchText(this.searchTerm).subscribe({
      next: (data:any) => {
        this.searchResults = data;
        console.log("data " + data);
      },
      error:(error:Error):void=>{
        console.log(error);
      }

    })
    console.log(this.searchTerm);
  }
   goToBookingPages(parkingAddres:any){
    // alert(" hello "+parkingAddres.locality)
    let available=parkingAddres.available;
    console.log("availibility "+available);
    if(available<1)
      {
       this.toast.error("Opps!, Slot not available") 
       return;
      }
    this.navigateToBookSlotPages(parkingAddres);
  }
  navigateToBookSlotPages(data:any){
    
    this.router.navigate(['/book-slot'],{queryParams:data});
  }
}
