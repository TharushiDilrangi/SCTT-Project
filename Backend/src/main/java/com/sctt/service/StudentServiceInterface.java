package com.sctt.service;

import com.sctt.model.Student;

import java.util.List;
import java.util.Optional;

public interface StudentServiceInterface {
    public Student saveStudent(Student student);
    public Optional<Student> getStudentById(int id);
    List<Student> getAllStudents();
    Student updateStudent(int id,Student student);
    void deleteStudents(int id);
}
