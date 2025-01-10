#!/usr/bin/yarn dev
import { createClient } from 'redis';

const client = createClient();

// Event listener for errors
client.on('error', function (err) {
    console.error('Redis client not connected to the server: ', err.toString());
});

client.on('connect', () => {
    console.log('Redis client connected to the server');
    })

function publishMessage(message, time) {
    setTimeout(() => {
        console.log(`About to send ${message}`)
        client.publish('ALXchannel', message, (err, reply) => {
            if (err) {
                console.error(`Failed to publish message: ${err}`)
                }
            });
        }, time)
    }
publishMessage("ALX Student #1 starts course", 100);
publishMessage("ALX Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("ALX Student #3 starts course", 400);
