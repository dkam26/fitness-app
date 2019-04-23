import { NgModule } from "@angular/core";
import { MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialog,
    MatDialogModule,

 } from '@angular/material';
 import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
 imports:[MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
   MatTabsModule,
   MatCardModule,
   MatSelectModule,
   MatProgressSpinnerModule,
   MatDialogModule,
],
 exports:[MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,]
})
export class MaterialModule{}