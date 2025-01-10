#!/usr/bin/yarn dev

var kue = require('kue')
  , queue = kue.createQueue();


function sendNotification(phoneNumber, message) {
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
    }

queue.process('push_notification_code', (job, done) => {
  const { phoneNumber, message } = job.data;

  if (!phoneNumber || !message) {
    console.error('Invalid job data: Missing phoneNumber or message');
    return done(new Error('Missing phoneNumber or message'));
  }

  // Call the `sendNotification` function
  sendNotification(phoneNumber, message);

  // Mark the job as done
  done();
});
