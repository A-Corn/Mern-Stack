const express = require('express');
const app = express();
const PORT = 8000;

const { faker } = require('@faker-js/faker');

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`)
});

const newUser = () => ({
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
});

const newCompany = () => ({
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
});

app.get('/api/users/new', (req, res)=>{
    const user = newUser()
    res.json(user)
});

app.get('/api/companies/new', (req, res)=> {
    const company = newCompany()
    res.json(company)
});

app.get('/api/user/company', (rew, res)=> {
    const theUser = newUser();
    const theCompany = newCompany();
    const userCompany = {
        user: theUser,
        company: theCompany,
    };
    res.json(userCompany);
});
    // hi