import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contact } from '../../assets/json/config.json';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data = contact;
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  isSaved: boolean = false;
  isSaving: boolean = false;
  submitErrorMessage: string = '';

  constructor(formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['']
    });
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    let emailField = this.contactForm.get('email');
    return emailField.hasError('required') ? 'You must enter a value' :
      emailField.hasError('email') ? 'Not a valid email' :
        '';;
  }

  private handleError() {

    return throwError(this.submitErrorMessage);
  }

  onSubmit() {
    this.isSaving = true;
    this.http.post<any>(this.data.action + this.data.formId, this.contactForm.value)
      .subscribe(
        data => {
          this.isSaved = true
        },
        error => {
          this.submitErrorMessage = "Something bad happened; please try again later.";
          this.isSaving = false;
        }
      );
  }
}