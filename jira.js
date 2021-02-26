chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    alert(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.greeting == "hello")
      sendResponse({ farewell: "goodbye" });
  }
);
