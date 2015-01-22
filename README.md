[![](https://img.shields.io/gratipay/Martin%20Rubinsztein.svg)](https://gratipay.com/Martin%20Rubinsztein/)

npm-zepto
=========

An automatic CommonJS Zepto wrapper

Current zepto version: 1.1.6

See [zeptojs.com](http://zeptojs.com/) for an extended introduction and documentation.

Zepto.js and **npm-zepto** are licensed under the terms of the MIT License.

## Installing

```bash
$ npm install npm-zepto
```

Then you can include it using CommonJS as you pleased.

```javascript
var zepto = require('npm-zepto');
```

> We have desided compiling **npm-zepto** as a CommonJS type library instead a UMD.
> Nonetheless if you need a AMD library you can clone the repo an run the amd_build script in order to buil a RequiredJS compatible Zepto library.

## Advanced users

Maybe you need a local or custom build of zepto, right? Ok, just clone this repo and build your **npm-zepto** yourself.

### Setup

On your favorite git interface make the following:

```bash
$ git clone git@github.com:Nytramr/npm-zepto.git
$ cd npm-zepto
$ git submodule update --init
```

Now you have in your computer a copy of **npm-zepto**.

### Default build

```bash
$ npm install
```

### Using the local copy of npm-zepto

```bash
$ npm link
```
> Depending on your npm configuration, it is possible that you must run `npm link` with sudo

### Build a specific version of zepto

In order to build a specific version of zepto you have to change the zepto submodule commit. For instance, this command secuence compiles **npm-zepto** with zepto@1.1.3

```bash
$ cd npm-zepto/zepto
$ git checkout v1.1.3
$ cd ..
$ npm install
```

### Build a custom version of zepto

In order to build a custom version of zepto like it is explained [here](https://github.com/madrobby/zepto/tree/v1.1.3#building) you must edit the `script/build` bash file. An explample bellow.

```bash
#!/usr/bin/env sh

cd zepto
npm install
MODULES="zepto event ajax form ie detect fx fx_methods assets data" npm run-script dist
cd ..

if [ -f index.js ]; then
  rm index.js;
fi

cat zepto/dist/zepto.js _index.js > index.js
```


