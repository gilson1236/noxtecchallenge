import { Component } from '@angular/core';
import { Pet } from '../../models/pet';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-adoption',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-adoption.component.html',
  styleUrl: './update-adoption.component.scss'
})
export class UpdateAdoptionComponent {

  id: number;
  pet: Pet;
  submitted = false;

  petForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    spitz: new FormControl('')
  })

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private petService: PetService 
              ) {
                this.pet = new Pet();
    
                this.id = this.route.snapshot.params['id'];
               }

  ngOnInit(){
    this.pet = new Pet();
    
    this.id = this.route.snapshot.params['id'];

    this.petService.getDetailedAdoption(this.id)
    .subscribe(data => 
      this.pet = data
    );
  }

  petObject = {
    "id": this.petForm.value.id,
    "name": this.petForm.value.name,
    "spitz": this.petForm.value.spitz
  }

  update(){
    this.petObject.id = this.petForm.value.id
    this.petObject.name = this.petForm.value.name
    this.petObject.spitz = this.petForm.value.spitz
    this.petService.update(this.id, this.petObject).subscribe(
      data => console.info(data)
    )
    alert("Adoption Updated!")
    this.goToList();
  }

  onCancel() {
    this.goToList()
  }

  goToList(){
    this.router.navigate(['/home']);
  }
}
