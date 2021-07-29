import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matautocomplete',
  templateUrl: './matautocomplete.component.html',
  styleUrls: ['./matautocomplete.component.scss']
})
export class MatautocompleteComponent implements OnInit {
  options: string[] = ['Angular','React'];

  constructor() { }

  ngOnInit(): void {
  }

}
