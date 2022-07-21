import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridsComponent } from "./grids/grids.component";


const routes: Routes = [
  {
    path: '',
    children: [     
      {
        path: 'grids',
        component: GridsComponent,
        data: {
          title: 'Grids'
        }
      },      
       
     
       

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIKitRoutingModule { }
