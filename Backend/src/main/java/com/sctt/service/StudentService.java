package com.sctt.service;

import com.sctt.model.Student;
import com.sctt.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class StudentService implements  StudentServiceInterface{

    @Autowired
    //BRING AN OBJECT OF THAT CLASS
    private StudentRepo studentRepo;

    @Override
    public Student saveStudent(Student student) {
        return studentRepo.save(student);
        //save method is automatically found in spring data jpa dependency
    }

    //returning a student if it exists therefore optional
    @Override
    public Optional<Student> getStudentById(int id) {

        return studentRepo.findById(id);
    }

    @Override
    public List<Student> getAllStudents() {

        return studentRepo.findAll();
    }

    @Override
    public Student updateStudent(int id, Student student) {
        Student studentToUpdate = studentRepo.findById(id).orElseThrow();
        studentToUpdate.setFirstName(student.getFirstName());
        studentToUpdate.setLastName(student.getLastName());
        studentToUpdate.setAddress(student.getAddress());
        studentToUpdate.setDegree(student.getDegree());
        studentToUpdate.setBday(student.getBday());
       return studentRepo.save(studentToUpdate);
    }

    @Override
    public void deleteStudents(int id) {
        studentRepo.deleteById(id);
    }
}
