import { Route } from '@angular/router'
import { GoogleComponent } from './google/google.component'
import { LeafletComponent } from './leaflet/leaflet.component'
import { VectorComponent } from './vector/vector.component'

export const MAPS_ROUTES: Route[] = [
  {
    path: 'google',
    component: GoogleComponent,
    data: { title: 'Google' },
  },
  {
    path: 'leaflet',
    component: LeafletComponent,
    data: { title: 'Leaflet' },
  },
  {
    path: 'vector',
    component: VectorComponent,
    data: { title: 'Vector' },
  },
]