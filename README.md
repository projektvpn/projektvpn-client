# ProjektVPN Client

This app will connect your computer to a ProjeckTVN VPN server.

## Run as a Developer

```
npm install
node_modules/nw-builder/bin/nwbuild -r .
```

## Build for Distribution

```
npm install
node_modules/nw-builder/bin/nwbuild -p osx64,win64,linux64 .
```

Binaries will land in `./build`
