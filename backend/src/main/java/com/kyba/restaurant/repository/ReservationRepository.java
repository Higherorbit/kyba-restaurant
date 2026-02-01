package com.kyba.restaurant.repository;

import com.kyba.restaurant.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    
    List<Reservation> findByDate(LocalDate date);
    
    List<Reservation> findByPhone(String phone);
    
    List<Reservation> findByDateAndTime(LocalDate date, java.time.LocalTime time);
}
