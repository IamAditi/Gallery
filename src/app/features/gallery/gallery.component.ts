import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ImageOverlayComponent } from '../image-overlay/image-overlay.component';

export interface Tile {
  cols: number;
  rows: number;
  image: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger('movement', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
          transform: 'scale(1.2)',
      })),
      // transition('small => large', animate('100ms ease-in')),
      transition('small <=> large', animate('1000ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)', offset: 0.33}),
        style({opacity: 1, transform: 'translateY(-50)', offset: 0.66}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1.0})
      ])))
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class GalleryComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  max = 100;
  min = 0;
  step = 1;
  imgSize = 100;

  tiles: Tile[] = [
    {image: 'assets/image1.jpg', cols: 1, rows: 2},
    {image: '', cols: 1, rows: 1},
    {image: 'assets/image2.jpg', cols: 1, rows: 2},
    {image: '', cols: 1, rows: 1},
    {image: 'assets/image3.jpg', cols: 1, rows: 2},
    {image: 'assets/image4.jpg', cols: 1, rows: 2},
    {image: 'assets/image5.jpg', cols: 1, rows: 2},
    {image: 'assets/image6.jpg', cols: 1, rows: 2},
    {image: 'assets/image7.jpg', cols: 1, rows: 2},
    {image: 'assets/image1.jpg', cols: 1, rows: 2},
    {image: 'assets/image2.jpg', cols: 1, rows: 2},
    {image: 'assets/image3.jpg', cols: 1, rows: 2},
    {image: 'assets/image4.jpg', cols: 1, rows: 2},
    {image: 'assets/image5.jpg', cols: 1, rows: 2},
  ];

  fileNameDialogRef: MatDialogRef<ImageOverlayComponent>;
  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  openImageDialog(image) {
    this.fileNameDialogRef = this.dialog.open(ImageOverlayComponent, {
      data: {
        imagePath: image
      },
      panelClass: 'overlay-custom-class'
    });
  }

  ngOnInit() {}
}
