import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  userData ={
    name: '',
    lastname: '',
    emal: '',
  };

  onSubmit(){
    console.log(this.userData);
  }

}
