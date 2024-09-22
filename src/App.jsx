import React, { useState } from 'react';
import ServiceList from './ServiceList';
import AddServiceForm from './AddServiceForm';
import './styles.css';  // Import the CSS

function App() {
  const [services, setServices] = useState([
    { id: 1, name: "General Checkup", description: "A basic health checkup", price: 50 },
    { id: 2, name: "Dental Cleaning", description: "Cleaning and whitening of teeth", price: 75 },
  ]);

  const addService = (newService) => {
    setServices([...services, { ...newService, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map((service) =>
      service.id === updatedService.id ? updatedService : service
    );
    setServices(updatedServices);
  };

  const deleteService = (id) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
  };

  return (
    <div className="container">
      <h1>Healthcare Services Management</h1>
      <AddServiceForm addService={addService} />
      <ServiceList
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />
    </div>
  );
}

export default App;

