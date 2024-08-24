import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstanceList = () => {
    const [instances, setInstances] = useState([]);
    const [selectedInstance, setSelectedInstance] = useState(null); // State to hold the selected instance details

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8082/instance/2023/1'); // Example: Fetch instances for year 2023 and semester 1
                setInstances(response.data);  
                console.log('Data displayed successfully');
            } catch (error) {
                console.log('Failed to display the data', error);
                alert('Failed to display data');
            }
        };

        fetchData();
    }, []);

    const onViewInstance = async (instanceId) => {
        try {
            const response = await axios.get(`http://localhost:8080/instance/${year}/${semister}/${instanceId}`); // Adjust year and semester as needed
            setSelectedInstance(response.data); 
            console.log('Instance details fetched successfully');
        } catch (error) {
            console.log('Failed to fetch instance details', error);
            alert('Failed to fetch instance details');
        }
    };

    const onDeleteInstance = async (instanceId) => {
        try {
            await axios.delete(`http://localhost:8080/instance/${instanceId}`);
            setInstances(instances.filter(instance => instance.courseInsId !== instanceId)); 
            alert('Instance deleted successfully');
        } catch (error) {
            console.log('Failed to delete the instance', error);
            alert('Failed to delete instance');
        }
    };

    return (
        <div>
            <h1>Instance List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Year-Sem</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {instances.map((instance) => (
                        <tr key={instance.courseInsId}>
                            <td>{instance.courseTitle}</td>
                            <td>{instance.year}-{instance.semester}</td>
                            <td>{instance.courseCode}</td>
                            <td>
                                <button onClick={() => onViewInstance(instance.courseInsId)}>👁️</button>
                                <button onClick={() => onDeleteInstance(instance.courseInsId)}>🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedInstance && (
                <div>
                    <h2>Instance Details</h2>
                    <p><strong>Course Title:</strong> {selectedInstance.courseTitle}</p>
                    <p><strong>Year:</strong> {selectedInstance.year}</p>
                    <p><strong>Semester:</strong> {selectedInstance.semester}</p>
                    <p><strong>Course Code:</strong> {selectedInstance.courseCode}</p>
                    <p><strong>Description:</strong> {selectedInstance.description}</p>
                </div>
            )}
        </div>
    );
};

export default InstanceList;
