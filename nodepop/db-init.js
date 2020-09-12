'use strict';

require('dotenv').config();

const readline = require('readline');
const conn = require('./lib/mongooseConnector');
const Advertisement = require('./models/Advertisement');

conn.once('open', async () => {
  try {

    const respuesta = await askUser('Do you want to restore Database? You may get fired if say yes... (no)');

    if (respuesta.toLowerCase() !== 'yes') {
      console.log('Ok, you won\'t get fired... Process aborted.');
      return process.exit(0);
    }

    // Initialize Ads
    await initAdvertisements();
  
    // Close connection
    conn.close();

  } catch (err) {
    console.log('Error:', err);
    process.exit(1);
  }

});

async function initAdvertisements() {  
  console.log('Empty Advertisements collection...');
  await Advertisement.deleteMany();
  
  console.log('Loading initial Advertisements...');
  const result = await Advertisement.insertMany([
    { name: 'Hardly used shocks', 
      description: 'Sellign this shocks as I do not know how to wash them. I only used for a 3h walk', 
      price: 1.95, 
      author: 'Smith', 
      selling: true, 
      tags: ['lifestyle', 'work', 'mobile'] },
    { name: 'Secon-hand hand', 
      description: 'I was born with three hands, I am selling one, I hardly used it so it is as good as new.', 
      price: 450.00, 
      author: 'Charles', 
      selling: true, 
      tags: ['lifestyle'] },
    { name: 'Big Red Car', 
      description: 'I need a car. Should be red and big.' , 
      price: 4600.00, 
      author: 'Vany', 
      selling: false, 
      tags: ['motor', 'lifestyle'] },
    { name: 'Tambourine Clasess', 
      description: 'I can teach you how to play the tambourine in a few weeks of hard and thrilling work. Price per hour.', 
      price: 12.00, 
      author: 'Paras', 
      selling: true, 
      tags: ['lifestyle'] },
    { name: 'Keyboard', 
      description: 'Selling this keyboard as it is useless for me. Cumputer keeps asking to \'Press ANY key\' but this keyboard has no ANY key. Only buy if you do not need ANY key.', 
      price: 9.50,
      author: 'Camile',
      selling: true, 
      tags: ['mobile'] }, 
    { name: 'Avocado Half',  
      description: 'Everyone talking about avocados. "They are so delicious" they said... I tasted half but It has awful taste... Selling the other half. Avocado pit included.', 
      price: 1.32, 
      author: 'Ivory', 
      selling: true, 
      tags: ['lifestyle'] }
  ]);
  console.log(`${result.length} advertisements have been created.`);
}

function askUser(textoPregunta) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(textoPregunta, answer => {
      rl.close();
      resolve(answer); 
    });
  });
}