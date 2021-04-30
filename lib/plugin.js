import Vue from 'vue'
import Component from './component.vue'

export default function (ctx, inject) {
  <% if (options.disabled) return %>

  // TODO: Add to @dewib/core
  ctx.$dewib = ctx.$dewib || {}
  ctx.$dewib.gitHash = '<%= options.hash %>'

  if (<%= options.html %>) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({
      data () {
        return {
          hash: ctx.$dewib.gitHash
        }
      }
    }).$mount()

    window.onNuxtReady((nuxt) => {
      nuxt.$el.appendChild(vm.$el)
    })
  }

  inject('dewib', ctx.$dewib)
}
