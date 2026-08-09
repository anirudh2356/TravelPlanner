package com.travelplanner.security;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    // Secret key used to sign JWT tokens
    private final SecretKey secretKey = Keys.hmacShaKeyFor(
            "TravelPlannerSecretKeyForJWTAuthentication2026".getBytes()
    );

    // Token validity: 1 hour
    private final long expirationTime = 60 * 60 * 1000;

    // Generate JWT token
    public String generateToken(String email) {

        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(secretKey)
                .compact();
    }

    // Extract email from token
    public String extractEmail(String token) {

        Claims claims = Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();

        return claims.getSubject();
    }

    // Validate token
    public boolean validateToken(String token, String email) {

        try {
            String tokenEmail = extractEmail(token);

            return tokenEmail.equals(email) && !isTokenExpired(token);

        } catch (Exception e) {
            return false;
        }
    }

    // Check token expiration
    private boolean isTokenExpired(String token) {

        Claims claims = Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();

        return claims.getExpiration().before(new Date());
    }
}