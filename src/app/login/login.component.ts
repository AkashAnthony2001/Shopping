import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Valid Login 
  email: string = "";
  pass: string = ""
  warning: string = ""
  
  constructor(private route: Router) { }
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      pass: new FormControl('', Validators.required)
    });
  }

  user = ["anthony@gmail.com", "akash@gmail.com"]
  password = ["anthony", "akash"]

  submit(data:any) {
    this.email=data.email;
    this.pass=data.pass;
    for(let i=0;i<=this.user.length;i++){
      if (this.user[i]==(data.email) && this.password[i]==(data.pass)) {
        this.route.navigateByUrl("product_page")
      }
      else {
        let msg = "Invalid Credentials !"
        this.warning = msg;
      }
    }
    
  }

  //Show CheckBox
  changetype:boolean=true;
  isChecked="";
  toggle(evt:any){
    this.isChecked=evt.target.checked;
    this.changetype =! this.changetype;
  }



}
