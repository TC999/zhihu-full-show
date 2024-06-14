chrome.tabs.onUpdated.addListener((tabId: number, changeInfo: chrome.tabs.TabChangeInfo, tab: chrome.tabs.Tab) => {
  if (changeInfo.status === 'complete' && tab.url && /https:\/\/www.zhihu.com\/appview\//.test(tab.url)) {
    console.log(`Updated tab with ID ${tabId}, executing script in tab with URL ${tab.url}`);
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['newPageContent.js']
    }).then(() => {
      console.log('Script injected successfully');
    }).catch(error => {
      console.error('Script injection failed: ', error);
    });
  }
});