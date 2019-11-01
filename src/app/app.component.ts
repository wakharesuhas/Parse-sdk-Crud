import { Component, TemplateRef, ViewChild, Query, Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import * as Parse from 'parse';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { query } from '@angular/core/src/render3';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { CallService } from 'src/app/call.service';
import { error } from '@angular/compiler/src/util';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
// import {NewserviceService } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
@Injectable({
  providedIn: 'root'
})

export class AppComponent {
 
  addform: FormGroup;
  datalist: any=[];
  editform: FormGroup;
  objectId: string;
  // modalRef: any;
  
  // modalref: BsModalRef;
  // @ViewChild('edit', { static: false }) editmodal: TemplateRef<any>;
  
  constructor( private http : HttpClient,private formBuilder: FormBuilder
    ){
    const Parse = require('parse');
    Parse.initialize("shbjmmhfcp",'qtvlqrxyrj'); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://qik-server.herokuapp.com/app/'

    this.addform =this.formBuilder.group({
      Name : new FormControl(''),
      Age : new FormControl('')
    });
  }

    createedit(){
      this.editform =this.formBuilder.group({
        editName : new FormControl(),
        editAge : new FormControl()
      });
    }
 

  
ngOnInit(){
  // Direct creating object using javascript sdk
//   const MyCustomClassName = Parse.Object.extend("MyCustomClassName");
// const myCustomClassName = new MyCustomClassName();

// myCustomClassName.set("myCustomKey1Name", "Suhas Wakhare"),
// myCustomClassName.set("myCustomKey2Name", "Vicky Wakhare"),
// myCustomClassName.set("temperature", 1),
// myCustomClassName.set("humidity", 1);
// myCustomClassName.save()
// .then((myCustomClassName) => {
//   // Success
//   alert('New object created with objectId: ' + myCustomClassName.id);
// }, (error) => {
//   // Save fails
//   alert('Failed to create new object, with error code: ' + error.message);
// });
 
// }
// this.create();
  this.getlist();

}
async getlist() {
    const Pet = Parse.Object.extend("Pet");
    const query = new Parse.Query("Pet");

    this.datalist = [];
    this.datalist = await query.find().then(function(result){
        return result;
    },(error)=>{
      alert("Failed" + error.message);
  });
  }
//to create object
create(addform : NgForm){

 const Forminfo = Parse.Object.extend("Pet");
 const forminfo = new Forminfo();
 forminfo.set("Name",addform["Name"]);
 forminfo.set("Age", addform["Age"]);
 forminfo.save().then((res:any)=>{
      alert('Add Successfully' + res.id);
      this.getlist();
      this.addform.reset();
 },(error : any)=>{
    alert('Error' + error.message);
 });
}


edit(objectId : string){

this.objectId = objectId;
this.createedit();
const Formdata = Parse.Object.extend("Pet");
const formdata = new Formdata();
const query = new Parse.Query(formdata);

query.get(this.objectId).then((e) => {
  // alert(e);
  // console.log(e);

   e.toJSON(); 
  this.editform = this.formBuilder.group({
    objectId : e['objectId'],
    Name :e['Name'],
    Age : e['Age']
  });
});
// this.modalref = this.service.show(this.editmodal, { class: 'gray modal-lg' });
}

updateApp(editform: NgForm) {

  const Formdata1 = Parse.Object.extend("Pet");
  const formdata1 = new Formdata1();
  const query = new Parse.Query(formdata1);

  // Retrieve the object by id
  query.get(this.objectId)
    .then((res) => {

      // The object was retrieved successfully and it is ready to update.
      res.set("editname", editform["editName"]);
      res.set("editage", editform["editAge"]);
      
      res.save();

      alert('Web App updated with objectId: ' + this.objectId);
      // this.modalref.hide();
    }, (error) => {
      // The object was not retrieved successfully.
      alert('Failed to update object, with error code: ' + error.message);
    });
} 

delete(objectId : string){
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
    
  }).then((result) => {
    if (result.value) {
      const Formdel = Parse.Object.extend("Pet");
      const formdel = new Formdel();
      var query = new Parse.Query(formdel);
      query.get(objectId)
      .then((del)=>{
        del.destroy()
              .then((del)=>{
              Swal.fire(
              'Deleted!',
              'Record with objectId:' +objectId + ' deleted successfully!',
              'success'
          ) 
          this.getlist();
        },(error)=>{
          Swal.fire(
            'Error in Delete!',
            error.message,
            'error'
          )
        })
        },(error) => {
         
          Swal.fire(
            'Error in Delete!',
            error.message,
            'error'
          )
        });
        }
        });
}
// retrive(){

//   var pet = Parse.Object.extend("Pet");
//   var query = new Parse.Query(pet);
//   query.first().then(function(pet){
//     if(pet){
//       console.log("Pet Found with Name" + pet.get("Name"), "and Age" + pet.get("Age"));
//     }else{

//       console.log("Error, Try Again");
//     }
//   }).catch(function(error){
//     console.log("Error :" + error.code+ " " + error.message);

//   });


}

// readthenupdate(){

//    var query = new Parse.Query("Pet");
//    query.equalTo
// }
