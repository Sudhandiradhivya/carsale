import { Component, OnInit , ViewChild} from '@angular/core';
import { DetailServiceService } from '../detailService.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-serviceDetails',
  templateUrl: './serviceDetails.component.html',
  styleUrls: ['./serviceDetails.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  displayedColumns: string[] = ['custId', 'vehicleNumber', 'mileage','branch','service','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  DetailService: any;

  constructor(private service:DetailServiceService) { }
  getLoginvalue:any=" ";
   ngOnInit() {
     this.getServiceList();
   }
   getServiceList(){
    this.service.getServiceList().subscribe({
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
  deleteService(id:number){
   this.service.deleteService(id).subscribe({
    next:(res)=>{
      alert('User deleted');
      this.getServiceList();
    }

   })
  }



}
