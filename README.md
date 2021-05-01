# git-widget
Widget for nuxt to display git info build

![alt text](https://github.com/gaetansenn/git-widget/blob/master/preview.png?raw=true)

## Installation

Add package `yarn add @dewib/git-widget`

Add the module to the `modules` of your `nuxt.config.js`

```js
export default {
  modules: ['@dewib/git-widget']
}
```

## Configure

```js
export default {
  gitWidget: {
    html: true, // Display tooltip (default: true)
    disabled: false // ex: disabled for production (default: false)
  }
}
```

## Usage 
This module inject a plugin that expose the `$dewib.gitWidget.hash` hash and `$dewib.gitWidget.url` url inside Nuxt context.

```html
<template>
  <a :href="$dewib.gitWidget.url" target="_blank">Build hash: {{ $dewib.gitWidget.hash.short }}</a>
</template>
```

