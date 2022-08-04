package com.quest.SpringBootBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quest.SpringBootBackend.model.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{

}
