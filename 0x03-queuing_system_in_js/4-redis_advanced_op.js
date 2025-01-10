#!/usr/bin/yarn dev
import {createClient, print} from 'redis';
import { promisify } from 'util';

const client = createClient();

client.on('error', (err) => {
    console.error('Redis client not connected to server: ', err.toString());
    });

client.on('connect', () => {
    console.log('Redis client connected to server');

    // add values to hash using hset
    client.hset('ALX', 'Portland', 50, print);
    client.hset('ALX', 'Seattle', 80, print);
    client.hset('ALX', 'New York', 20, print);
    client.hset('ALX', 'Bogota', 20, print);
    client.hset('ALX', 'Cali', 40, print);
    client.hset('ALX', 'Paris', 2, print);

    // retrieve and display all the hash using hgetall
    client.hgetall('ALX', (err, hash) => {
        if (err) {
            console.error('Error retrieving hash:', err);
            } else {
                console.log(hash);    
            }
         client.quit();
        });
    });
