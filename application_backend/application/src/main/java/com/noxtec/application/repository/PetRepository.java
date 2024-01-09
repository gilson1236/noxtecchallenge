package com.noxtec.application.repository;

import com.noxtec.application.entity.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PetRepository extends JpaRepository<Pet,Long> {

    Optional<Pet> findByName(String petName);
}
