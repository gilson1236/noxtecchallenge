import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Pet } from '../../models/pet';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.scss'
})
export class PetComponent implements OnInit{
  //petForm: FormGroup;

  constructor(
              private formBuilder: FormBuilder,
              private petService: PetService,
              private router: Router) {
    /*this.petForm = ({
      id: new FormControl(''),
      name: new FormControl(''),
      spitz: new FormControl('')
    });*/
  }
  
  ngOnInit(): void {
    //this.createForm(new Pet());
  }
  petForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    spitz: new FormControl('')
  })

  //createForm(pet: Pet){
    /*this.petForm = this.formBuilder.group({
      name: [pet.name],
      spitz: [pet.spitz]
    });*/

    pet = {
      "id": this.petForm.value.id,
      "name": this.petForm.value.name,
      "spitz": this.petForm.value.spitz
    }

    petClass: Pet = new Pet();
    
  //}

  //pet: Pet = new Pet()

  save (){
    this.pet.id = this.petForm.value.id
    this.pet.name = this.petForm.value.name
    this.pet.spitz = this.petForm.value.spitz
    console.log(this.pet)
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
