package com.quest.SpringBootBackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

 
 
@Entity
@Table(name = "Appointments")
public class Appointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = " customers")
	private String customers;
	@Column(name = " dateofapointment")
	private String dateofapointment;
	@Column(name = " about")
	private String about ;
	@Column(name = " location")
	private String location;
	@Column(name = " time")
	private String time;
	@Column(name = " discussion")
	private String discussion;
	public Appointment() {
		super();
	}
	public Appointment(Long id, String customers, String dateofapointment, String about, String location, String time,
			String discussion) {
		super();
		this.id = id;
		this.customers = customers;
		this.dateofapointment = dateofapointment;
		this.about = about;
		this.location = location;
		this.time = time;
		this.discussion = discussion;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCustomers() {
		return customers;
	}
	public void setCustomers(String customers) {
		this.customers = customers;
	}
	public String getDateofapointment() {
		return dateofapointment;
	}
	public void setDateofapointment(String dateofapointment) {
		this.dateofapointment = dateofapointment;
	}
	public String getAbout() {
		return about;
	}
	public void setAbout(String about) {
		this.about = about;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getDiscussion() {
		return discussion;
	}
	public void setDiscussion(String discussion) {
		this.discussion = discussion;
	}
	 
	
}
