try {
  /**
   * Initialize the extension's user interface
   */
  function init() {
    document
      .getElementById("hostDomain")
      .addEventListener("change", handleChange);
    document
      .getElementById("targetDomain")
      .addEventListener("change", handleChange);
    document
      .getElementById("sharedLocalStorageKey")
      .addEventListener("change", handleChange);
    document.getElementById("reset").addEventListener("click", resetStorage);
  }

  /**
   * Update UI input fields default value from local storage
   * Set input field value in chrome.storage.local so that 
   * content-scripts.js will have hostDomain, targetDomain and sharedLocalStorageKey value
   */
  function updatePopup() {
    let storedValue = { ...localStorage };
    document.getElementById("hostDomain").value = storedValue.hostDomain || "";
    document.getElementById("targetDomain").value = storedValue.targetDomain || "";
    document.getElementById("sharedLocalStorageKey").value = storedValue.sharedLocalStorageKey || "";
    Object.keys(storedValue).map((key) => setData(key, storedValue[key]));
  }

  /**
   * Reset the local storage of the extension
   */
  function resetStorage() {
    localStorage.clear();
    updatePopup();
  }

  /**
   * Update the extension local storage value when input field changes
   * Retain the value even if the extension is closed/refreshed
   * 
   * @param {Event} e - The input field event
   */
  function handleChange(e) {
    localStorage.setItem(e.target.name, e.target.value);
    setData(e.target.name, e.target.value);
  }

  /**
   * Set key-value pair in chrome.storage.local
   * 
   * @param {string} key 
   * @param {string|number} value 
   */
  function setData(key, value) {
    chrome.storage.local.set({ [key]: value }, function (err, res) {});
  }

  /**
   * Get data with given key from chrome.storage.local
   * 
   * @param {string} key - The local storage key stored in chrome.storage.local
   */
  function getData(key) {
    return chrome.storage.local.get([key], function (res) {});
  }

  // Call init and updatePopup functions
  init();
  updatePopup();
} catch (e) {
  console.log("error occured", e);
}
