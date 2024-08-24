import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseList.css'; // Import the CSS file

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/allcourse');
                setCourses(response.data);
                console.log('Data displayed successfully');
            } catch (error) {
                console.log('Failed to display the data');
                alert('Failed to display data');
            }
        };

        fetchData();
    }, []);

    const onViewCourse = (courseId) => {
        alert(`View course with ID: ${courseId}`);
    };

    const onDeleteCourse = async (courseId) => {
        try {
            await axios.delete(`http://localhost:8080/course/${courseId}`);
            setCourses(courses.filter(course => course.courseId !== courseId)); 
            alert('Course deleted successfully');
        } catch (error) {
            console.log('Failed to delete the course', error);
            alert('Failed to delete course');
        }
    };

    return (
        <div className="course-list-container">
            <h1 className="course-list-title">Course List</h1>
            <table className="course-table">
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.courseId}>
                            <td>{course.title}</td>
                            <td>{course.code}</td>
                            <td>
                                <button className="view-button" onClick={() => onViewCourse(course.courseId)}>👁️ View</button>
                                <button className="delete-button" onClick={() => onDeleteCourse(course.courseId)}>🗑️ Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseList;
