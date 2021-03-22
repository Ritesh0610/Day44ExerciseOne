import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  readonly ApiUrl='https://localhost:44353/api/Players';
  formData:Player=new Player();

  constructor(private objhttp:HttpClient) { }
  insertPlayer()
  {
    return this.objhttp.post(this.ApiUrl,this.formData);
  }
}
