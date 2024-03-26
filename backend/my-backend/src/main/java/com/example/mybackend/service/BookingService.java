package com.example.mybackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.mybackend.model.Booking;

import com.example.mybackend.repo.BookingRepo;

@Service
public class BookingService {

     @Autowired
    public BookingRepo book;

    public List<Booking> getbookingstatus(){
		return book.findAll();
	}
	
	public Optional<Booking> getuserByID(int id){
		return book.findById(id);
	}
	
	public Booking putDetails(@NonNull Booking bstatus) {
		return book.save(bstatus);
	}
	
	public void deleteByID(int id) {
		book.deleteById(id);
	}
    
}
