package com.travelplanner.dto;

import java.time.LocalDate;

public class ItineraryRequestDTO {

    private String title;
    private String destination;
    private LocalDate startDate;
    private LocalDate endDate;
    private String notes;

    public ItineraryRequestDTO() {}

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
}
