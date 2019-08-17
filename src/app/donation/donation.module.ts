import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationRoutingModule } from './donation-routing.module';
import { DonationComponent } from './donation.component';
import { DonationService } from '../_services';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [DonationComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
        DonationRoutingModule  ],
  providers: [
    DonationService
  ]
})
export class DonationModule { }
