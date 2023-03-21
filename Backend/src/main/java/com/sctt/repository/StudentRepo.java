package com.sctt.repository;

import com.sctt.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository

public interface StudentRepo extends JpaRepository<Student,Integer> {
    Page<Student> findById (int id, Pageable pageable);
//    @Query("from student s where s.id=:keyword ")
//    Page<Student> findAll(Pageable pageable, @Param("keyword") String keyword);

}
