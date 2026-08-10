package com.travelplanner.service;

import com.travelplanner.dto.ActivityRequestDTO;
import com.travelplanner.dto.ItineraryRequestDTO;
import com.travelplanner.entity.Itinerary;
import com.travelplanner.entity.ItineraryActivity;
import com.travelplanner.entity.User;
import com.travelplanner.repository.ItineraryActivityRepository;
import com.travelplanner.repository.ItineraryRepository;
import com.travelplanner.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.time.LocalDate;

@Service
public class ItineraryService {

    private final ItineraryRepository itineraryRepository;
    private final ItineraryActivityRepository activityRepository;
    private final UserRepository userRepository;

    public ItineraryService(ItineraryRepository itineraryRepository,
                            ItineraryActivityRepository activityRepository,
                            UserRepository userRepository) {
        this.itineraryRepository = itineraryRepository;
        this.activityRepository = activityRepository;
        this.userRepository = userRepository;
    }

    // 1. Create Itinerary
    public Itinerary createItinerary(Long userId, ItineraryRequestDTO dto) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        Itinerary itinerary = new Itinerary();
        itinerary.setTitle(dto.getTitle());
        itinerary.setDestination(dto.getDestination());
        itinerary.setStartDate(dto.getStartDate());
        itinerary.setEndDate(dto.getEndDate());
        itinerary.setNotes(dto.getNotes());
        
        // ⬇️ Updated: setOwner -> setUser
        itinerary.setUser(user);

        return itineraryRepository.save(itinerary);
    }

    // 2. Get All Trips for a User
    public List<Itinerary> getUserItineraries(Long userId) {
        // ⬇️ Updated: findByOwnerId -> findByUserId
        return itineraryRepository.findByUserId(userId);
    }

    // 3. Update Itinerary
    public Itinerary updateItinerary(Long itineraryId, ItineraryRequestDTO dto) {
        Itinerary itinerary = itineraryRepository.findById(itineraryId)
                .orElseThrow(() -> new RuntimeException("Itinerary not found"));

        itinerary.setTitle(dto.getTitle());
        itinerary.setDestination(dto.getDestination());
        itinerary.setStartDate(dto.getStartDate());
        itinerary.setEndDate(dto.getEndDate());
        itinerary.setNotes(dto.getNotes());

        return itineraryRepository.save(itinerary);
    }
    
    public List<Itinerary> searchByDestination(Long userId, String destination) {
        return itineraryRepository.findByUserIdAndDestinationContainingIgnoreCase(userId, destination);
    }

    public List<Itinerary> filterByDateRange(Long userId, LocalDate start, LocalDate end) {
        return itineraryRepository.findByUserIdAndStartDateBetween(userId, start, end);
    }

    // 4. Delete Itinerary
    public void deleteItinerary(Long itineraryId) {
        itineraryRepository.deleteById(itineraryId);
    }

    // 5. Duplicate Itinerary (FR3 Requirement)
    @Transactional
    public Itinerary duplicateItinerary(Long itineraryId, Long userId) {
        Itinerary original = itineraryRepository.findById(itineraryId)
                .orElseThrow(() -> new RuntimeException("Original itinerary not found"));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Itinerary clone = new Itinerary();
        clone.setTitle("Copy of " + original.getTitle());
        clone.setDestination(original.getDestination());
        clone.setStartDate(original.getStartDate());
        clone.setEndDate(original.getEndDate());
        clone.setNotes(original.getNotes());
        
        // ⬇️ Updated: setOwner -> setUser
        clone.setUser(user);

        Itinerary savedClone = itineraryRepository.save(clone);

        for (ItineraryActivity act : original.getActivities()) {
            ItineraryActivity newAct = new ItineraryActivity();
            newAct.setActivityName(act.getActivityName());
            newAct.setLocation(act.getLocation());
            newAct.setActivityTime(act.getActivityTime());
            newAct.setCategory(act.getCategory());
            newAct.setItinerary(savedClone);
            activityRepository.save(newAct);
        }

        return savedClone;
    }

    // 6. Add Activity to Itinerary (FR4 Requirement)
    public ItineraryActivity addActivity(Long itineraryId, ActivityRequestDTO dto) {
        Itinerary itinerary = itineraryRepository.findById(itineraryId)
                .orElseThrow(() -> new RuntimeException("Itinerary not found"));

        ItineraryActivity activity = new ItineraryActivity();
        activity.setActivityName(dto.getActivityName());
        activity.setLocation(dto.getLocation());
        activity.setActivityTime(dto.getActivityTime());
        activity.setCategory(dto.getCategory());
        activity.setItinerary(itinerary);

        return activityRepository.save(activity);
    }
}