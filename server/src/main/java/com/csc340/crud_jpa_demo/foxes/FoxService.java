package com.csc340.crud_jpa_demo.foxes;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * FoxService is a service class that handles the business logic for
 * managing foxes.
 * It provides methods to perform CRUD operations on foxes data.
 */
@Service
public class FoxService {

    @Autowired
    private FoxRepository repository;

    /**
     * Method to get all foxes.
     *
     * @return List of all foxes.
     */
    public List<Fox> getAllFoxes() {
        return this.repository.findAll();
    }

    /**
     * Method to get a fox by its ID.
     *
     * @param id The ID of the fox to retrieve.
     * @return The fox with the specified ID.
     */
    public Optional<Fox> getFoxById(Long id) {
        return this.repository.findById(id);
    }

    /**
     * Method to get foxes by name.
     *
     * @param name The name of the foxes to search for.
     * @return List of foxes with a matching name.
     */
    public List<Fox> getFoxesByName(String name) {
        return this.repository.getFoxesByName(name);
    }

    /**
     * Method to get foxes by colour.
     *
     * @param colour The colour of the foxes to search for.
     * @return List of foxes with the specified colour.
     */
    public List<Fox> getFoxesByColour(String colour) {
        return this.repository.getFoxesByColour(colour);
    }

    /**
     * Method to get foxes by colour.
     *
     * @param species The species of the foxes to search for.
     * @return List of foxes with the specified species.
     */
    public List<Fox> getFoxesBySpecies(String species) {
        return this.repository.getFoxesBySpecies(species);
    }

    /**
     * Method to get foxes by description.
     *
     * @param description The description of the foxes to search for.
     * @return List of foxes with the specified description.
     */
    public List<Fox> getFoxesByDescription(String description) {
        return this.repository.getFoxesByDescription(description);
    }

    /**
     * Method to add a new fox.
     *
     * @param fox The fox to add.
     */
    public Fox addFox(Fox fox) {
        return this.repository.save(fox);
    }

    /**
     * Method to update a fox.
     *
     * @param id  The ID of the fox to update.
     * @param fox The updated fox information.
     */
    public Fox updateFox(Long id, Fox fox) {
        Fox record = new Fox(id, fox.getName(), fox.getColour(), fox.getSpecies(), fox.getDescription());
        return this.repository.save(record);
    }

    /**
     * Method to delete a fox.
     *
     * @param id The ID of the fox to delete.
     */
    public void deleteFox(Long id) {
        this.repository.deleteById(id);
    }

}
