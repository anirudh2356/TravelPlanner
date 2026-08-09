package com.travelplanner.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.travelplanner.dto.AuthResponse;
import com.travelplanner.dto.LoginRequest;
import com.travelplanner.dto.RegisterRequest;
import com.travelplanner.entity.Role;
import com.travelplanner.entity.User;
import com.travelplanner.repository.UserRepository;
import com.travelplanner.security.JwtUtil;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    // Constructor
    public AuthServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           JwtUtil jwtUtil) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    // =========================
    // REGISTER
    // =========================
    @Override
    public AuthResponse register(RegisterRequest request) {

        // Check whether email already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            return new AuthResponse("Email already registered");
        }

        // Create new User
        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());

        // Encrypt password using BCrypt
        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        user.setPhone(request.getPhone());

        // Set default role
        user.setRole(Role.USER);

        // Save user in MySQL
        userRepository.save(user);

        return new AuthResponse("Registration successful");
    }

    // =========================
    // LOGIN
    // =========================
    @Override
    public AuthResponse login(LoginRequest request) {

        // Find user using email
        User user = userRepository.findByEmail(request.getEmail())
                .orElse(null);

        // User doesn't exist
        if (user == null) {
            return new AuthResponse("User not found");
        }

        // Check password
        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            return new AuthResponse("Invalid password");
        }

        // Generate JWT token after successful login
        String token = jwtUtil.generateToken(user.getEmail());

        // Return success message + JWT token
        return new AuthResponse("Login successful", token);
    }
}