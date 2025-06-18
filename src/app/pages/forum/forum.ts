import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  standalone: true, // ESENCIAL: Indica que este es un componente standalone
  imports: [CommonModule],
  templateUrl: './forum.html',
  styleUrl: './forum.css'
})
export class Forum {

}
