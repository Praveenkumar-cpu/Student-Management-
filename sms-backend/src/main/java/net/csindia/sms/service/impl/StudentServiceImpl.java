// net/csindia/sms/service/impl/StudentServiceImpl.java
package net.csindia.sms.service.impl;
import lombok.AllArgsConstructor;
import net.csindia.sms.dto.StudentDto;
import net.csindia.sms.entity.Student;
import net.csindia.sms.exception.ResourceNotFoundException;
import net.csindia.sms.mapper.StudentMapper;
import net.csindia.sms.repository.StudentRepository;
import net.csindia.sms.service.StudentService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    private void validateStudentDto(StudentDto studentDto) {
        if (studentDto.getFirstName() == null || studentDto.getFirstName().trim().isEmpty() ||
                studentDto.getLastName() == null || studentDto.getLastName().trim().isEmpty() ||
                studentDto.getEmail() == null || studentDto.getEmail().trim().isEmpty() ||
                studentDto.getGrade() == null || studentDto.getGrade().trim().isEmpty()) {
            throw new IllegalArgumentException("All student fields are required.");
        }

        if (studentDto.getAddress() != null) {
            if (studentDto.getAddress().getCity() == null || studentDto.getAddress().getCity().trim().isEmpty() ||
                    studentDto.getAddress().getStreet() == null || studentDto.getAddress().getStreet().trim().isEmpty() ||
                    studentDto.getAddress().getZipcode() == null || studentDto.getAddress().getZipcode().trim().isEmpty()) {
                throw new IllegalArgumentException("All address fields are required.");
            }
        } else {
            throw new IllegalArgumentException("Address is required.");
        }
    }

    private void validateUniqueEmail(String email, Long studentIdToExclude) {
        Optional<Student> existingStudent = studentRepository.findByEmail(email);
        if (existingStudent.isPresent() && (studentIdToExclude == null || !existingStudent.get().getId().equals(studentIdToExclude))) {
            throw new IllegalArgumentException("Email already exists.");
        }
    }

    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        validateStudentDto(studentDto);
        validateUniqueEmail(studentDto.getEmail(), null);

        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent = studentRepository.save(student);
        return StudentMapper.mapToStudentDto(savedStudent);
    }

    @Override
    public StudentDto getStudentById(Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student is not exists with given id: " + studentId));
        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return students.stream()
                .map(StudentMapper::mapToStudentDto)
                .collect(Collectors.toList());
    }

    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updatedStudent) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student is not exists with given id: " + studentId));

        validateStudentDto(updatedStudent);
        validateUniqueEmail(updatedStudent.getEmail(), studentId);
        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setEmail(updatedStudent.getEmail());
        student.setGrade(updatedStudent.getGrade());
        student.setAddress(StudentMapper.mapToStudent(updatedStudent).getAddress());

        Student updatedStudentObj = studentRepository.save(student);
        return StudentMapper.mapToStudentDto(updatedStudentObj);
    }

    @Override
    public void deleteStudent(Long studentId) {
        studentRepository.deleteById(studentId);
    }
}