import React, { useState } from 'react';
import axios from 'axios';  // Ensure axios is imported

const AddInstanceForm = () => {

    const [year, setYear] = useState('');
    const [semister, setSemister] = useState('');  
    const [courseId, setCourseId] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();  

        try {
            const response = await axios.post('http://localhost:8080/instance', {
                year,
                semister,  
                courseId
            });
            console.log('Data added successfully', response);
            alert('Data added successfully');
            setYear('');
            setSemister('');
            setCourseId('');
        } catch (error) {
            console.log('Failed to add the data', error);
            alert('Failed to add the data');
        }
    }
    
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Add Course Instance</h2>
            <form onSubmit={submitHandler} className="p-4 border rounded shadow-sm">
                <div className="form-group mb-3">
                    <label htmlFor='year'>Year</label>
                    <input
                        type='number'
                        id='year'
                        className='form-control'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor='semester'>Semester</label>
                    <input
                        type='text'
                        id='semester'
                        className='form-control'
                        value={semister}
                        onChange={(e) => setSemister(e.target.value)}  
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor='courseCode'>Course Code</label>
                    <input
                        type='text'
                        id='courseCode'
                        className='form-control'
                        value={courseId}
                        onChange={(e) => setCourseId(e.target.value)}
                        required
                    />
                </div>
                <button type='submit' className='btn btn-primary w-100'>Add Data</button>
            </form>
        </div>
    );
}

export default AddInstanceForm;
