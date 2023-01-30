# cross-domain-shared-local-storage
This Chrome extension allows you to share local storage data across multiple domains. It helps you to store and retrieve data from the local storage of a website and use it on another website.

```Shared Local Storage for Chrome Extension```
- Shared Local Storage is a Chrome extension that allows you to share local storage data between domains.

``Features``

- Store local storage data from a source domain to the extension's local storage.
- Retrieve local storage data from the extension's local storage and set it to a target domain.
- Option to store all local storage data or specific keys only.
  
``Usage``

1. Install the extension from the Chrome Web Store.
2. Go to the options page of the extension and configure the source domain, target domain, and the local storage keys you want to share.
3. Visit the source domain and the local storage data will be stored in the extension's local storage.
4. Visit the target domain and the local storage data will be retrieved from the extension's local storage and set in the target domain's local storage.
   
``Options``
- Host Domain: The domain from which you want to store local storage data. You can specify multiple domains separated by a comma. - Use * to store local storage data from any domain.
- Target Domain: The domain to which you want to set the local storage data. You can specify multiple domains separated by a comma. Use * to set local storage data to any domain.
-Shared Local Storage Key: The key of the local storage data you want to share. You can specify multiple keys separated by a comma. Use * to share all local storage data.

``Requirements``

- Google Chrome browser.
- The extension requires access to the storage API of the browser.
  
`Support`

If you encounter any issues or have any questions, please feel free to reach out to me. 


```To work in your local, follow these steps:```

- Open Google Chrome and go to the Chrome Extensions page by typing "chrome://extensions" in the address bar.

- Enable developer mode by clicking the toggle switch in the top right corner of the page.

- Click the "Load unpacked" button and select the directory containing the source code of the extension.

- The extension will be loaded and appear in the list of installed extensions.

- To test the functionality of the extension, visit the relevant website and check if it works as expected.

- If the extension includes background pages or popup windows, you can access these pages from the Chrome extensions page by clicking the "background page" or "popup" links for the extension.

- You can also use the Chrome DevTools to debug the extension by clicking the "Inspect views: background page" or "Inspect views: popup" links for the extension.

Note: Make sure that the website you are testing the extension on is not in the list of blocked sites for the extension in the manifest file.