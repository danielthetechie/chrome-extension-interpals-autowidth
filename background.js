function injectScript(tabId) {

    chrome.scripting.executeScript(
        {
            target: {tabId: tabId},
            files: ['inject.js'],
        },
        () => chrome.runtime.lastError
    );

}

// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // check for a URL in the changeInfo parameter (url is only added when it is changed)
    if (changeInfo.url) {
        // calls the inject function
        injectScript (tabId);
    }
});