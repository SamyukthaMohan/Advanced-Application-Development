package com.example.mybackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mybackend.model.NewEvent;
@Repository
public interface NewEventRepo extends JpaRepository<NewEvent,Integer> {
    
}
