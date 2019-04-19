import { NgModule } from "@angular/core";
import { MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,

 } from '@angular/material';

@NgModule({
 imports:[MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatInputModule,],
 exports:[MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,]
})
export class MaterialModule{}