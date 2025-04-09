// src/components/ListStudentComponent.js
import React, { useEffect, useState } from 'react';
import { deleteStudent, listStudents } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

const ListStudentComponent = () => {
    const [students, setStudents] = useState([]);
    const navigator = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
        getAllStudents();
    }, []);

    const getAllStudents = () => {
        listStudents()
            .then((response) => {
                setStudents(response.data);
                setError('');
            })
            .catch((err) => {
                setError('Error fetching students: ' + err.message);
            });
    };

    const addNewStudent = () => {
        navigator('/add-student');
    };

    const updateStudent = (id) => {
        navigator(`/edit-student/${id}`);
    };

    const removeStudent = (id) => {
        deleteStudent(id)
            .then(() => {
                getAllStudents();
                setError('');
            })
            .catch((err) => {
                setError('Error deleting student: ' + err.message);
            });
    };

    return (
        <div className='container'>
            <h2 className='text-center'>List of Students</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className='btn btn-primary mb-2' onClick={addNewStudent}>
                Add Student
            </button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Grade</th>
                        <th>City</th>
                        <th>Street</th>
                        <th>Zipcode</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.grade}</td>
                            <td>{student.address ? student.address.city : ''}</td>
                            <td>{student.address ? student.address.street : ''}</td>
                            <td>{student.address ? student.address.zipcode : ''}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateStudent(student.id)}>
                                    Update
                                </button>
                                <button
                                    className='btn btn-danger'
                                    onClick={() => removeStudent(student.id)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListStudentComponent;