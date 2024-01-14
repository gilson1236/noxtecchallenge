import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Pet } from '../../models/pet';
import { Observable, Subscription } from 'rxjs';
import { PetService } from '../pet.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-pet',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [RouterLink, AsyncPipe, CommonModule],
  templateUrl: './list-pet.component.html',
  styleUrl: './list-pet.component.scss'
})
export class ListPetComponent {

  pets$: Observable<Pet[]>;
  //opcoesSubscription: Subscription;

  id: number
  pet: Pet


  constructor(private petService: PetService, 
    private router: Router,
    private route: ActivatedRoute) {
      this.pets$ = this.petService.listPets() 
      this.pet = new Pet()
      this.id = 0 
     }
  
  ngOnDestroy(): void {
    //this.opcoesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pet = new Pet();
    this.reloadData();
  }

  reloadData(){
    /*const subscription = this.colaboradorService.getColaboradorList().subscribe(
      colaboradores => { 
        this.colaboradores = colaboradores;
      }
    );
    
    this.opcoesSubscription.add(subscription);
  }*/

    this.pets$ = this.petService.listPets();
  } 

  /*detalharColaborador(id: number){
    this.router.navigate(['detalhes', id]);
  }
  
  deleteColaborador(id: number){
    this.colaboradorService.deletarColaborador(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }
*/

createAdoption() {
  this.router.navigate(['pets'])
}

detailedAdoption(id: number){
  this.router.navigate(['details', id])
}

updateAdoption(id: number){
  this.router.navigate(['update', id])
}

deleteAdoption(id: number) {
  this.petService.delete(id)
    .subscribe(
      (data: any) => {
        console.info(data)
        this.reloadData()
      }
    );  
}

}
