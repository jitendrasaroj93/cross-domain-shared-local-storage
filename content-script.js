/**
 * @async
 * @function getData
 * @param {string} key - local storage key stored in chrome.storage.local
 * @returns {Promise} returns a Promise that resolves with the value of the key in chrome.storage.local
 * 
 * Get data with given key from chrome.storage.local
 */
 async function getData(key) {
  let result = await chrome.storage.local.get([key]);
  return result[key];
}

/**
 * @async
 * @function setData
 * @param {string} key - local storage key to be stored in chrome.storage.local
 * @param {string | number} value - value to be stored in chrome.storage.local under the given key
 * @returns {Promise} returns a Promise that resolves with the set operation in chrome.storage.local
 * 
 * Set key value pair in chrome.storage.local
 */
async function setData(key, value) {
  return chrome.storage.local.set({ [key]: value }, function (err, res) {});
}

(async function () {
  try {
    let hostDomain = await getData("hostDomain");
    let targetDomain = await getData("targetDomain");
    let sharedLocalStorageKey = await getData("sharedLocalStorageKey");

    /**
     * set local storage value from host domain to extension local storage
     * if host domain is in the list of host domains or host domains is "*"
     * and shared local storage key is either "*" or in the list of shared local storage keys
     */
    if (
      (hostDomain && hostDomain.split(",").includes(location.hostname)) ||
      hostDomain === "*"
    ) {
      if (sharedLocalStorageKey === "*") {
        setData("fullLocalStorage", JSON.stringify(localStorage));
      } else {
        sharedLocalStorageKey.split(",").map((key) => {
          setData(key, localStorage.getItem(key));
        });
      }
    }

    /**
     * set local storage value to target domain from extension local storage
     * if target domain is in the list of target domains or target domains is "*"
     * and shared local storage key is either "*" or in the list of shared local storage keys
     */
    if (
      (targetDomain && targetDomain.split(",").includes(location.hostname)) ||
      targetDomain === "*"
    ) {
      if (sharedLocalStorageKey === "*") {
        let fullLocalStorage = await getData("fullLocalStorage");
        fullLocalStorage = JSON.parse(await getData("fullLocalStorage"));
        Object.keys(fullLocalStorage).map((key) =>
          localStorage.setItem(key, fullLocalStorage[key])
        );
      } else {
        sharedLocalStorageKey.split(",").map((key) =>
          getData(key).then((res) => {
            localStorage.setItem(key, res);
          })
        );
      }
    }
  } catch (e) {}
})();
