import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  debitCardForm=this.fb.group({
    cardNumber:[,[Validators.required]],
    expireDate:[,[Validators.required]],
    ccvNumber:[,[Validators.required]]
  })

  pay(){
    alert('Pay Successful');
window.location.reload();
  }
}
