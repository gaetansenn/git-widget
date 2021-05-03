import Vue from 'vue'
import Component from './component.vue'

export default function (ctx, inject) {
  // TODO: Add to @dewib/core
  ctx.$dewib = ctx.$dewib || {}
  ctx.$dewib.gitWidget = {
    hash: JSON.parse('<%= options.hash %>'),
    url: '<%= options.url %>'
  }

  if (<%= options.html %>) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({
      data () {
        return {
          config: ctx.$dewib.gitWidget
        }
      }
    }).$mount()

    window.onNuxtReady((nuxt) => {
      nuxt.$el.appendChild(vm.$el)
    })
  }

  inject('dewib', ctx.$dewib)
}
