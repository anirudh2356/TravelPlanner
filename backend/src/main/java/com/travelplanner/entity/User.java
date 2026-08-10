package com.travelplanner.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore // 👈 Prevents infinite serialization loop in Swagger
    private List<Itinerary> itineraries;

    private String fullName;

    // Constructors
    public User() {}

    public User(Long id, String email, String fullName) {
        this.id = id;
        this.email = email;
        this.fullName = fullName;
    }

    // Explicit Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
