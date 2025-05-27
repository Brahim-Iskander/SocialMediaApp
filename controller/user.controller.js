import user from '../models/user.model.js';
import toast, { Toaster } from 'react-hot-toast';


export const signup = async (req, res) => {

    

    try {
        const newUsers = await user.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role || 'user',
            bio: req.body.bio || '',
            picture: req.body.picture || '',
            birthdate: req.body.birthdate || null
        });
        res.status(201).json(newUsers);

    } catch (error) {
        console.error('Error fetching users:');    }
}
