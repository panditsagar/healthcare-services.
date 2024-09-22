import React, { useState } from 'react';

const AddServiceForm = ({ addService }) => {
  const [service, setService] = useState({ name: "", description: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      alert("Please fill out all fields");
      return;
    }
    addService(service);
    setService({ name: "", description: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Service</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={service.name}
        onChange={(e) => setService({ ...service, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={service.description}
        onChange={(e) => setService({ ...service, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={service.price}
        onChange={(e) => setService({ ...service, price: e.target.value })}
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddServiceForm;
