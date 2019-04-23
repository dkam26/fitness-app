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
    MatSelectModule,]
})
export class MaterialModule{}