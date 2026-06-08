import mqtt from 'mqtt';

const idsToTest = ['WebClient1', 'WebClient3', 'WebClient', 'web', 'ESP_Cedalo', 'webclient', 'test'];

idsToTest.forEach(id => {
  const client = mqtt.connect('wss://pf-26xt4cmufmfw6kr1zpyq.cedalo.cloud:443/mqtt', {
    username: 'Web2',
    password: 'd',
    clientId: id,
    connectTimeout: 5000
  });
  client.on('connect', () => { console.log('SUCCESS:', id); client.end(); });
  client.on('error', (err) => { console.log('ERROR:', id, err.message); client.end(); });
});
