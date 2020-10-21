import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  exports: [
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
