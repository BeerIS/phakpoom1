import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  /*items = ["Phakpoom",
          "Paradon",
          "Nattha",
          "Maturos",
          "Usanee"]; */
  items = [
      { name : "Phakpoom", tel: "0834373083", avatar: "1.png" },
      { name : "Supanan", tel: "9999999", avatar: "2.png" },
      { name : "Wassana", tel: "8888888", avatar: "3.png" },
      { name : "Sittichai", tel: "7777777", avatar: "4.png" },
      { name : "Krisana", tel: "6666666", avatar: "5.png" }
  ];
  

  itemSelected(item : string){
    console.log("Selected Item: ", item);
  }
  
  constructor(public navCtrl: NavController) {

  }

}
