import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'portada',
    loadComponent: () => import('./pages/portada/portada.page').then( m => m.PortadaPage)
  },
  {
    path: 'personajes',
    loadComponent: () => import('./pages/personajes/personajes.page').then( m => m.PersonajesPage)
  },
  {
    path: 'personaje-detalle',
    loadComponent: () => import('./pages/personaje-detalle/personaje-detalle.page').then( m => m.PersonajeDetallePage)
  },
  {
    path: 'momentos',
    loadComponent: () => import('./pages/momentos/momentos.page').then( m => m.MomentosPage)
  },
  {
    path: 'momento-detalle',
    loadComponent: () => import('./pages/momento-detalle/momento-detalle.page').then( m => m.MomentoDetallePage)
  },
  {
    path: 'acerca',
    loadComponent: () => import('./pages/acerca/acerca.page').then( m => m.AcercaPage)
  },
  {
    path: 'en-mi-vida',
    loadComponent: () => import('./pages/en-mi-vida/en-mi-vida.page').then( m => m.EnMiVidaPage)
  },
  {
    path: 'contratame',
    loadComponent: () => import('./pages/contratame/contratame.page').then( m => m.ContratamePage)
  },
];
