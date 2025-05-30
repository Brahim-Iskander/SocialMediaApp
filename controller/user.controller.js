import user from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const signup = async (req, res) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10);
        const newUsers = await user.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: newPassword,
            role: req.body.role || 'user',
            bio: req.body.bio || '',
            picture: req.body.picture || '',
            birthdate: req.body.birthdate || null
        });
        res.status(201).json(newUsers);


    } catch (error) {
        console.error('Error fetching users:');    }
}
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await user.findOne({ email});
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }else {
            try{
            const token = jwt.sign({ email}, process.env.prvivatekey
                
            )
            res.status(200).json({ token, user: existingUser });
        }   
        catch(error){
            console.error('Error generating token:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }


    }}
    catch (error) {
        console.error('signin user');    }
}

