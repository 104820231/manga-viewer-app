import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true, // ESENCIAL: Indica que este es un componente standalone
  imports: [CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

}
