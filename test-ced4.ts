import mqtt from 'mqtt';
const test = (u, p, c) => {
  const client = mqtt.connect('wss://pf-26xt4cmufmfw6kr1zpyq.cedalo.cloud:443/mqtt', { username: u, password: p, clientId: c, connectTimeout: 3000 });
  client.on('connect', () => { console.log('SUCCESS:', u, c); client.end(); });
  client.on('error', (err) => { console.log('ERROR:', u, c, err.message); client.end(); });
};
test('Web2', 'd', 'Web2');
test('Web2', 'd', 'WebClient_Cedalo');
test('Web2', 'd', 'WebClient2_Web');
