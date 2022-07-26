import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIKitRoutingModule } from "./ui-kit-routing.module";
import { MatchHeightModule } from "../shared/directives/match-height.directive"

import { GridsComponent } from "./grids/grids.component";
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendrierComponent } from './calendrier/calendrier.component';
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);


@NgModule({
    imports: [
        CommonModule,
        UIKitRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatchHeightModule,
        FullCalendarModule,
    HttpClientModule,
    ],
    declarations: [
        GridsComponent,
        CalendrierComponent,
      
    ]
})
export class UIKitModule { }
