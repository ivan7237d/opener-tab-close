'use strict';

chrome.browserAction.onClicked.addListener(currentTab => {
  chrome.tabs.remove(currentTab.openerTabId);
});
