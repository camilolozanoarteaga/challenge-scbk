import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputTextComponent } from './components/custom-input-text/custom-input-text.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [CustomInputTextComponent, HeaderComponent],
  imports: [CommonModule, FormsModule],
  exports: [CustomInputTextComponent, HeaderComponent],
})
export class SharedModule {}
