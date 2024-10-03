# Runtimes

Adobe I/O Runtime supports Node.js versions 20, 18, 16, and 14. Node v18 is the default image and the one used to create pre-warm containers. We encourage you to always update your actions to the latest version in order to take advantage of the pre-warm containers feature.

The following npm modules are pre-installed (if your action uses any of these modules, you don&rsquo;t have to package them together with action code):

### Node.js V22.6.0

    "express": "4.18.2",
    "openwhisk": "3.21.7",
    "body-parser": "1.20.2",
    "redis": "4.6.9",
    "node-fetch": "3.3.2",
    "dnscache": "1.0.2",
    "prom-client": "14.2.0"

### Node.js v20.7.0

    "express": "4.18.2",
    "openwhisk": "3.21.7",
    "body-parser": "1.20.2",
    "redis": "4.6.9",
    "node-fetch": "3.3.2",
    "dnscache": "1.0.2",
    "prom-client": "14.2.0"

### Node.js v18.14.2

    "express": "4.18.2",
    "openwhisk": "3.21.7",
    "body-parser": "1.20.2",
    "redis": "4.6.5",
    "node-fetch": "3.3.1",
    "dnscache": "1.0.2",
    "prom-client": "14.2.0"

### Node.js v16.17.0

    "express": "4.18.1",
    "openwhisk": "3.21.6",
    "body-parser": "1.20.0",
    "redis": "4.1.0",
    "node-fetch": "3.2.4",
    "dnscache": "1.0.2",
    "prom-client": "13.2.0"

### Node.js v14.20.0

    "express": "4.17.1",
    "openwhisk": "3.21.6",
    "body-parser": "1.19.0",
    "cls-hooked": "4.2.2",
    "redis": "3.1.2",
    "node-fetch": "2.6.7",
    "dnscache": "1.0.2",
    "prom-client": "12.0.0"


This is how you can specify explicitly a kind:
```
wsk action create actionName fromFile.js --kind nodejs:20 
```
or
```
wsk action create actionName fromFile.js --kind nodejs:16 
```
These images are on Docker Hub:
1. [Node 22](https://hub.docker.com/r/adobeapiplatform/adobe-action-nodejs-v22/tags)
2. [Node 20](https://hub.docker.com/r/adobeapiplatform/adobe-action-nodejs-v20/tags)
3. [Node 18](https://hub.docker.com/r/adobeapiplatform/adobe-action-nodejs-v18/tags)
4. [Node 16](https://hub.docker.com/r/adobeapiplatform/adobe-action-nodejs-v16/tags)
5. [Node 14](https://hub.docker.com/r/adobeapiplatform/adobe-action-nodejs-v14/tags)
