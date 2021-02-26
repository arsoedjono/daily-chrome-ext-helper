$('#jira-xray-exec-keys')[0].onclick = () => {
  // Array.from(document.querySelectorAll("tr.sc-fjmCvl.dwfyVy > td:nth-child(4) > a")).map(el => el.innerText).join("\n")
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, (response) => {
      console.log(response.farewell);
    });
  });
};
