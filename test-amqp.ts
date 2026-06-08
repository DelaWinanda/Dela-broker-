import mqtt from 'mqtt';

const test = (url, u, p, c) => {
  const client = mqtt.connect(url, { username: u, password: p, clientId: c, connectTimeout: 5000 });
  client.on('connect', () => { console.log('SUCCESS:', url); client.end(); });
  client.on('error', (err) => { console.log('ERROR:', url, err.message); client.end(); });
  client.on('close', () => { console.log('CLOSE:', url); });
};

const c_id = 'ESP_CloudAMQP_' + Math.random().toString(16).substr(2,6);
test('wss://kingfisher.lmq.cloudamqp.com:443/ws', 'azfrfvzw:azfrfvzw', 'HMxpFwhwM9i7bDo2bp8XoBipnq2ZcmxQ', c_id);
test('wss://kingfisher.lmq.cloudamqp.com/ws', 'azfrfvzw:azfrfvzw', 'HMxpFwhwM9i7bDo2bp8XoBipnq2ZcmxQ', c_id);
test('wss://kingfisher.lmq.cloudamqp.com/mqtt', 'azfrfvzw:azfrfvzw', 'HMxpFwhwM9i7bDo2bp8XoBipnq2ZcmxQ', c_id);

test('wss://kingfisher.lmq.cloudamqp.com:15675/ws', 'azfrfvzw:azfrfvzw', 'HMxpFwhwM9i7bDo2bp8XoBipnq2ZcmxQ', c_id);
