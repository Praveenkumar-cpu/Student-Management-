package net.csindia.sms.service;

import net.csindia.sms.dto.StudentDto;

import java.util.List;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);
    StudentDto getStudentById(Long studentId);
    List<StudentDto> getAllStudents();
    StudentDto updateStudent(Long studentId, StudentDto updatedStudent);
    void deleteStudent(Long studentId);
}