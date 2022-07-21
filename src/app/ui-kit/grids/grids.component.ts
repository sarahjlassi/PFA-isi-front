
import { HighlightService } from 'app/shared/services/highlight.service';
import * as tableData from '../../shared/data/smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
import { Component,ViewEncapsulation } from '@angular/core';
;
declare var require: any;
import { Salle } from '../../models/salle.model';
import { SalleService } from '../../service/salle.service';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
const data: any = require('../../shared/data/chartist.json');

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

    constructor(private route:ActivatedRoute,
      private router:Router,
      private userService:SalleService,
      private modalService: NgbModal
    )  { this.pay=new Salle();}
  
  
    ngOnInit() {
      this.userService.getListSalles().subscribe(data=>
        this.pays=data)
    }
    onSubmit(){
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