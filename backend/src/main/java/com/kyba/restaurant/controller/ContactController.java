package com.kyba.restaurant.controller;

import com.kyba.restaurant.entity.ContactMessage;
import com.kyba.restaurant.repository.ContactMessageRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactMessageRepository contactMessageRepository;

    public ContactController(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    @PostMapping
    public ResponseEntity<?> submitContactForm(@Valid @RequestBody ContactMessage message) {
        try {
            contactMessageRepository.save(message);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Thank you for reaching out! We'll get back to you soon.");
            
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Failed to send message: " + e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }
}
