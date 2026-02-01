package com.kyba.restaurant.config;

import com.kyba.restaurant.entity.MenuItem;
import com.kyba.restaurant.repository.MenuItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(MenuItemRepository menuItemRepository) {
        return args -> {
            // Sushi
            menuItemRepository.save(new MenuItem(null, "Dragon Roll", 
                "Shrimp tempura, eel, avocado, cucumber with special sauce", 
                new BigDecimal("549"), MenuItem.Category.SUSHI, 
                "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400", false, true));
            
            menuItemRepository.save(new MenuItem(null, "Rainbow Roll", 
                "California roll topped with assorted sashimi", 
                new BigDecimal("599"), MenuItem.Category.SUSHI, 
                "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400", false, true));
            
            menuItemRepository.save(new MenuItem(null, "Vegetable Roll", 
                "Avocado, cucumber, carrot, asparagus", 
                new BigDecimal("349"), MenuItem.Category.SUSHI, 
                "https://images.unsplash.com/photo-1562802378-063ec186a863?w=400", true, true));

            menuItemRepository.save(new MenuItem(null, "Salmon Nigiri", 
                "Fresh salmon over seasoned rice (2 pcs)", 
                new BigDecimal("299"), MenuItem.Category.SUSHI, 
                "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400", false, true));

            // Dim Sum
            menuItemRepository.save(new MenuItem(null, "Har Gow", 
                "Crystal shrimp dumplings (4 pcs)", 
                new BigDecimal("349"), MenuItem.Category.DIM_SUM, 
                "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400", false, true));
            
            menuItemRepository.save(new MenuItem(null, "Siu Mai", 
                "Pork and shrimp dumplings (4 pcs)", 
                new BigDecimal("329"), MenuItem.Category.DIM_SUM, 
                "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400", false, true));
            
            menuItemRepository.save(new MenuItem(null, "Char Siu Bao", 
                "BBQ pork steamed buns (3 pcs)", 
                new BigDecimal("299"), MenuItem.Category.DIM_SUM, 
                "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400", false, true));

            menuItemRepository.save(new MenuItem(null, "Vegetable Spring Rolls", 
                "Crispy rolls with mixed vegetables (4 pcs)", 
                new BigDecimal("249"), MenuItem.Category.DIM_SUM, 
                "https://images.unsplash.com/photo-1544025162-d76694265947?w=400", true, true));

            // Ramen
            menuItemRepository.save(new MenuItem(null, "Tonkotsu Ramen", 
                "Rich pork bone broth, chashu, soft egg, nori, green onions", 
                new BigDecimal("449"), MenuItem.Category.RAMEN, 
                "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", false, true));
            
            menuItemRepository.save(new MenuItem(null, "Miso Ramen", 
                "Miso broth, corn, butter, bean sprouts, chashu", 
                new BigDecimal("429"), MenuItem.Category.RAMEN, 
                "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400", false, true));

            menuItemRepository.save(new MenuItem(null, "Vegetable Ramen", 
                "Vegetable broth, tofu, mushrooms, bok choy, corn", 
                new BigDecimal("399"), MenuItem.Category.RAMEN, 
                "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400", true, true));

            // Appetizers
            menuItemRepository.save(new MenuItem(null, "Edamame", 
                "Steamed soybeans with sea salt", 
                new BigDecimal("199"), MenuItem.Category.APPETIZERS, 
                "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400", true, true));
            
            menuItemRepository.save(new MenuItem(null, "Gyoza", 
                "Pan-fried pork dumplings (6 pcs)", 
                new BigDecimal("329"), MenuItem.Category.APPETIZERS, 
                "https://images.unsplash.com/photo-1625938145744-533e82abcc70?w=400", false, true));

            menuItemRepository.save(new MenuItem(null, "Takoyaki", 
                "Octopus balls with sauce and bonito flakes (6 pcs)", 
                new BigDecimal("349"), MenuItem.Category.APPETIZERS, 
                "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400", false, true));

            // Main Course
            menuItemRepository.save(new MenuItem(null, "Teriyaki Chicken", 
                "Grilled chicken with teriyaki glaze, served with rice", 
                new BigDecimal("449"), MenuItem.Category.MAIN_COURSE, 
                "https://images.unsplash.com/photo-1609183480237-ccdb8912a2e0?w=400", false, true));

            menuItemRepository.save(new MenuItem(null, "Kung Pao Tofu", 
                "Crispy tofu with peanuts, chilies, Sichuan peppercorns", 
                new BigDecimal("399"), MenuItem.Category.MAIN_COURSE, 
                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400", true, true));

            // Desserts
            menuItemRepository.save(new MenuItem(null, "Mochi Ice Cream", 
                "Assorted flavors (3 pcs)", 
                new BigDecimal("249"), MenuItem.Category.DESSERTS, 
                "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400", true, true));

            menuItemRepository.save(new MenuItem(null, "Matcha Cheesecake", 
                "Japanese green tea cheesecake", 
                new BigDecimal("299"), MenuItem.Category.DESSERTS, 
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400", true, true));

            // Beverages
            menuItemRepository.save(new MenuItem(null, "Japanese Green Tea", 
                "Hot or iced", 
                new BigDecimal("149"), MenuItem.Category.BEVERAGES, 
                "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400", true, true));

            menuItemRepository.save(new MenuItem(null, "Mango Lassi", 
                "Creamy mango yogurt drink", 
                new BigDecimal("179"), MenuItem.Category.BEVERAGES, 
                "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400", true, true));

            menuItemRepository.save(new MenuItem(null, "Sake (Hot/Cold)", 
                "Traditional Japanese rice wine", 
                new BigDecimal("399"), MenuItem.Category.BEVERAGES, 
                "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=400", true, true));
        };
    }
}
