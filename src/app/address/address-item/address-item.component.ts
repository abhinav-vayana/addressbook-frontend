import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  standalone: false,
  styleUrls: ['./address-item.component.scss'],
})
export class AddressItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() id!: string;
  @Input() name!: string;
  @Input() phone!: string;
  @Output() delete = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.id);
  }
}
