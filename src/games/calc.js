import _ from 'lodash';
import {greeting} from '../index.js';

const theTask = 'What is the result of the expression?';
greeting(theTask);

const randomOperation = _.sample(['+', '-', '*']);

