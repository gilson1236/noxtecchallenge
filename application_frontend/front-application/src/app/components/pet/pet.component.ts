import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Pet } from '../../models/pet';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.scss'
})
export class PetComponent implements OnInit{

  constructor(
              private petService: PetService,
              private router: Router) {
    
  }
  
  ngOnInit(): void {
    
  }
  petForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    spitz: new FormControl('')
  })

  pet = {
    "id": this.petForm.value.id,
    "name": this.petForm.value.name,
    "spitz": this.petForm.value.spitz
  }

  petClass: Pet = new Pet();

  save (){
    this.pet.id = this.petForm.value.id
    this.pet.name = this.petForm.value.name
    this.pet.spitz = this.petForm.value.spitz
    this.petService.save(this.pet).subscribe((v) => console.info(v))

    alert("Pet adopted!")
    this.toGoList()
  }

  toGoList() {
    this.router.navigate(['/home'])

  }

  onCancel() {
    this.toGoList()
  }

}
