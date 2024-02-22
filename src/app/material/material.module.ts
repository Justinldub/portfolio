import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from'@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

export const MaterialComponents =[
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonToggleModule

]

@NgModule({
  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
  
})
export class MaterialModule { }
