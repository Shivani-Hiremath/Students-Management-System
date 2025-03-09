import React, { useState } from "react";
import { registerAdmin } from "../api";

const RegisterAdmin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerAdmin(name, email, password);
            setMessage("Admin Registered Successfully");
        } catch (err) {
            setMessage("Error registering admin");
        }
    };

    return (
        <div>
            <h2>Register Admin</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register Admin</button>
            </form>
        </div>
    );
};

export default RegisterAdmin;
