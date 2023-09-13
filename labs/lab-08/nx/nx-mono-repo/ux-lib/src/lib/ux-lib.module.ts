import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxSplitComponent } from './ux-split/ux-split.component';
import { UxButtonComponent } from './ux-button/ux-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UxxButtonComponent } from './uxButton/ux-button.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [UxSplitComponent, UxButtonComponent, UxxButtonComponent],
  exports: [UxSplitComponent, UxButtonComponent, UxButtonComponent],
})
export class UxLibModule {}
