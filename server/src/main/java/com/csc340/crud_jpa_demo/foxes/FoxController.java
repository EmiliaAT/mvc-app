package com.csc340.crud_jpa_demo.foxes;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * FoxController is a REST controller that handles HTTP requests related to
 * foxes.
 * 
 * It provides endpoints for CRUD operations on fox data.
 */
@RestController
public class FoxController {

    @Autowired
    private FoxService service;

    /**
     * Endpoint to get all foxes.
     *
     * @return List of all foxes.
     */
    @GetMapping("/api/foxes")
    public List<Fox> getAllFoxes() {
        return this.service.getAllFoxes();
    }

    /**
     * Endpoint to get a fox by ID.
     *
     * @param id The ID of the fox to retrieve.
     * @return The fox with the specified ID.
     */
    @GetMapping("/api/foxes/{id}")
    public Optional<Fox> getFoxById(@PathVariable Long id) {
        return this.service.getFoxById(id);
    }

    /**
     * Endpoint to get foxes by name.
     *
     * @param name The name of the foxes to search for.
     * @return List of foxes with a matching name.
     */
    @GetMapping("/api/foxes/name")
    public List<Fox> getFoxesByName(@RequestParam Optional<String> key) {
        return key
                .map((query) -> this.service.getFoxesByName(query))
                .orElseGet(() -> this.service.getAllFoxes());
    }

    /**
     * Endpoint to get foxes by colour.
     *
     * @param colour The colour of the foxes to search for.
     * @return List of foxes with the specified colour.
     */
    @GetMapping("/api/foxes/colour")
    public List<Fox> getFoxesByColour(@RequestParam Optional<String> key) {
        return key
                .map((query) -> this.service.getFoxesByColour(query))
                .orElseGet(() -> this.service.getAllFoxes());
    }

    /**
     * Endpoint to get foxes by species.
     *
     * @param colour The species of the foxes to search for.
     * @return List of foxes with the specified species.
     */
    @GetMapping("/api/foxes/species")
    public List<Fox> getFoxesBySpecies(@RequestParam Optional<String> key) {
        return key
                .map((query) -> this.service.getFoxesBySpecies(query))
                .orElseGet(() -> this.service.getAllFoxes());
    }

    /**
     * Endpoint to get foxes by description.
     *
     * @param colour The description of the foxes to search for.
     * @return List of foxes with the specified description.
     */
    @GetMapping("/api/foxes/description")
    public List<Fox> getFoxesByDescription(@RequestParam Optional<String> key) {
        return key
                .map((query) -> this.service.getFoxesByDescription(query))
                .orElseGet(() -> this.service.getAllFoxes());
    }

    /**
     * Endpoint to add a new fox.
     *
     * @param fox The fox to add.
     * @return The newly created fox.
     */
    @PostMapping("/api/foxes")
    public Fox addFox(@RequestBody Fox fox) {
        return this.service.addFox(fox);
    }

    /**
     * Endpoint to update a fox.
     *
     * @param id  The ID of the fox to update.
     * @param fox The updated fox information.
     * @return The updated fox.
     */
    @PutMapping("/api/foxes/{id}")
    public Fox updateFox(@PathVariable Long id, @RequestBody Fox fox) {
        return this.service.updateFox(id, fox);
    }

    /**
     * Endpoint to delete a fox.
     *
     * @param id The ID of the fox to delete.
     */
    @DeleteMapping("/api/foxes/{id}")
    public void deleteFox(@PathVariable Long id) {
        this.service.deleteFox(id);
    }

}
