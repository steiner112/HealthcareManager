import React, { useState } from 'react';
import '../Forms/Forms.css';

export default function ServiceForm() {
  const [services, setServices] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', description: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Handle input changes for name, description, and price
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  }

  // Add or edit a task (service)
  function addOrEditTask(event) {
    event.preventDefault(); // Prevent form submission

    if (!newTask.name.trim() || !newTask.description.trim() || !newTask.price) return;

    if (isEditing) {
      const updatedServices = services.map((service, index) =>
        index === currentIndex ? newTask : service
      );
      setServices(updatedServices);
      setIsEditing(false); // Reset editing mode
    } else {
      setServices([...services, newTask]);
    }

    // Reset form after adding or editing
    setNewTask({ name: '', description: '', price: '' });
    setCurrentIndex(null);
  }

  // Delete a task (service)
  function deleteTask(index) {
    setServices(services.filter((_, i) => i !== index));
  }

  // Edit a task (service)
  function editTask(index) {
    setIsEditing(true);
    setCurrentIndex(index);
    setNewTask(services[index]);
  }

  return (
    <>
    <main>
      {/* <div id='main1'> */}
       <div className='BXX1'>
          <form id="addForm">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Service name"
              value={newTask.name}
              onChange={handleInputChange}
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Service description"
              value={newTask.description}
              onChange={handleInputChange}
            />

            <label htmlFor="prize">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Service price"
              value={newTask.price}
              onChange={handleInputChange}
            />

            <button className="button-55" onClick={addOrEditTask} role="button">
              {isEditing ? 'Edit Service' : 'Add Service'}
            </button>
          </form>
          </div>
          <div className='BXX1'>

          <ul id='List'>
            <img src="\src\assets\list.png" alt="" />
            {services.map((service, index) => (
              <li key={index}>
                <span className="Text">
                <p>Name</p>  {service.name} <p>description</p> {service.description} <p>Rupee</p> {service.price}
                </span>
                <div id='btnBox'>
                <img
                src='/src/assets/edit.svg'
                  className="editBTN"
                  onClick={() => editTask(index)}
                   alt='edit'
                  
                />
                <img
                src='/src/assets/delete.svg'
                  className="deleteBTN"
                  onClick={() => deleteTask(index)}
                  alt='delete'
                />
                </div>

                
              </li>
            ))}
          </ul>
        
      </div>
      {/* </div> */}
      </main>
    </>
  );
}
