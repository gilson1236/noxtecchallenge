import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { PetService } from '../pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detailed',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './detailed.component.html',
  styleUrl: './detailed.component.scss'
})
export class DetailedComponent implements OnInit{

  id: number;
  pet: Pet;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private petService: PetService) {
                this.id = this.route.snapshot.params['id'];
                this.pet = new Pet();
                
               }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.pet = new Pet();

    this.petService.getDetailedAdoption(this.id)
      .subscribe(data => this.pet = data)  
    
  }

  back() {
    this.router.navigate(['/home']);
  }

}


