import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-groups',
  standalone: true, // ESENCIAL: Indica que este es un componente standalone
  imports: [CommonModule],
  templateUrl: './groups.html',
  styleUrl: './groups.css'
})
export class Groups {

}
