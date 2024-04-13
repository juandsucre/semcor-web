import { Component, inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import  Runner  from "../../interfaces/runner.interface";
import { RunnerService } from '../../services/runner.service';

@Component({
  selector: 'app-carrera-form',
  standalone: true,
  imports: [MatIconModule,MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatExpansionModule],
  templateUrl: './carrera-form.component.html',
  styleUrl: './carrera-form.component.sass'
})
export class CarreraFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder, private runnerService: RunnerService) {}
  ngOnInit(): void {

    this.getRunners();

    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        document: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        // password: [
        //   '',
        //   [
        //     Validators.required,
        //     Validators.minLength(6),
        //     Validators.maxLength(40)
        //   ]
        // ],
        // confirmPassword: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue]
      },
      // {
      //   // validators: [Validation.match('password', 'confirmPassword')]
      // }
    );  }



  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit(){
    this.submitted = true;
    const response = await this.runnerService.addNewRunner(this.form.value);
    console.log(response);
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  getRunners(){
    this.runnerService.getRunners().subscribe(runners =>{
      console.log(runners);
    }
    );
  }
}
