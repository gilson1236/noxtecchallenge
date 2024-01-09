package com.noxtec.application.controller;

import com.noxtec.application.entity.Pet;
import com.noxtec.application.service.PetService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/pets")
public class PetController {

    @Autowired
    PetService petService = new PetService();

    @PostMapping()
    @Transactional
    @CacheEvict(value = "listPets", allEntries = true)
    public ResponseEntity<Object> create(@RequestBody Pet pet){
        Optional<Pet> optionalPet = petService.getPet(pet.getName());

        if(optionalPet.isEmpty()){
            return ResponseEntity.status(HttpStatus.CREATED).body(this.petService.create(pet));
        }

        return ResponseEntity.status(HttpStatus.CONFLICT).body("Pet already created!");
    }

    @GetMapping
    public List<Pet> listPets(){
        return this.petService.listPets();
    }

    @GetMapping("/{id}")
    public Optional<Pet> findById(@PathVariable Long id){
        return this.petService.findById(id);
    }

    @GetMapping("/name")
    public Optional<Pet> findByName(String name){
        return this.petService.findByName(name);
    }

    @PutMapping("/{id}")
    @CacheEvict(value = "listPets", allEntries = true)
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody Pet pet){
        Optional<Pet> optionalPet = this.petService.findById(id);
        if(optionalPet.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet not found!!!");
        }

        pet.setId(id);

        return ResponseEntity.status(HttpStatus.OK).body(this.petService.create(pet));
    }

    @DeleteMapping("/{id}")
    @CacheEvict(value = "listPets", allEntries = true)
    public void delete(@PathVariable Long id){
        this.petService.delete(id);
    }
}
