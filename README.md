# ProjektVPN Client

This app will connect your computer to a ProjecktVPN VPN server.

## Developing

The project layout consists of an outer `projektvpn-client-builder` module and an inner `projektvpn-client` moduyle which is the actual distributed NW.js app. This is necessary so that `nw-builder` doesn't try to ship itself as one of the app's dependencies.

### Run as a Developer

```
npm install
cd app && npm install; cd ..
npm start
```

### Build for Distribution

```
npm install
cd app && npm install; cd ..
npm run package
```

Folder structures to be installed will land in `./build`.

