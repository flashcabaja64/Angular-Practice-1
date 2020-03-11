import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
    p {
      color: yellow;
      padding: 20px;
      background-color: green;
      border: 1px solid yellow;
    }
  `],
})

export class SuccessAlertComponent { }