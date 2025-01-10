#!/usr/bin/yarn dev
import { createClient } from 'redis';
import { promisify } from 'util';

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

const getAsync = promisify(client.get).bind(client);

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, (err, reply) => {
        if (err) {
            console.log(`Error setting ${schoolName}: ${err}`)
            } else {
            console.log(`Set ${schoolName} to ${value}`);    
            }
        });
    }

async function displaySchoolValue(schoolName) {
    try {
        const value = await getAsync(schoolName);
        console.log(`${schoolName} value: ${value}`);
    } catch(err) {
        console.error(`Error retrieving ${schoolName}: ${err}`);
    }
}
    
