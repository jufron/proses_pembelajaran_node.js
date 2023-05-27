import { Console } from 'node:console';
import fs from 'node:fs';


const logFile = fs.createWriteStream('coba.txt');

const logger = new Console({
  stdout : logFile,
  stderr : logFile
});

const person = {
  firstName : 'jufron',
  lastName : 'tamo ama'
};

logger.log('hello world');
logger.error('ups');
logger.table(person);