import mqtt from 'mqtt';
const test = (c) => {
  const client = mqtt.connect('wss://pf-26xt4cmufmfw6kr1zpyq.cedalo.cloud:443/mqtt', { username: 'Web2', password: 'd', clientId: c, connectTimeout: 5000 });
  client.on('connect', () => { console.log('SUCCESS:', c); client.end(); });
  client.on('error', (err) => { console.log('ERROR:', c, err.message); client.end(); });
};
test('');
test(undefined);
test('Web3');
