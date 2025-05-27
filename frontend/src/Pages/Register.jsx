import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import { set } from 'mongoose';
export default function Register() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: 'user',
        birthdate: '',
        bio: '',
        picture: null
    });
    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        
    });
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (formData.firstname=='') {
            newErrors.firstname = 'first name is required';            
            isValid = false;
        }
        if (formData.lastname=='') {
            newErrors.lastname = 'last name is required';
            isValid = false;
        }
        if (formData.email=='') {
            newErrors.email = 'email is required';
            isValid = false;}
        
        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    }
    
    const senderform = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fill in all required fields correctly.');
            return;
        }

        try {
            await axios.post('http://localhost:3000/users/signup', formData);
            toast.success('Successfully registered!');
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                role: 'user',
                birthdate: '',
                bio: '',
                picture: null
            });
            setErrors({});
        } catch (error) {
            console.error('Registration error:', error);
            toast.error('User may already exist.');
        }
    };

    return (
        <form className="ff" onSubmit={senderform}>
            <Toaster />

            <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input
                    value={formData.firstname}
                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                />
                {errors.firstname && <div className="text-danger">{errors.firstname}</div>}
            </div>

            <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input
                    value={formData.lastname}
                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                />
                {errors.lastname && <div className="text-danger">{errors.lastname}</div>}
            </div>

            <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>

            <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                />
                {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>

            <div className="col-md-6">
                <label htmlFor="role" className="form-label">Role</label>
                <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    id="role"
                    name="role"
                    className="form-select"
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div className="col-md-6">
                <label htmlFor="birthdate" className="form-label">Birthdate</label>
                <input
                    value={formData.birthdate}
                    onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                    type="date"
                    className="form-control"
                    id="birthdate"
                    name="birthdate"
                />
            </div>

            <div className="col-12">
                <label htmlFor="bio" className="form-label">Bio</label>
                <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="form-control"
                    id="bio"
                    name="bio"
                    rows="2"
                />
            </div>

            <div className="col-12">
                <label htmlFor="picture" className="form-label">Profile Picture URL</label>
                <input
                    onChange={(e) => setFormData({ ...formData, picture: e.target.files[0] })}
                    type="file"
                    className="form-control"
                    id="picture"
                    name="picture"
                />
            </div>

            <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
        </form>
    );
}