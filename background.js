chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (/^https:\/\/www.youtube/.test(current_tab_info.url)) {
            // chrome.tabs.insertCSS(null, {file: './style.css'}); For future UI editings
            chrome.tabs.executeScript(null, {file: './foreground.js'}, ()=> console.log("i injected"));
        }
    })
})

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (/^https:\/\/www.youtube/.test(tab.url)) {
        // chrome.tabs.insertCSS(null, {file: './style.css'}); For future UI editings
        chrome.tabs.executeScript(null, {file: './foreground.js'}, ()=> console.log("i injected"));
    }
 });