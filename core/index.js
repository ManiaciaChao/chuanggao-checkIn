const fs = require('fs');
const path = require('path');
const checkIn = require('./checkIn');

const PARTICIPANTS = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../config/participants.json')));

checkIn(PARTICIPANTS);