import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'; // At the top of your module

@NgModule({
  imports: [

    NgxPaginationModule // Add this line of code here
  ],
  exports: [
    NgxPaginationModule
  ]
})

export class ProfileModule { }
