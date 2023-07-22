import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DetailServiceService } from '../detailService.service';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  displayedColumns: string[] = ['id','Model','StartingPrice','imageUrl'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  DetailService: any;
  news:any;
  reviews:any;
  offerStatus:boolean=true;
  constructor(private service:DetailServiceService,private activateRoute:ActivatedRoute) { }
  getLoginvalue:any=" ";
   ngOnInit() {
     this.getImagesList();
     this.getNewsList();
     this.getReviewList();
     this.startTimer();
     this.activateRoute.fragment.subscribe((value)=>{
          console.log(value);
          this.jumpTo(value);
     });

   }
   jumpTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
 }
   getImagesList(){
    this.service.getImagesList().subscribe({
      next:(res:any)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      },
      error:console.log,
    })
   }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  products=[
      {name:'Images',right:'News',left:'Reviews'},
      {name:'News'},
      {name:'Reviews'}

     ];

     getNewsList(){
       this.service.getNewsList().subscribe((response)=>
       {
          this.news=response;
       })
     }
     getReviewList(){
      this.service.getReviewList().subscribe((response)=>
       {
          this.reviews=response;
       })
     }

     models = [
      {
        id: 1,
        name: "Cullinan",
        color: ["White", "Blue", "Black"],
        price: 680000,
        discountPrice:580000,
        items_left: 3,
        imageUrl: "https://www.pngall.com/wp-content/uploads/2/Rolls-Royce-PNG-HD-Quality.png",

      },
      {
        id: 2,
        name: "Phantom",
        color: ["White", "Blue", "Black"],
        price: 730000,
        discountPrice:500000,
        items_left: 3,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW73bCGyWkAmDAypbBEGcut6BZ-oe1qMMhyvIwqfijnhrHAdiVuO98QgD62w2Gi3O8OA&usqp=CAU",

      },
      {
        id: 3,
        name: "Wraith",
        color: ["White", "Blue", "Black", "Brown", "Red"],
        price: 820000,
        items_left: 3,
        imageUrl: "data:image/jpeg;base64,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",

      },
      {
        id: 4,
        name: "Cullinan",
        color: ["White", , "Brown", "Red"],
        price: 670000,
        discountPrice:630000,
        items_left: 3,
        imageUrl: "https://imgd.aeplcdn.com/664x374/ec/EE/0d/10758/img/m/Rolls-Royce-Ghost-Right-Front-Three-Quarter-50925_ol.jpg?v=201711021421&q=75",
      },
      {
        id: 5,
        name: "Dawn",
        color: ["White", "Blue", "Black"],
        price: 2500000,
        items_left: 3,
        imageUrl: "https://imgd-ct.aeplcdn.com/664x415/cw/ec/23875/RollsRoyce-Dawn-Right-Front-Three-Quarter-75144.jpg?wm=0&q=75",
      },
      {
        id: 6,
        name: "Ghost",
        color: ["White", "Blue", "Black"],
        price: 1500000,
        items_left: 8,
        imageUrl: "https://imgd.aeplcdn.com/664x374/cw/ec/21135/RollsRoyce-Wraith-Right-Front-Three-Quarter-62429.jpg?v=201711021421&q=75",
        slug: "nike-phantom-vision-elite-dynamic-fit-fg"
      },
      {
        id: 7,
        name: "Wraith",
        color: ["White", "Brown", "Red", "Black"],
        price: 800000,
        discountPrice:600000,
        items_left: 3,
        imageUrl: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/PhantomModelImage.jpg",
      },
      {
        id: 8,
        name: "Ghost",
        color: ["White", "Blue", "Black"],
        price: 140000,
        discountPrice:120000,
        items_left: 7,
        imageUrl: "https://imgd.aeplcdn.com/664x374/cw/ec/34427/RollsRoyce-Cullinan-Exterior-158729.jpg?wm=0&q=75",

      },
      {
        id: 9,
        name: "Phantom",
        size: [6, 7, 8, 9, 10],
        color: ["White", "Blue", "Black", "Brown", "Red"],
        price: 1370000,
        items_left: 2,
        imageUrl: "https://images.garipoint.com/get_new_car_images.php?width=580&height=320&path=model_images/rolls-royce/ghost-series-ii/rolls-royce-ghost-series-ii-primary.jpg",

      }

    ];

    Total=this.models;


   TotalModels=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.Total.length);
    },2000)
   })


    searchText:string='';

    onSearchTextChanged(searchValue:string){
     this.searchText=searchValue;

  }


  timer!: number;
  startTimer() {
    this.timer = 5; // Set the initial timer value

    setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.removeExpiredProduct(); // Call the method to remove expired products
      }
    }, 1000); // Decrease timer every 1 second (1000 milliseconds)
  }

  removeExpiredProduct() {
  //   const expiredProductIndex = this.models.findIndex(Total =>
  //   this.models.find((value)=>{value.discountPrice})?true:false);
  //   if (expiredProductIndex > -1) {
  // this.models.splice(expiredProductIndex, 1);


  //   }
 this.models
  }

}

