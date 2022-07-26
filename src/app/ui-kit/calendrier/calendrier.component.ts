import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import{ReservationService} from '../../service/reservation.service';
import { Reservation } from 'app/models/reservation.model';
@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {
@Input() reservation:any ;
resers:any;
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: false,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
  constructor(private reservationService:ReservationService) {}
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
  ngOnInit() {
   
   this.reservationService.getListReservations().subscribe(
        
    data=>{
      
      
      this.resers=data
      for(let i=0; i < this.resers.length; i++){
        this.Events.push({ title: this.resers[i].salle.libelle, start: this.resers[i].timein, end: this.resers[i].timeout , display: 'color'})

      }

      this.calendarOptions = {
        initialView: 'dayGridMonth',
      
        events: this.Events,
      };
   })
     
  }
  
}
