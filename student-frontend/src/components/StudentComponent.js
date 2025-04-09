// src/components/StudentComponent.js
import React, { useState, useEffect } from 'react';
import { createStudent, getStudent, updateStudent } from '../services/StudentService';
import { useNavigate, useParams } from 'react-router-dom';

const StudentComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [grade, setGrade] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zipcode, setZipcode] = useState('');
    const { id } = useParams();
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        grade: '',
        city: '',
        street: '',
        zipcode: ''
    });
    const navigator = useNavigate();
    const [backendErrors, setBackendErrors] = useState({});

    useEffect(() => {
        if (id) {
            getStudent(id)
                .then((response) => {
                    const student = response.data;
                    setFirstName(student.firstName);
                    setLastName(student.lastName);
                    setEmail(student.email);
                    setGrade(student.grade);
                    if (student.address) {
                        setCity(student.address.city);
                        setStreet(student.address.street);
                        setZipcode(student.address.zipcode);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [id]);

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const student = { firstName, lastName, email, grade, address: { city, street, zipcode } };
            if (id) {
                updateStudent(id, student)
                    .then(() => {
                        navigator('/students');
                        setBackendErrors({});
                    })
                    .catch((error) => {
                        if (error.response && error.response.data) {
                            setBackendErrors(error.response.data);
                        } else {
                            console.error(error);
                        }
                    });
            } else {
                createStudent(student)
                    .then(() => {
                        navigator('/students');
                        setBackendErrors({});
                    })
                    .catch((error) => {
                        if (error.response && error.response.data) {
                            setBackendErrors(error.response.data);
                        } else {
                            console.error(error);
                        }
                    });
            }
        }
    };

    const validateForm = () => {
        let valid = true;
        const errorsCopy = { ...errors };
        if (!firstName.trim()) {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        } else {
            errorsCopy.firstName = '';
        }
        if (!lastName.trim()) {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        } else {
            errorsCopy.lastName = '';
        }
        if (!email.trim()) {
            errorsCopy.email = 'Email is required';
            valid = false;
        } else {
            errorsCopy.email = '';
        }
        if (!grade.trim()) {
            errorsCopy.grade = 'Grade is required';
            valid = false;
        } else {
            errorsCopy.grade = '';
        }
        if (!city.trim()) {
            errorsCopy.city = 'City is required';
            valid = false;
        } else {
            errorsCopy.city = '';
        }
        if (!street.trim()) {
            errorsCopy.street = 'Street is required';
            valid = false;
        } else {
            errorsCopy.street = '';
        }
        if (!zipcode.trim()) {
            errorsCopy.zipcode = 'Zipcode is required';
            valid = false;
        } else {
            errorsCopy.zipcode = '';
        }

        setErrors(errorsCopy);
        return valid;
    };

    const pageTitle = () => {
        return <h2 className='text-center'>{id ? 'Update Student' : 'Add Student'}</h2>;
    };

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            {backendErrors && typeof backendErrors === 'string' && (
                                <div className='alert alert-danger'>{backendErrors}</div>
                            )}
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Student First Name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Student Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='email'
                                    placeholder='Enter Student Email'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <div className='invalid-feedback'> {errors.email} </div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Grade:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Student Grade'
                                    name='grade'
                                    value={grade}
                                    className={`form-control ${errors.grade ? 'is-invalid' : ''}`}
                                    onChange={(e) => setGrade(e.target.value)}
                                />
                                {errors.grade && <div className='invalid-feedback'> {errors.grade} </div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>City:</label>
                                <input
                                    type='text'
                                    placeholder='Enter City'
                                    name='city'
                                    value={city}
                                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                {errors.city && <div className='invalid-feedback'> {errors.city} </div>}
                            </div>

                             <div className='form-group mb-2'>
                                <label className='form-label'>Street:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Street'
                                    name='street'
                                    value={street}
                                    className={`form-control ${errors.street ? 'is-invalid' : ''}`}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                                {errors.street && <div className='invalid-feedback'> {errors.street} </div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Zipcode:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Zipcode'
                                    name='zipcode'
                                    value={zipcode}
                                    className={`form-control ${errors.zipcode ? 'is-invalid' : ''}`}
                                    onChange={(e) => setZipcode(e.target.value)}
                                />
                                {errors.zipcode && <div className='invalid-feedback'> {errors.zipcode} </div>}
                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateStudent} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentComponent;