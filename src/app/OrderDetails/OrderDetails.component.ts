import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DetailServiceService } from '../detailService.service';
@Component({
  selector: 'app-OrderDetails',
  templateUrl: './OrderDetails.component.html',
  styleUrls: ['./OrderDetails.component.css']
})
export class OrderDetailsComponent implements OnInit {

  displayedColumns: string[] = ['id','models','fname', 'lname','email','phonenumber','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  DetailService: any;

  constructor(private service:DetailServiceService) { }
  getLoginvalue:any=" ";
   ngOnInit() {
     this.getOrderList();
   }
   getOrderList(){
    this.service.getOrderList().subscribe({
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
  deleteOrder(id:number){
   this.service.deleteOrder(id).subscribe({
    next:(res)=>{
      alert('Order Canceled');
      this.getOrderList();
    }

   })
  }




}
