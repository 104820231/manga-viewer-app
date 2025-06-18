// src/app/shared/header/header.ts
// src/app/shared/header/header.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas comunes
import { RouterModule } from '@angular/router'; // Necesario para routerLink

@Component({
  selector: 'app-header', // Selector HTML que usarás en app.html
  standalone: true,      // ESENCIAL: Indica que este es un componente standalone
  imports: [CommonModule, RouterModule], // Importa los módulos que necesita este componente
  templateUrl: './header.html', // APUNTA A header.html (sin .component)
  styleUrl: './header.css'      // APUNTA A header.css (sin .component)
})
export class Header { // <-- ¡MANTENEMOS la clase como 'Header'!
  // Aquí puedes añadir lógica si el menú la necesita
}