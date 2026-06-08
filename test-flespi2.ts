import mqtt from 'mqtt';
const client = mqtt.connect('wss://mqtt.flespi.io:443', {
  username: 'UJyFksta5S1kfEMf95YVPQIn0X2o9u4OFvWvVeAMuGEORyCzS5elmDywO9xhS5ay',
  password: '',
  clientId: 'ESP32Flespi001_' + Math.random().toString(16).substr(2,6),
  connectTimeout: 5000
});
client.on('connect', () => {
  client.subscribe('sensor/suhu');
  client.publish('sensor/suhu', '25.5');
});
client.on('message', (t, m) => {
  console.log(t, m.toString());
  client.end();
})
