#!/usr/bin/yarn dev
import { createClient } from 'redis';

const client = createClient();

client.on('error', function(err) {
    console.error('Redis client not connected to the server: ', err)
    })

client.on('connect', () => {
    console.log('Redis client connected to the server');

    client.subscribe("ALXchannel", (err) => {
        if (err) {
            console.error('Failed to subscribe to ALXchannel:', err.toString());
        } else {
            console.log('Subscribed to ALXchannel');
        }
        })
    })

// Listen for messages on the subscribed channel
client.on('message', (channel, message) => {
    console.log(`Received message on ${channel}: ${message}`);

    // Handle KILL_SERVER message
    if (message === 'KILL_SERVER') {
        console.log('KILL_SERVER received. Unsubscribing and quitting...');
        client.unsubscribe();
        client.quit();
    }
});
