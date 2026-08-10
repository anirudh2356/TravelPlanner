package com.travelplanner.repository;

import com.travelplanner.entity.ItineraryActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ItineraryActivityRepository extends JpaRepository<ItineraryActivity, Long> {
    List<ItineraryActivity> findByItineraryId(Long itineraryId);
}
