import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagInputModule } from 'ngx-chips';
import { SocieteComponent } from './societe.component';
import { SocieteRoutingModule } from './societe-routing.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';


@NgModule({
  declarations: [SocieteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NgbModule,
    TagInputModule,
SocieteRoutingModule,
SharedComponentsModule

  ]
})
export class SocieteModule { }
