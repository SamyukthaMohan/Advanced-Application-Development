package com.example.mybackend.service;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.mybackend.model.NewEvent;
import com.example.mybackend.repo.NewEventRepo;

@Service
public class NewEventService {
    
    @Autowired
    private NewEventRepo addnew;

    public List<NewEvent> getstorydetails(){
		return addnew.findAll();
	}
	
	public Optional<NewEvent> getuserByID(int id){
		return addnew.findById(id);
	}
	
    public NewEvent saveBook(@NonNull NewEvent book)
	  {
		  return addnew.save(book);
	  }
	  public String saveBooks(@NonNull NewEvent book)
	  {
        addnew.save(book);
		   return "Thanks for Posting";
	  }

	public NewEvent putDetails(@NonNull NewEvent logobj) {
		return addnew.save(logobj);
	}
     
	
	public void deleteByID(int id) {
		addnew.deleteById(id);
	}

}
