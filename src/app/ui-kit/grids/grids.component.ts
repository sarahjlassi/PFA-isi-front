

import { Component,ViewEncapsulation } from '@angular/core';
declare var require: any;
import { Salle } from '../../models/salle.model';
import { SalleService } from '../../service/salle.service';
import{ReservationService} from '../../service/reservation.service';
import { Reservation } from 'app/models/reservation.model';




import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'app/shared/data/smart-data-table';
import { User } from 'app/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-grids',
    templateUrl: './grids.component.html',
    styleUrls: ['./grids.component.scss'],
    encapsulation: ViewEncapsulation.None

})

export class GridsComponent {

    currentdomaine = null;
    pays:Salle[];
    pay:Salle;
    closeResult:string;
    currentsalleId:any;
    message = '';
    currentPlayer=null;

    registerForm: FormGroup;
    submitted = false;
   
    constructor(private route:ActivatedRoute,
      private router:Router,
      private userService:SalleService,
      private formBuilder: FormBuilder,
      private modalService: NgbModal
    )  { this.pay=new Salle();}
  
  
    ngOnInit() {
      this.userService.getListSalles().subscribe(data=>this.pays=data)
      this.currentPlayer = {};
     
      this.registerForm = this.formBuilder.group({
        libelle: ['', [Validators.required, Validators.minLength(2)]],
        capacite: ['',[Validators.required, Validators.minLength(1)]]   });
    }

    get f() { return this.registerForm.controls; }
















    refrech(){
      window.location.reload()
    }
    onSubmit(){
      this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
      this.userService.addsalle(this.pay).subscribe
      (result => this.gotoUserList());
    }
    gotoUserList() {
      this.router.navigate(['/dashboard/dashboard1']);
      window.location.reload()
      
    }
    delete(id) {
      this.userService.deleteSalle(id)
        .subscribe(response => {
          console.log(response);
        })
        
    }



   /* getsalle(id) {
      this.userService.getSalle(id)
        .subscribe(
          data => {
            this.currentPlayer = data;
            console.log("jjjj",data);
          },
          error => {
            console.log(error);
          });
    }
   /* updatesSalle() {
      this.userService.updateSalle(this.currentsalle.id, this.currentsalle)
        .subscribe(
          response => {
            console.log("hhhhhhhhh",this.currentsalle);
            this.message = 'The tutorial was updated successfully!';
          },
          error => {
            console.log(error);
          });
    }
  */
    edit(salle: Salle){
      this.pay = salle;
    }

    /*HandleUpdatePlayer(val:any){
      console.log("valuehhhhhhhh",this.currentsalleId)

      this.userService.updateSalle(this.pay,val);
    // window.location.reload();
    console.log("valuejjjjj = ",val)
  }*/

  updateStudent(id){
    this.userService.updateSalle(this.pay,id).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );

    console.log(this.pay);
  }




  setId(player:any){
    this.currentPlayer = player;
    this.currentsalleId = player.id;
    console.log("hah =>",this.currentPlayer)
  }




   
  
    open2(contentt) {
      this.modalService.open(contentt);
    }
    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }


}