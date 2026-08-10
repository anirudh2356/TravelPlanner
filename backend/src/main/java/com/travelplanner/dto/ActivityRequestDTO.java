package com.travelplanner.dto;

import java.time.LocalDateTime;

public class ActivityRequestDTO {

    private String activityName;
    private String location;
    private LocalDateTime activityTime;
    private String category;

    public ActivityRequestDTO() {}

    public String getActivityName() { return activityName; }
    public void setActivityName(String activityName) { this.activityName = activityName; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public LocalDateTime getActivityTime() { return activityTime; }
    public void setActivityTime(LocalDateTime activityTime) { this.activityTime = activityTime; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
}