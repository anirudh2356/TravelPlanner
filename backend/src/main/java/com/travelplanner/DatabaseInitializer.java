package com.travelplanner;

import com.travelplanner.entity.User;
import com.travelplanner.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final UserRepository userRepository;

    public DatabaseInitializer(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        if (userRepository.count() == 0) {
            User defaultUser = new User();
            defaultUser.setEmail("testuser@example.com");
            defaultUser.setFullName("Test Traveler");
            userRepository.save(defaultUser);
            System.out.println("✅ Default Test User Created (ID: 1)");
        }
    }
}