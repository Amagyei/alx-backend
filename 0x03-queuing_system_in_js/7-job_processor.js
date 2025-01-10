const kue = require('kue');

// Create a Kue queue
const queue = kue.createQueue();

// Blacklisted phone numbers
const blacklistedNumbers = ['4153518780', '4153518781'];

// Define the `sendNotification` function
function sendNotification(phoneNumber, message, job, done) {
  job.progress(0, 100); // Track progress 0%

  if (blacklistedNumbers.includes(phoneNumber)) {
    return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  }

  job.progress(50, 100); // Track progress 50%
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

  done(); // Mark the job as done
}

// Process jobs in the 'push_notification_code_2' queue
queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done);
});
