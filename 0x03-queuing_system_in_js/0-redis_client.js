#!/usr/bin/yarn dev
import { createClient } from 'redis';
const client = createClient();
client.on('error', err => console.log('Redis Client not connected to the server: ', err));
client.on('connect', ()=> console.log('Redis client connected to the server'));

