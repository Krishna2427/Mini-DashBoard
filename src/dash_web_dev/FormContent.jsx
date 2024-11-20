import React, { useState } from 'react';
import axios from 'axios';
import '../styles/formContent.css';


function FormContent({ toggleModal }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newData = { name, email, phone };
        try {
            await axios.post('http://localhost:3000/users', newData);
            // const existingData = JSON.parse(localStorage.getItem('users')) || [];

            // existingData.push(newData);

            // localStorage.setItem('users', JSON.stringify(existingData));

            toggleModal(); 
        } catch (error) {
            console.error("Error adding data", error);
        }
    };
    return (
        <div className="modal">
            <div className="modal-content">
                <h2></h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) =>setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                    <input type="text" placeholder="Phone" value={phone} onChange={(e) =>setPhone(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={toggleModal}>Close</button>
            </div>
        </div>
    );
}

export default FormContent;