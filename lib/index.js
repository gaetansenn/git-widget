const { join } = require('path')
const { exec } = require('child_process')

const GIT_URL = 'git config --get remote.origin.url'
const HASH = 'git rev-parse HEAD'
const SHORT_HASH = 'git rev-parse --short HEAD'
const defaultsConfig = {
  html: true,
  disabled: false
}

function getUrl (baseUrl, hash) {
  if (baseUrl.includes('bitbucket')) return `${baseUrl}/commits/${hash}`

  return `${baseUrl}/commit/${hash}`
}

function execCmd (cmd) {
  return new Promise((resolve) => {
    exec(cmd, (err, stdout, stderr) => {
      resolve(err || stderr ? false : stdout.replace(/(\r\n|\n|\r)/gm, ''))
    })
  })
}

async function getBaseUrl () {
  const url = await execCmd(GIT_URL)

  return url ? url.replace('.git', '').replace(':', '/').replace('git@', 'https://') : false
}

module.exports = async function () {
  if (this.options._build === undefined || this.options.gitWidget.disabled) return

  const config = Object.assign(defaultsConfig, this.options.gitWidget)

  this.addTemplate({
    src: join(__dirname, './component.vue'),
    fileName: 'git-widget/component.vue'
  })

  const baseUrl = await getBaseUrl()
  const hash = {
    long: await execCmd(HASH),
    short: await execCmd(SHORT_HASH)
  }

  this.addPlugin({
    src: join(__dirname, './plugin.js'),
    ssr: false,
    fileName: 'git-widget/plugin.js',
    options: {
      ...config,
      hash: JSON.stringify(hash),
      url: getUrl(baseUrl, hash.long)
    }
  })
}
