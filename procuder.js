var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.Client(),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),

    payloads = [
        { topic: 'test', messages: 'hi', partition: 0 },
        { topic: 'test', messages: ['hello', 'world', km] }
    ];


producer.on('ready', () => {
    producer.send(payloads, (err, data) => {
        console.log(data);
    });
});

producer.on('error', err => {
  console.log('error: ' + err)
})
