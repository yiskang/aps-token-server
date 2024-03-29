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

// Autodesk APS configuration
module.exports = {
  // Set environment variables or hard-code here
  credentials: {
    client_id: process.env.APS_CLIENT_ID || '<YOUR_APS_CLIENT_ID>',
    client_secret: process.env.APS_CLIENT_SECRET || '<YOUR_APS_CLIENT_SECRET>'
  },
  scopes: {
    // Required scopes for the server-side application
    internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],
    // Required scope for the client-side viewer
    public: ['viewables:read']
  },
  port: process.env.PORT ||  8090
};