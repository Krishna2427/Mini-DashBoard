import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/content.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function Content({ isSidebarOpen, modes, setModes }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editableItem, setEditableItem] = useState(null); // Track the item being edited
  const [editedValues, setEditedValues] = useState({ name: '', email: '', phone: '' });

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/users');
      setData(response.data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditableItem(item.id);
    setEditedValues({ name: item.name, email: item.email, phone: item.phone });
  };

  const handleSave = async (id) => {
    try {
      // Update the item on the server (optional)
      await axios.put(`http://localhost:3000/users/${id}`, editedValues);
      
      // Update the item in the local state
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, ...editedValues } : item
        )
      );
      
      setEditableItem(null); // Exit edit mode
    } catch (err) {
      console.error("Error saving data:", err);
      setError("Error saving data");
    }
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`content-container ${modes ? 'content-dark' : 'content-light'} ${isSidebarOpen ? 'content-expanded' : 'content-collapsed'}`}>
      <h2>Users</h2>
      <button onClick={fetchData}>Refresh</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="card-container">
          {data.map((item) => (
            <div className="card" key={item.id}>
              {editableItem === item.id ? (
                <div>
                  <input
                    type="text"
                    value={editedValues.name}
                    className='form-control'
                    onChange={(e) => setEditedValues({ ...editedValues, name: e.target.value })}
                  />
                  <input
                    type="email"
                    value={editedValues.email}
                    className='form-control'
                    onChange={(e) => setEditedValues({ ...editedValues, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    value={editedValues.phone}
                    className='form-control'
                    onChange={(e) => setEditedValues({ ...editedValues, phone: e.target.value })}
                  />
                  <br />
                  <button onClick={() => handleSave(item.id)} className='save'>Save</button>
                  <button onClick={() => setEditableItem(null)} className='bg-danger'>Cancel</button>
                </div>
              ) : (
                <>
                  <h3>{item.name}</h3>
                  <p><strong>Email:</strong> {item.email}</p>
                  <p><strong>Phone:</strong> {item.phone}</p>
                  <div className="button-container">
                    <button onClick={() => handleEdit(item)}><FaEdit /></button>
                    <button className="delete-btn" onClick={() => handleDelete(item.id)}><FaTrashAlt /></button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Content;
