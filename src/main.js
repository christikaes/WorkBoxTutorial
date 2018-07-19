import 'babel-polyfill';
import { setup, registerServiceWorker } from './script.js';
import './styles.css';

console.log("Hello World!")
setup();
registerServiceWorker();