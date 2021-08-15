function uncoverElements() {
  const classesToZap = [
    // Docs Explore widget:
    ".docs-explore-widget-button",
    // Half-circle expander for the side applet bar in Docs:
    ".companion-collapser-button-container",
    // Gmail's name for the above:
    ".brC-dA-I-Jw",
    // Gmail's new Meet widget:
    ".akc",
  ]

  for (let c of classesToZap) {
    const e = document.querySelector(c)
    if (e) {
      e.style.display = "none"
    }
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: uncoverElements
  })
})
