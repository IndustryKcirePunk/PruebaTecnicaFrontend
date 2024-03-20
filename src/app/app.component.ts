import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MathService } from './math.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'PruebaTecnicaFrontend';
  form: FormGroup
  result: string | null = null

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: MathService
  ) {
    this.form = this.fb.group({
      x:  [''],
      y: [''],
      z: ['']
    })
  }

  calculate() {
    this.service.mathCalculate(
      this.form.get('x')?.value,
      this.form.get('y')?.value,
      this.form.get('z')?.value,
    ).subscribe((resp) => {
      this.result = resp.toString()
    })
  }

}
