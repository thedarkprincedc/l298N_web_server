#! /usr/bin/env node
'use strict';

const createAppServer = require(__dirname + '/../lib/server.js');

createAppServer(3003, true);