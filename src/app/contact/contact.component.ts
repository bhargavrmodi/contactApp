import { Component, OnInit } from '@angular/core';

import { ContactDetails } from '../models/contact-details'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new ContactDetails();
  contactsArray = [];
  
  constructor() { }

  ngOnInit() {
  }

  saveData(contactObj){
    console.info("contactObj", contactObj)
    if(contactObj.hasOwnProperty('index') && contactObj.index){
      this.contactsArray[contactObj.index] = contactObj;
    }else if(contactObj.index != 0){
      this.contactsArray.push(contactObj);
    }
    this.model = new ContactDetails();
  }

  removeContact(index){
    this.contactsArray.splice(index, 1);
  }

  editContact(index, contact){
    this.model = contact;
    this.model.index = index;
  }

}