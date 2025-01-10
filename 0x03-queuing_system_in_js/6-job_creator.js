const kue = require('kue');

const queue = kue.createQueue();

const jobData = {
    phoneNumber: '123-456-7890',
    message: 'This is a sample notification message.',
    }

const job = queue.create('push_notification_code', jobData)
    .save((err) => {
        if (err) {
            console.error('Error creating job:', err);
        } else {
            console.log(`Notification job created: ${job.id}`);
        }
    })

job.on('complete', () => {
    console.log('Notification job completed')
    })

job.on('failed', () => {
  console.error('Notification job failed');
});

module.exports = job;
