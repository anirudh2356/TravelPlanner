package com.travelplanner.service;

import com.travelplanner.dto.AuthResponse;
import com.travelplanner.dto.LoginRequest;
import com.travelplanner.dto.RegisterRequest;

public interface AuthService {

    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);

}
