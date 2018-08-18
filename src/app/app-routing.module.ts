import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './features/gallery/gallery.component';

const routes: Routes = [
  {
    path: 'home',
    component: GalleryComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
