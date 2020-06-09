chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  if (req.todo == 'getAllSource') {
    const data = [...document.getElementsByTagName('source')].map((i) => i.src)
    sendRes({
      todo: 'showAllSource',
      data
    })
    const elements = [...document.getElementsByTagName('source')]
    let ke = 0
    for (let item of elements) {
      ke++
      let btn = document.createElement('a')
      btn.innerText = `Download audio ke-${ke}`
      btn.href = item.src
      btn.download = `audio_ke-${ke}.m4a`
      btn.target = `_blank`
      item.parentElement.parentElement.before(btn)
    }
  }
})
