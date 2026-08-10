package com.travelplanner.controller;

import com.travelplanner.dto.ActivityRequestDTO;
import com.travelplanner.dto.ItineraryRequestDTO;
import com.travelplanner.entity.Itinerary;
import com.travelplanner.entity.ItineraryActivity;
import com.travelplanner.service.ItineraryService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/itineraries")
public class ItineraryController {

    private final ItineraryService itineraryService;

    public ItineraryController(ItineraryService itineraryService) {
        this.itineraryService = itineraryService;
    }

    @PostMapping("/user/{userId}")
    public ResponseEntity<Itinerary> createItinerary(@PathVariable Long userId, @RequestBody ItineraryRequestDTO dto) {
        return ResponseEntity.ok(itineraryService.createItinerary(userId, dto));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Itinerary>> getUserItineraries(@PathVariable Long userId) {
        return ResponseEntity.ok(itineraryService.getUserItineraries(userId));
    }

    @PutMapping("/{itineraryId}")
    public ResponseEntity<Itinerary> updateItinerary(@PathVariable Long itineraryId, @RequestBody ItineraryRequestDTO dto) {
        return ResponseEntity.ok(itineraryService.updateItinerary(itineraryId, dto));
    }

    @DeleteMapping("/{itineraryId}")
    public ResponseEntity<Void> deleteItinerary(@PathVariable Long itineraryId) {
        itineraryService.deleteItinerary(itineraryId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{itineraryId}/duplicate/user/{userId}")
    public ResponseEntity<Itinerary> duplicateItinerary(@PathVariable Long itineraryId, @PathVariable Long userId) {
        return ResponseEntity.ok(itineraryService.duplicateItinerary(itineraryId, userId));
    }

    @PostMapping("/{itineraryId}/activities")
    public ResponseEntity<ItineraryActivity> addActivity(@PathVariable Long itineraryId, @RequestBody ActivityRequestDTO dto) {
        return ResponseEntity.ok(itineraryService.addActivity(itineraryId, dto));
    }

    @GetMapping("/user/{userId}/search")
    public ResponseEntity<List<Itinerary>> searchByDestination(@PathVariable Long userId, @RequestParam String destination) {
        return ResponseEntity.ok(itineraryService.searchByDestination(userId, destination));
    }

    @GetMapping("/user/{userId}/filter")
    public ResponseEntity<List<Itinerary>> filterByDate(
            @PathVariable Long userId, 
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate, 
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        return ResponseEntity.ok(itineraryService.filterByDateRange(userId, startDate, endDate));
    }
}