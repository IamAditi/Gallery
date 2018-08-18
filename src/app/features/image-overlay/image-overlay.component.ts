import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.component.css']
})
export class ImageOverlayComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ImageOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  preview;
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.preview = this.data ? this.data.imagePath : ''
  }

}

