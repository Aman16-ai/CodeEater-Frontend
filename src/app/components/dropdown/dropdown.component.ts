import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from '../../interfaces';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() name : string = "select an option"
  @Input() options : string[];
  @Output() optionSelected : EventEmitter<string> = new EventEmitter<string>()
  isOpen = false;
  selectedOption: string | null = null;

  constructor() {
    this.options = ['Javascript']
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.name = option
    this.optionSelected.emit(option)
  }
}
