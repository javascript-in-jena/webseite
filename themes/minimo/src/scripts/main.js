import './webpack-public-path'

import '../stylesheets/style'

function onReady() {
  const body = document.body

  let hasEmoji = body.classList.contains('has-emoji')
  if (hasEmoji) {
    let entry = body.querySelector('.entry')
    import(/* webpackChunkName: "twemoji" */ 'twemoji').then(twemoji =>
      twemoji.parse(entry)
    )
  }

  let hasSidebar = body.classList.contains('has-sidebar')
  if (hasSidebar) {
    import(/* webpackChunkName: "sidebar" */ './sidebar').then(
      ({ initSidebar }) => initSidebar()
    )
  }

  let hasComments = body.querySelector('#comment-form')
  if (hasComments) {
    import(/* webpackChunkName: "comments" */ './comments').then(
      ({ initComments }) => initComments()
    )
  }
}

document.addEventListener('DOMContentLoaded', onReady);