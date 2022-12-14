import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  

  constructor(private _myfb:FormBuilder) { }
  registrationform = this._myfb.group({
    username:['']

  })

  ngOnInit(): void {
  }

}
