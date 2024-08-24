import React, { useState } from 'react';
import axios from 'axios';

const AddcourseForm = () => {
    const [title, setTitle] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();  

        try {
            const response = await axios.post(`http://localhost:8080/courses`, {
                title,
                courseCode,
                description
            });
            console.log("Data added successfully", response);
            alert('Data added!');
        } catch (error) {
            console.log('Failed to add the data', error);
            alert('Failed to add the data');
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor='title'>Title</label>
                    <input
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='coursecode'>Course Code</label>
                    <input
                        id='coursecode'
                        value={courseCode}
                        onChange={(e) => setCourseCode(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='desc'>Description</label>
                    <input
                        id='desc'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <button type='submit'>Add Data</button>
            </form>
        </div>
    )
}

export default AddcourseForm;
