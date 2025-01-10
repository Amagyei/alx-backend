#!/usr/bin/yarn dev
import { createClient } from 'redis';
const client = createClient();

client.on('error', (err) => {
    console.log('Redis Client not connected to the server: ', err.toString);
});

client.on('connect', () => {
    console.log('Redis client connected to the server');

    displaySchoolValue('Holberton');
    setNewSchool('HolbertonSanFrancisco', '100');
    displaySchoolValue('HolbertonSanFrancisco');
});

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, (err, reply) => {
        if (err) {
            console.log(`Error setting ${schoolName}: ${err}`)
            } else {
            console.log(`Set ${schoolName} to ${value}`);    
            }
        });
    }

function displaySchoolValue(schoolName) {
    client.get(schoolName,(err, value) => {
        if (err) {
            console.log(`Error retrieving  ${schoolName}: ${err}`);
            } else {
            console.log(`${schoolName} value: ${value}`);
            }
        });
    }
