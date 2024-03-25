package com.example.mybackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mybackend.model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking,Integer>{
    
}
