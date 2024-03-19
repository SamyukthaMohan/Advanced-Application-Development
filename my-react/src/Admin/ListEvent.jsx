import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ListEvent.css'; // Import CSS for styling

const ListEvent = () => {
  // Sample data for candidate applications
  const [applications, setApplications] = useState([
    { id: 1, name: 'John Doe', experience: '3 years', skills: 'JavaScript, React, Node.js' },
    { id: 2, name: 'Jane Smith', experience: '5 years', skills: 'Python, Django, SQL' },
    // Add more applications as needed
  ]);

  // Function to handle application selection
  const handleSelect = (id) => {
    // Implement your logic to handle application selection
    console.log("Application with ID ${id} selected");
  };

  // Function to handle application deletion
  const handleDelete = (id) => {
    // Implement your logic to handle application deletion
    setApplications(applications.filter(application => application.id !== id));
  };

  return (
    <div className="le_recruiter-page">
      
        
      <section className="le_applications">
        {applications.map(application => (
          <div key={application.id} className="le_application-card">
            <h2>{application.name}</h2>
            <p><strong>Experience:</strong> {application.experience}</p>
            <p><strong>Skills:</strong> {application.skills}</p>
            <div className="le_action-buttons">
              <button onClick={() => handleSelect(application.id)}>Select</button>
              <button onClick={() => handleDelete(application.id)}>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ListEvent;