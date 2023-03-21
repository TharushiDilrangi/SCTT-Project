package com.sctt.controller;

import com.sctt.exception.ServerError;
import com.sctt.model.Student;
import com.sctt.repository.StudentRepo;
import com.sctt.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/student")
// used to map web requests onto specific handler classes and/or handler methods.
@CrossOrigin("*")

public class StudentController {
    @Autowired
    private StudentService studentService;

    //save student
    @PostMapping
    public Student saveStudent(@RequestBody Student student) {

        return studentService.saveStudent(student);
    }

    //getting students
    @GetMapping
    public List<Student> getAllStudents() {

        return studentService.getAllStudents();
    }

    //getting one student
    @GetMapping("/{id}")
    public Optional<Student> getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    //updating student
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {
        return studentService.updateStudent(id, student);
    }

    //deleting student
    @DeleteMapping("/{id}")
    public void deleteStudents(@PathVariable int id) {
        studentService.deleteStudents(id);
    }

}
