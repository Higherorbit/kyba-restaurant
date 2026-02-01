package com.kyba.restaurant.repository;

import com.kyba.restaurant.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
    
    List<MenuItem> findByCategory(MenuItem.Category category);
    
    List<MenuItem> findByVegetarian(boolean vegetarian);
    
    List<MenuItem> findByAvailable(boolean available);
    
    List<MenuItem> findByCategoryAndAvailable(MenuItem.Category category, boolean available);
}
