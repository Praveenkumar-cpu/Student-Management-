// net/csindia/sms/controller/StudentController.java
package net.csindia.sms.controller;
import lombok.AllArgsConstructor;
import net.csindia.sms.dto.StudentDto;
import net.csindia.sms.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@AllArgsConstructor
@CrossOrigin("*")
public class StudentController {

    private StudentService studentService;

    @PostMapping
    public ResponseEntity<?> createStudent(@RequestBody StudentDto studentDto) {
        try {
            StudentDto savedStudent = studentService.createStudent(studentDto);
            return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long studentId) {
        StudentDto studentDto = studentService.getStudentById(studentId);
        return ResponseEntity.ok(studentDto);
    }

    @GetMapping
    public ResponseEntity<List<StudentDto>> getAllStudents() {
        List<StudentDto> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateStudent(@PathVariable("id") Long studentId, @RequestBody StudentDto updatedStudent) {
        try{
            StudentDto studentDto = studentService.updateStudent(studentId, updatedStudent);
            return ResponseEntity.ok(studentDto);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId) {
        studentService.deleteStudent(studentId);
        return ResponseEntity.ok("Student deleted successfully!");
    }
}