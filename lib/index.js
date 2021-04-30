const { join } = require('path')
const { exec } = require('child_process')

const defaultsConfig = {
  cmd: 'git rev-parse --short HEAD',
  html: true,
  active: true // Disable or not module
}

module.exports = function () {
  if (this.options._build === undefined) return

  const config = Object.assign(defaultsConfig, this.options.gitHash)

  this.addTemplate({
    src: join(__dirname, './component.vue'),
    fileName: 'git-hash/component.vue'
  })

  exec(config.cmd, (err, stdout, stderr) => {
    this.addPlugin({
      src: join(__dirname, './plugin.js'),
      ssr: false,
      fileName: 'git-hash/plugin.js',
      options: {
        ...config,
        hash: (err || stderr) ? false : stdout.replace(/(\r\n|\n|\r)/gm, '')
      }
    })
  })
}
