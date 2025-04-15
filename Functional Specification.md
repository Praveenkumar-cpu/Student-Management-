<!-----



Conversion time: 0.504 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β44
* Mon Apr 14 2025 23:56:18 GMT-0700 (PDT)
* Source doc: StudentManagementSystem
* This is a partial selection. Check to make sure intra-doc links work.
----->


__<span style="text-decoration:underline;"> Student Management System (SMS)</span>__

__1. Functional Specification Document (FSD)__

__1.1 Introduction__



* __Purpose:__ This document outlines the functional requirements for the Student Management Application (SMA).
* __Scope:__ This application allows users to manage student information, including adding, viewing, updating, and deleting student records.
* __Audience:__ Developers, testers, product owners.

__1.2 User Stories__



* As an administrator, I want to add a new student, so I can keep track of student information.
* As an administrator, I want to view a list of all students, so I can have an overview of the student population.
* As an administrator, I want to view the details of a specific student, so I can review their information.
* As an administrator, I want to update the details of a student, so I can correct or modify their information.
* As an administrator, I want to delete a student, so I can remove them from the system.

__1.3 Functional Requirements__



* __Student Registration:__
    * The system shall allow administrators to register new students.
    * The system shall require the following student information:
        * First Name (text, required)
        * Last Name (text, required)
        * Email (email, required, unique)
        * Grade (text, required)
        * City (text, required)
        * Street (text, required)
        * Zipcode (text, required)
    * The system shall validate all input fields.
* __Student Listing:__
    * The system shall display a list of all students, including their ID, first name, last name, email, grade,City etc
* __Student Details:__
    * The system shall allow administrators to view the detailed information of a specific student.
* __Student Update:__
    * The system shall allow administrators to update student information.
    * The system shall validate all input fields.
* __Student Deletion:__
    * The system shall allow administrators to delete student records.
    * The system shall ask for confirmation before deleting any student.
