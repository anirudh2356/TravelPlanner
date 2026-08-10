package com.travelplanner.repository;

import com.travelplanner.entity.Itinerary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
    List<Itinerary> findByUserId(Long userId);

    // Search by destination (case-insensitive)
    List<Itinerary> findByUserIdAndDestinationContainingIgnoreCase(Long userId, String destination);

    // Filter by date range
    List<Itinerary> findByUserIdAndStartDateBetween(Long userId, LocalDate start, LocalDate end);
}
