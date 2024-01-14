import { Routes } from '@angular/router';
import { ListPetComponent } from './components/list-pet/list-pet.component';
import { PetComponent } from './components/pet/pet.component';
import { DetailedComponent } from './components/detailed/detailed.component';
import { UpdateAdoptionComponent } from './components/update-adoption/update-adoption.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/home'
    },
    {
        path: 'home', component: ListPetComponent
    },
    {
        path: 'pets', component: PetComponent
        //loadChildren: () => import('./components/pet/pets.routes').then(p => p.PET_ROUTES)
    },
    {
        path: 'details/:id', component: DetailedComponent
    },
    {
        path: 'update/:id', component: UpdateAdoptionComponent
    }

];
