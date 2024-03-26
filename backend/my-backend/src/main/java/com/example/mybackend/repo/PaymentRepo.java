package com.example.mybackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mybackend.model.Payment;

@Repository
public interface PaymentRepo extends JpaRepository<Payment,Integer>{
    
}
