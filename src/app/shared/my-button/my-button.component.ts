import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {
 @Output() emitter = new EventEmitter<string>();

 submit() {
  this.emitter.emit("Esempio di payload");
 }
}
