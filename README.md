[![Node.js](https://img.shields.io/badge/Node.js-8.9.4-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-5.8.0-blue.svg)](https://www.npmjs.com/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

# Autodesk Forge Token Server

## Overview

This sample is demonstrating how to host a entry point for obtaining Forge access token.

## Requirements

* node.js v8.9.4 or later

<a name="setup"></a>
## Setup

1. Download and install [Node.js](http://nodejs.org/) (that will install npm as well)
2. Download this repo anywhere you want
3. Execute 'npm install', this command will download and install the required node modules automatically for you. <br />
   ```bash
   npm install
   ```

<a name="UseOfTheSample"></a>
## Use of the sample

Before starting the server, you have to set the Forge credentials up.

- Mac OSX/Linux (Terminal)
   ```bash
   export FORGE_CLIENT_ID=<<YOUR_CLIENT_ID_FROM_DEVELOPER_PORTAL>>
   export FORGE_CLIENT_SECRET=<<YOUR_CLIENT_SECRET>>
   ```

- Windows (use **Node.js command line** from Start menu)
   ```bash
   set FORGE_CLIENT_ID=<<YOUR_CLIENT_ID_FROM_DEVELOPER_PORTAL>>
   set FORGE_CLIENT_SECRET=<<YOUR_CLIENT_SECRET>>
   ```


- Windows (use **Powershell** from Start menu)
   ```bash
   $env:FORGE_CLIENT_ID="<<YOUR_CLIENT_ID_FROM_DEVELOPER_PORTAL>>"
   $env:FORGE_CLIENT_SECRET="<<YOUR_CLIENT_SECRET>>"
   ```


Then Run the server <br />
   ```bash
   npm start
   ```

And visit http://127.0.0.1:8090/api/forge/oauth/token to obtain access token <br />

## Docker Build

### Steps to build a Docker image

1. Clone this repo

   ```bash
   git clone https://github.com/yiskang/forge-token-server.git
   ```

2. Build the image
   ```bash
   cd forge-token-server
   docker build -t="forgetokenserver" .
   ```

    This will take a few minutes.

3. Run the image's default command, which should start everything up. The `-p` option forwards the container's port 8090 to port 8090 on the host.

   ```bash
   docker run --name "forge-toekn-srv" -e "NODE_ENV=production" -e "FORGE_CLIENT_ID={YOUR_CLIENT_ID}" -e "FORGE_CLIENT_SECRET={YOUR_CLIENT_SECRET}" -e "FORGE_CALLBACK_URL=http://localhost:8090/api/forge/callback/oauth" -p "8090:8090" -d "forgetokenserver:latest"
   ```

6. Once everything has started up, you should be able to access the webapp via [http://localhost:8090/](http://localhost:8090/) on your host machine.

   ```bash
   open http://localhost:8090/
   ```

You can also login to the image and have a look around:

   ```bash
   docker run -i -t forge-toekn-srv /bin/bash
   ```

### Docker Environment Variables

* `FORGE_CLIENT_ID` - Your Autodesk Forge app Client Id
* `YOUR_CLIENT_SECRET` - Your Autodesk Forge app Client Secret
* `FORGE_CALLBACK_URL` - Your Autodesk Forge app callback url (not used for this repo)

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for full details.

## Written by

Eason Kang <br />
Forge Partner Development <br />
https://developer.autodesk.com/ <br />
https://forge.autodesk.com/blog <br />