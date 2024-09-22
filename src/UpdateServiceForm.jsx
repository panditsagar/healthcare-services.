import React, { useState } from 'react';

const UpdateServiceForm = ({ service, updateService, setIsEditing }) => {
  const [updatedService, setUpdatedService] = useState(service);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateService(updatedService);
    setIsEditing(null);
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={updatedService.name}
        onChange={(e) => setUpdatedService({ ...updatedService, name: e.target.value })}
      />
      <input
        type="text"
        value={updatedService.description}
        onChange={(e) => setUpdatedService({ ...updatedService, description: e.target.value })}
      />
      <input
        type="number"
        value={updatedService.price}
        onChange={(e) => setUpdatedService({ ...updatedService, price: e.target.value })}
      />
      <button type="submit">Update</button>
      <button onClick={() => setIsEditing(null)}>Cancel</button>
    </form>
  );
};

export default UpdateServiceForm;
