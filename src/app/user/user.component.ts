import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/service/token-storage.service';
import{ReservationService} from '../service/reservation.service';
import { Reservation } from 'app/models/reservation.model';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  resers:any;
  Ndispo:any[]=[];
 
  date :Date=new Date();
  settings={
    bigBanner:true,
    timePicker:true,
    format:'dd-MM-yyyy hh:mm a',
    defaultOpen:'false',
    closeOnSelect:false
  };
  dateR:any;
  username:any;
  email:any;
  taille:any;
  roles: string[] = [];

  constructor(private authService: AuthService, private ReservationService:ReservationService,private _router: Router, private tokenStorage: TokenStorageService) { }
  currentPage: string ="TimeLine"
  ngOnInit() {
    this.ReservationService.getListReservations().subscribe(
        
      data=>{
        
        
        this.resers=data
        this.taille=this.resers.length;

      }),

    this.username=this.tokenStorage.getUser().username;
    this.email=this.tokenStorage.getUser().email;
    console.log( this.username);
  }
  showPage(page: string) {
    this.currentPage = page;
}


submit(){
  console.log(this.dateR)
  console.log(this.resers)
  console.log( this.taille)
  for(let i=0;i<=this.taille;i++){
   
    if(this.resers[i].date==this.dateR){

      this.Ndispo.push(this.resers[i].salle.id)
    }
  }
  console.log("salle non dispo", this.Ndispo);
}
}
