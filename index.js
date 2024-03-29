/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Developer Advocacy and Support
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

const express = require('express');
const cors = require('cors');
const config = require('./config');

const server = express();

server.use(cors());
server.use('/api/oauth', require('./routes/oauth'));
server.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode).json(err);
});

let serverDaemon = server.listen(config.port, '0.0.0.0', () => {
  console.log('Token server running on port %d', config.port);
});

const startGracefulShutdown = () => {
  console.log('Starting shutdown of token server...');
  serverDaemon.close(() => {
    console.log('Token server shut down.');
    process.exit(0);
  });
};

process.on('SIGTERM', startGracefulShutdown);
process.on('SIGINT', startGracefulShutdown);