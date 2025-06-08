package com.csc340.crud_jpa_demo.foxes;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FoxRepository extends JpaRepository<Fox, Long> {

    @Query(value = "SELECT * FROM foxes f WHERE f.name LIKE %?1%", nativeQuery = true)
    List<Fox> getFoxesByName(String name);

    @Query(value = "SELECT * FROM foxes f WHERE f.colour=?1", nativeQuery = true)
    List<Fox> getFoxesByColour(String colour);

    @Query(value = "SELECT * FROM foxes f WHERE f.species=?1", nativeQuery = true)
    List<Fox> getFoxesBySpecies(String species);

    @Query(value = "SELECT * FROM foxes f WHERE f.description=?1", nativeQuery = true)
    List<Fox> getFoxesByDescription(String description);

}
