import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchedResultInfoComponent } from './searched-result-info/searched-result-info.component';



@NgModule({
  declarations: [SearchedResultInfoComponent],
  imports: [
    CommonModule
  ],
  exports:[SearchedResultInfoComponent]
})
export class HomeModule { }
