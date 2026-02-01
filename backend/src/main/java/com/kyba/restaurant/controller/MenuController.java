package com.kyba.restaurant.controller;

import com.kyba.restaurant.entity.MenuItem;
import com.kyba.restaurant.repository.MenuItemRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    private final MenuItemRepository menuItemRepository;

    public MenuController(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    @GetMapping
    public ResponseEntity<List<MenuItem>> getAllMenuItems() {
        return ResponseEntity.ok(menuItemRepository.findByAvailable(true));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<MenuItem>> getByCategory(@PathVariable String category) {
        try {
            MenuItem.Category cat = MenuItem.Category.valueOf(category.toUpperCase());
            return ResponseEntity.ok(menuItemRepository.findByCategoryAndAvailable(cat, true));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/categories")
    public ResponseEntity<Map<String, List<MenuItem>>> getMenuByCategories() {
        List<MenuItem> allItems = menuItemRepository.findByAvailable(true);
        
        Map<String, List<MenuItem>> grouped = allItems.stream()
                .collect(Collectors.groupingBy(item -> 
                    item.getCategory().name().replace("_", " ")));
        
        return ResponseEntity.ok(grouped);
    }

    @GetMapping("/vegetarian")
    public ResponseEntity<List<MenuItem>> getVegetarianItems() {
        return ResponseEntity.ok(menuItemRepository.findByVegetarian(true));
    }
}
