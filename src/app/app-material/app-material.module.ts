import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class AppMaterialModule {
}
