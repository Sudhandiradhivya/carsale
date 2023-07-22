import { Component, OnInit } from '@angular/core';
import { FormBuilder, PatternValidator, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { CullinanService } from '../cullinan/cullinan.service';
@Component({
  selector: 'app-Modelsregister',
  templateUrl: './Modelsregister.component.html',
  styleUrls: ['./Modelsregister.component.css']
})
export class ModelsregisterComponent implements OnInit {
  register: any;
retUrl:any;


constructor(private fb:FormBuilder, private service:ServiceService,private route:Router) { }

OrdersForm=this.fb.group({
   models:[,[Validators.required]],
    Title:[,[Validators.required]],
    fname:[,[Validators.required]],
    lname:[,[Validators.required]],
    phonenumber:[,[Validators.required]],
    email:[,[Validators.required]],
    payment:[,[Validators.required]]
  })

  selectmodels=this.service.content;
  Price=this.service.model;
  Models=this.service.model;
  ngOnInit() {
    this.OrdersForm.controls['models'].setValue(this.service.content)
     this.OrdersForm.controls['payment'].setValue(this.service.model)

  }
  formRegister() {
    var body={
      "models":this.selectmodels,
      "Title":this.OrdersForm.value.Title,
      "fname":this.OrdersForm.value.fname,
      "lname":this.OrdersForm.value.lname,
      "phonenumber":this.OrdersForm.value.phonenumber,
      "email":this.OrdersForm.value.email,
      "payment":this.Price

    }
      this.service.postOrderDetails(body).subscribe((data: any)=>{
      alert('Order Successfully');
      let close=document.getElementById("ref");
      close?.click()


    });


    }
    cancel(){
      // alert("Do you want to leave the page");
    }

}
