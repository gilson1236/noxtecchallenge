package com.noxtec.application.service;

import com.noxtec.application.entity.Pet;
import com.noxtec.application.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;

    public Optional<Pet> getPet(String petName){
        return this.petRepository.findByName(petName);
    }

    public Pet create(Pet pet){
        return petRepository.save(pet);
    }

    public List<Pet> listPets(){
        return this.petRepository.findAll();
    }

    public Optional<Pet> findById(Long id){
        return this.petRepository.findById(id);
    }

    public Optional<Pet> findByName(String name){
        return this.petRepository.findByName(name);
    }

    public void delete(Long id){
        this.petRepository.deleteById(id);
    }
}
