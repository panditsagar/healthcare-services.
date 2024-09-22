import React, { useState } from 'react';
import UpdateServiceForm from './UpdateServiceForm';

const ServiceList = ({ services, updateService, deleteService }) => {
  const [isEditing, setIsEditing] = useState(null);

  return (
    <div>
      <h2>Available Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {isEditing === service.id ? (
              <UpdateServiceForm
                service={service}
                updateService={updateService}
                setIsEditing={setIsEditing}
              />
            ) : (
              <>
                <div>
                  <strong>{service.name}</strong> - {service.description} - ${service.price}
                </div>
                <div>
                  <button className="edit-btn" onClick={() => setIsEditing(service.id)}>Edit</button>
                  <button onClick={() => deleteService(service.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
