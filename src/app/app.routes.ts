// src/app/app.routes.ts
import { Routes } from '@angular/router';
// Importa todos los componentes que generaste, usando el nombre de clase generado y la extensión '.ts'
import { Home } from './pages/home/home';         // Archivo home.ts, Clase Home
import { Library } from './pages/library/library';  // Archivo library.ts, Clase Library
import { Groups } from './pages/groups/groups';     // Archivo groups.ts, Clase Groups
import { Lists } from './pages/lists/lists';       // Archivo lists.ts, Clase Lists
import { Forum } from './pages/forum/forum';       // Archivo forum.ts, Clase Forum
import { Login } from './auth/login/login';         // Archivo login.ts, Clase Login
import { Register } from './auth/register/register';   // Archivo register.ts, Clase Register

export const routes: Routes = [
  { path: 'inicio', component: Home }, // Usamos Home, no HomeComponent
  { path: 'biblioteca', component: Library },
  { path: 'grupos', component: Groups },
  { path: 'listas', component: Lists },
  { path: 'foro', component: Forum },
  { path: 'acceder', component: Login },
  { path: 'registrar', component: Register },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];