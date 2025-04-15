_2. Technical Specification Document (TSD)__

__2.1 Introduction__



* __Purpose:__ This document outlines the technical design and architecture of the Student Management Application (SMA).
* __Scope:__ This document covers the technologies, architecture, and design patterns used in the application.
* __Audience:__ Developers, system administrators.

__2.2 Architecture__



* __Architecture:__ Three-tier architecture (presentation, application, data).
* __Presentation Layer:__ React (JavaScript).
* __Application Layer:__ Spring Boot (Java).
* __Data Layer:__ Relational database (MySQL)

__2.3 Technologies__



* __Backend:__
    * Spring Boot
    * Java 17 (or later)
    * Spring Data JPA
    * Lombok
    * Maven
* __Frontend:__
    * React
    * JavaScript (ES6+)
    * Axios
    * React Router
    * npm
* __Database:__
    * MySQL/PostgreSQL

__2.4 API Endpoints__


    __POST /api/students:__ Create a new student.



* __Request Body:__ JSON object containing student details (firstName, lastName, email, grade, dateOfBirth, address {city, street, zipcode}).

    __GET /api/students:__ Get a list of all students.

* __Request:__ None.

    __GET /api/students/{id}:__ Get details of a specific student.

* __Request Parameter (Path):__ `id` (Long) - The ID of the student to retrieve.

    __PUT /api/students/{id}:__ Update student details.

* __Request Parameter (Path):__ `id` (Long) - The ID of the student to update.
* __Request Body:__ JSON object containing the student details to update.

    __DELETE /api/students/{id}:__ Delete a student.

* __Request Parameter (Path):__ `id` (Long) - The ID of the student to delete.

__2.5 Database Schema__


## __Addresses Table__


<table>
  <tr>
   <td><strong>Column</strong>
   </td>
   <td><strong>Data Type</strong>
   </td>
   <td><strong>Constraints</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>id</strong>
   </td>
   <td><strong>BIGINT</strong>
   </td>
   <td><strong>PRIMARY KEY, AUTO_INCREMENT</strong>
   </td>
   <td><strong>Uniquely identifies each address record.</strong>
   </td>
  </tr>
  <tr>
   <td><strong>city</strong>
   </td>
   <td><strong>VARCHAR(255)</strong>
   </td>
   <td><strong>NOT NULL</strong>
   </td>
   <td><strong>Stores the city of the address.</strong>
   </td>
  </tr>
  <tr>
   <td><strong>street</strong>
   </td>
   <td><strong>VARCHAR(255)</strong>
   </td>
   <td><strong>NOT NULL</strong>
   </td>
   <td><strong>Stores the street of the address.</strong>
   </td>
  </tr>
  <tr>
   <td><strong>zipcode</strong>
   </td>
   <td><strong>VARCHAR(255)</strong>
   </td>
   <td><strong>NOT NULL</strong>
   </td>
   <td><strong>Stores the ZIP code of the address.</strong>
   </td>
  </tr>
</table>



## __Students Table__


<table>
  <tr>
   <td><strong>Column</strong>
   </td>
   <td><strong>Data Type</strong>
   </td>
   <td><strong>Constraints</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>id</strong>
   </td>
   <td><strong>BIGINT</strong>
   </td>
   <td><strong>PRIMARY KEY, AUTO_INCREMENT</strong>
   </td>
   <td><strong>Uniquely identifies each student record.</strong>
   </td>
  </tr>
  <tr>
   <td><strong>first_Name</strong>
   </td>
   <td><strong>VARCHAR(255)</strong>
   </td>
   <td><strong>NOT NULL</strong>
   </td>
   <td><strong>Stores the first name of the student.</strong>
   </td>
  </tr>
  <tr>
   <td><strong>last_name</strong>
   </td>
   <td><strong>VARCHAR(255)</strong>
   </td>
   <td><strong>NOT NULL</strong>
   </td>
   <td><strong>Stores the last name of the student.</strong>
   </td>
  </tr>
  <tr>
   <td><strong>email_id</strong>
   </td>
   <td><strong>VARCHAR(255)</strong>
   </td>
   <td><strong>NOT NULL, UNIQUE</strong>
   </td>
   <td><strong>Stores the email address of the student (must be unique).</strong>
   </td>
  </tr>
  <tr>
   <td><strong>grade</strong>
   </td>
   <td><strong>VARCHAR(255)</strong>
   </td>
   <td><strong>NOT NULL</strong>
   </td>
   <td><strong>Stores the grade of the student.</strong>
   </td>
  </tr>
  <tr>
   <td><strong>address_id</strong>
   </td>
   <td><strong>BIGINT</strong>
   </td>
   <td><strong>UNIQUE, FOREIGN KEY referencing Addresses(id)</strong>
   </td>
   <td><strong>Foreign key linking to the student's address.</strong>
   </td>
  </tr>
</table>


__2.6 Design Patterns__



* __MVC (Model-View-Controller):__ Used in both frontend and backend.
* __DTO (Data Transfer Object):__ Used to transfer data between layers.
* __Repository Pattern:__ Used for database access.
