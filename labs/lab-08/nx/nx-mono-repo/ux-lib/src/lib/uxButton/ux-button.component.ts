import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'ux-button',
  templateUrl: './ux-button.component.html',
  styleUrls: ['./ux-button.component.scss'],
})
export class UxxButtonComponent {
  @Input() disabled = false;
  @Input() label = '';
  @Input() icon = '';
  @Output() onClicked = new EventEmitter<string>();

  buttonClicked() {
    this.onClicked.emit("you clicked the button");
  }
}