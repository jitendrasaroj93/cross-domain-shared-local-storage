//setup background service workers or event listeners
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.type) {
    case "getData":
      sendResponse({ data: localStorage.getItem(request.key) });
      break;
    case "setData":
      localStorage.setItem(request.key, request.value);
      sendResponse({ success: true });
      break;
    default:
      break;
  }
});
