import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { BodyLayoutComponent } from './features/body-layout/body-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ImageOverlayComponent } from './features/image-overlay/image-overlay.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    BodyLayoutComponent,
    ImageOverlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImageOverlayComponent]
})
export class AppModule { }
