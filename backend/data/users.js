import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        idAdmin: true
    },
    {
        name: 'Arun Kavale',
        email: 'Arun@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Pranavi kavale',
        email: 'Pranavi@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;