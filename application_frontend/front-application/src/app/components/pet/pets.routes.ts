import { Routes } from "@angular/router";
import { PetComponent } from "./pet.component";


export const PET_ROUTES: Routes = [
    {
        path: '', component: PetComponent
    },
    {
        path: 'new', component: PetComponent
    }
]