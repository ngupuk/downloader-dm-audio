let refresh = document.getElementById('refresh')
let out = document.getElementById('out')

refresh.addEventListener('click', (e) => {
  const options = {
    active: true,
    currentWindow: true
  }

  chrome.tabs.query(options, (tabs) => {
    const data = {
      todo: 'getAllSource'
    }

    const response = (res) => {
      if (res) out.innerHTML = 'Tombol Download sudah dibuat'
    }

    chrome.tabs.sendMessage(tabs[0].id, data, response)
  })
})
