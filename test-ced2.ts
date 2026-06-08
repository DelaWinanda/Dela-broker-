import mqtt from 'mqtt';
const test = (u, p, c) => {
  const client = mqtt.connect('wss://pf-26xt4cmufmfw6kr1zpyq.cedalo.cloud:443/mqtt', { username: u, password: p, clientId: c, connectTimeout: 3000 });
  client.on('connect', () => { console.log('SUCCESS:', u, c); client.end(); });
  client.on('error', (err) => { console.log('ERROR:', u, c, err.message); client.end(); });
};
test('Web1', 'd', 'WebClient1');
test('Web3', 'd', 'WebClient3');
