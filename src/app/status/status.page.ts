import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

myStatus:string = "";

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  SaveStatus(){
    this.storage.create()
    .then(()=>{
      this.storage.set("status", this.myStatus) 
      .then(()=>{console.log(this.myStatus)})
      .catch();
    })
    .catch();

  }

}
