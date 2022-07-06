import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="p-error">
      {{ text }}
    </div>
  `,
  styles: [
  ]
})
export class MessageComponent {
  
  

  @Input()error : string = "";
  @Input()control : any = new FormControl;
  @Input() text : string = "";

  temErro(): boolean { 
    return this.control.hasError(this.error) && this.control.dirty;
  }


}
