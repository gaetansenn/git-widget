# dw-git-hash
Display last build hash version inside your website

![alt text](https://github.com/gaetansenn/dw-git-hash/blob/master/preview.png?raw=true)

## Installation

Add package `yarn add @dewib/dw-git-hash`

Add the module to the `modules` of your `nuxt.config.js`

```js
export default {
  modules: ['@dewib/dw-git-hash']
}
```

## Configure

```js
export default {
  gitHash: {
    html: true, // Display tooltip (default: false)
    disabled: false // ex: disabled for production (default: false)
  }
}
```

## Usage 
This module inject a plugin that expose the `$dewib.gitHash` hash inside Nuxt context.

```html
<template>
  Build hash: {{ $dewib.gitHash }}
</template>
```

