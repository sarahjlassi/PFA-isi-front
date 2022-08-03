
import { Component,ViewEncapsulation } from '@angular/core';
;
declare var require: any;
import { User } from '../../models/user.model';
import { UserService } from '../../service/user.service';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
const data: any = require('../../shared/data/chartist.json');


@Component({
    selector: 'app-smart-data-table',
    templateUrl: './smart-data-table.component.html',
    styleUrls: ['./smart-data-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SmartTableComponent {
    
    currentdomaine = null;
    pays:User[];
    pay:User;
    closeResult:string;

    constructor(private route:ActivatedRoute,
        private router:Router,
        private userService:UserService,
        private modalService: NgbModal
      )  { this.pay=new User();}
    ngOnInit() {
      
        this.userService.getListUsers().subscribe(data=>
          this.pays=data);
          console.log("hhhhhhhh",data);
      }
      onSubmit(){
        this.userService.adduser(this.pay).subscribe
        (result => this.gotoUserList());
      }
      gotoUserList() {
        this.router.navigate(['/dashboard/dashboard1']);
        window.location.reload()
        
      }
      delete(id) {
        this.userService.deleteUser(id)
          .subscribe(response => {
            console.log(response);
          })
          
      }
      refrech(){
        window.location.reload()
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