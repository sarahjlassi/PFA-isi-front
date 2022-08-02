import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";


import { ErrorPageComponent } from "./error/error-page.component";

import { LockScreenPageComponent } from "./lock-screen/lock-screen-page.component";
import { LoginPageComponent } from "./login/login-page.component";


@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        
        ErrorPageComponent,
        
        LockScreenPageComponent,
        LoginPageComponent,
        
    ]
})
export class ContentPagesModule { }
