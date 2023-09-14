import { Component, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./../../app.component.scss']


})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';

}
