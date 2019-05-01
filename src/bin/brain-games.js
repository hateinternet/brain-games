#!/usr/bin/env node

import { showGreeting, getName, sayHi } from '..';

showGreeting();
const username = getName();
sayHi(username);
