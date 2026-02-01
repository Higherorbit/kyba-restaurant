package com.kyba.restaurant.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "menu_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private BigDecimal price;

    @Enumerated(EnumType.STRING)
    private Category category;

    private String imageUrl;

    private boolean vegetarian;

    private boolean available;

    public enum Category {
        SUSHI,
        DIM_SUM,
        RAMEN,
        APPETIZERS,
        MAIN_COURSE,
        DESSERTS,
        BEVERAGES
    }
}
