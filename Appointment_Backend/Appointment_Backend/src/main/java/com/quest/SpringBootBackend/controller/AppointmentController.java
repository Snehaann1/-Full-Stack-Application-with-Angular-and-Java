package com.quest.SpringBootBackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

 
import com.quest.SpringBootBackend.exception.ResourceNotFoundException;
import com.quest.SpringBootBackend.model.Appointment;
import com.quest.SpringBootBackend.repository.AppointmentRepository;

@RestController 
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")
public class AppointmentController {
	
	@Autowired
	public AppointmentRepository appointmentRepository;
	
	@GetMapping("/appointments")
	public List<Appointment> getAppointments(Appointment appoinment ) {
		return appointmentRepository.findAll();	
	}
	
	@PostMapping("/appointments")
	public Appointment createAppointment( @RequestBody Appointment appointment) {
		return appointmentRepository.save(appointment);
	}
	
	@PutMapping("/appointments/{id}")
	public   ResponseEntity<Appointment> updateAppointment(@PathVariable Long id, @RequestBody Appointment appointmentDetails)
	{
		 Appointment   appointments = appointmentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException(" appointment not exist with id :" + id));
		appointments.setCustomers(appointmentDetails.getCustomers());
		appointments.setDateofapointment(appointmentDetails.getDateofapointment());
		appointments.setAbout(appointmentDetails.getAbout());
		appointments.setDiscussion(appointmentDetails.getDiscussion());
		appointments.setLocation(appointmentDetails.getLocation());
		appointments.setTime(appointmentDetails.getTime());
		
		 Appointment updateappointments= appointmentRepository.save(appointments);
		 return  ResponseEntity.ok(updateappointments);
	  
	}
	
	@DeleteMapping("/appointments/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable Long id){
		Appointment appointment = appointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("appointment not exist with id :" + id));
		appointmentRepository.delete(appointment);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
