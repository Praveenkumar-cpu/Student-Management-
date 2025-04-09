package net.csindia.sms.mapper;
import net.csindia.sms.dto.AddressDto;
import net.csindia.sms.dto.StudentDto;
import net.csindia.sms.entity.Address;
import net.csindia.sms.entity.Student;

public class StudentMapper {

    public static StudentDto mapToStudentDto(Student student) {
        AddressDto addressDto = null;
        if (student.getAddress() != null) {
            addressDto = new AddressDto(
                    student.getAddress().getId(),
                    student.getAddress().getCity(),
                    student.getAddress().getStreet(),
                    student.getAddress().getZipcode()
            );
        }
        return new StudentDto(
                student.getId(),
                student.getFirstName(),
                student.getLastName(),
                student.getEmail(),
                student.getGrade(),
                addressDto
        );
    }

    public static Student mapToStudent(StudentDto studentDto) {
        Address address = null;
        if (studentDto.getAddress() != null) {
            address = new Address(
                    studentDto.getAddress().getId(),
                    studentDto.getAddress().getCity(),
                    studentDto.getAddress().getStreet(),
                    studentDto.getAddress().getZipcode(),
                    null
            );
        }
        return new Student(
                studentDto.getId(),
                studentDto.getFirstName(),
                studentDto.getLastName(),
                studentDto.getEmail(),
                studentDto.getGrade(),
                address
        );
    }
}


//private String studentPassword = "secretPassword"; // Sensitive!