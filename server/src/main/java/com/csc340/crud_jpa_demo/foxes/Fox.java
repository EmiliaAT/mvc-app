package com.csc340.crud_jpa_demo.foxes;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "foxes")
public class Fox {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Setter
    @Nonnull
    private String name;

    @Getter
    @Setter
    @Nonnull
    private String colour;

    @Getter
    @Setter
    @Nonnull
    private String species;

    @Getter
    @Setter
    @Nonnull
    private String description;

    public Fox() {

    }

    public Fox(Long id, String name, String description, String colour, String species) {
        this.id = id;
        this.name = name;
        this.colour = colour;
        this.species = species;
        this.description = description;
    }

}
