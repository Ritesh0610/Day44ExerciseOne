import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public objp:PlayerService) { }

  ngOnInit(): void {
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    this.objp.formData={PId:0,PName:'',PTeam:''}
  }
  onSubmit(form:NgForm){
    this.createPlayer(form);
  }
  createPlayer(form:NgForm){
    this.objp.insertPlayer().subscribe(
      res=>{
        alert("Player resgistration Success!!!");        
        this.resetForm();
      },
      err=>{alert("Registeration fail"+err);}
    )
  }

}
