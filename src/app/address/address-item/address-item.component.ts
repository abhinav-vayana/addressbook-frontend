import { Component, Input, OnInit } from '@angular/core';

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
}
