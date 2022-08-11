import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/service/token-storage.service';
import{ReservationService} from '../service/reservation.service';
import { Reservation } from 'app/models/reservation.model';
import { SalleService } from 'app/service/salle.service';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  resers:any;
  salles:any;
 Ndispo:any[]  = [];

  res:any;
  salle:any;
  heureD:Date=new Date();
  heureF:Date=new Date();
  test1:boolean=false;
  test2:boolean=false;
  date :Date
Date=new Date().toISOString();
  dateR:any;
  username:any;
  email:any;
  taille:any;
  capacite:any;
  test:boolean=false;
  show:boolean=false;
  i : any
  roles: string[] = [];
reservationchecked:any;
  constructor(private authService: AuthService,  
              private salleservice:SalleService,
              private ReservationService:ReservationService,
              private _router: Router, 
              private tokenStorage: TokenStorageService,
              public datepipe: DatePipe) { this.res=new Reservation();}
  currentPage: string ="TimeLine";
 
  ngOnInit() {
    this.ReservationService.getListReservations().subscribe(
        
      data=>{
        
        
        this.resers=data
        this.taille=this.resers.length;

      });
      this.salleservice.getListSalles().subscribe(

        data=>{
          this.salles=data
          for(this.i=0;this.i<= this.salles.length;this.i++){
            for(let j=0;j<=this.taille;j++){
             if(this.salles[this.i].libelle != this.resers[j].salle.libelle){
               console.log(this.salles[this.i].libelle)
             }
            }
           
           }
        }
      )
      console.log(this.salles)
     

    this.username=this.tokenStorage.getUser().username;
    this.email=this.tokenStorage.getUser().email;
    console.log( this.username);
  }
  showPage(page: string) {
    this.currentPage = page;
}

check(reservation){
this.reservationchecked=reservation;
this.res.salle=this.salle;
this.res.propritaire=this.tokenStorage.getUser().username;
console.log(this.res)
}

change()
{
 
  

  this.res.timein=this.datepipe.transform(this.heureD, 'yyyy-MM-dd HH:mm:ss.SSS');
  this.res.timeout= this.datepipe.transform(this.heureF, 'yyyy-MM-dd HH:mm:ss.SSS');
 
for(this.i=0;this.i<= this.resers.length;this.i++){
  if(this.res.timein!= this.resers[this.i].timein && this.res.timeout!= this.resers[this.i].timeout){
   this.test=true;
   this.salle= this.resers[this.i].salle;
  console.log(this.salle)
   
  }
  

}

}
add(){
  console.log(this.res);
this.ReservationService.addReservation(this.res).subscribe(result => this.gotoUserList());
this.dateR=""; 
}
gotoUserList() {
  this._router.navigate(['/dashboard/dashboard1']);
  window.location.reload()
  

}
verif(){
  console.log("hello",this.show,this.reservationchecked!.salle!.capacite,this.capacite)
  if (this.reservationchecked!.salle!.capacite <this.capacite){
    console.log("avant",this.show)
    this.show=true
    console.log("apres",this.show)
    
   
  }
  else 
  this.test1=true;
  this.res.nbPersonnes=this.capacite;
  

}
submit(){
  console.log(this.dateR)
  console.log(this.resers)
  console.log( this.taille)
  this.res.date=this.dateR;
}
}
