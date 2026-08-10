package com.travelplanner.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "itinerary_activities")
public class ItineraryActivity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String activityName;

    private String location;
    private LocalDateTime activityTime;
    private String category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "itinerary_id", nullable = false)
    private Itinerary itinerary;

    // Constructors
    public ItineraryActivity() {}

    public ItineraryActivity(Long id, String activityName, String location, LocalDateTime activityTime, String category, Itinerary itinerary) {
        this.id = id;
        this.activityName = activityName;
        this.location = location;
        this.activityTime = activityTime;
        this.category = category;
        this.itinerary = itinerary;
    }

    // Explicit Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getActivityName() { return activityName; }
    public void setActivityName(String activityName) { this.activityName = activityName; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public LocalDateTime getActivityTime() { return activityTime; }
    public void setActivityTime(LocalDateTime activityTime) { this.activityTime = activityTime; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Itinerary getItinerary() { return itinerary; }
    public void setItinerary(Itinerary itinerary) { this.itinerary = itinerary; }
}