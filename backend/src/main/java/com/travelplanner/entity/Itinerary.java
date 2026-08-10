package com.travelplanner.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "itineraries")
public class Itinerary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String destination;
    private LocalDate startDate;
    private LocalDate endDate;

    @Column(length = 1000)
    private String notes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "itinerary", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItineraryActivity> activities = new ArrayList<>();

    // Constructors
    public Itinerary() {}

    public Itinerary(Long id, String title, String destination, LocalDate startDate, LocalDate endDate, String notes, User user, List<ItineraryActivity> activities) {
        this.id = id;
        this.title = title;
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.notes = notes;
        this.user = user;
        this.activities = activities;
    }

    // Explicit Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }

    public LocalDate getStartDate() { return startDate; }
    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }

    public LocalDate getEndDate() { return endDate; }
    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public List<ItineraryActivity> getActivities() { return activities; }
    public void setActivities(List<ItineraryActivity> activities) { this.activities = activities; }
}