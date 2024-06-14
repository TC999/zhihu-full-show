const BASE_URL = "https://zhuanlan.zhihu.com";
const VIEW_URL = "http://www.zhihu.com/appview";

function handleClickEvent() {
  document.querySelectorAll('.Button.ContentItem-expandButton').forEach(button => {
    button.addEventListener('click', () => {
      console.log('Expand button clicked');
      const currentUrl = window.location.href;
      const newUrl = currentUrl.replace(BASE_URL, VIEW_URL);
      console.log(`Opening new URL: ${newUrl}`);
      window.open(newUrl, '_blank');
    });
  });
}

chrome.runtime.onMessage.addListener((message: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
  console.log('Message received:', message);
  if (message.type === 'COPY_RICH_TEXT' && message.content) {
    console.log('Received content from new window');
    const originalRichTextElement = document.querySelector('.RichText.ztext.Post-RichText') as HTMLElement;
    if (originalRichTextElement) {
      console.log('Replacing original RichText content');
      originalRichTextElement.innerHTML = message.content;
    }
    
    const elementsToRemove = document.querySelectorAll('.css-12cv0pi');
    elementsToRemove.forEach(element => {
      console.log('Removing element with class css-12cv0pi');
      element.remove();
    });

    sendResponse({ status: 'success' });
  } else {
    console.error('No content received or message type mismatch');
    sendResponse({ status: 'failure' });
  }
  return true;  // 确保发送响应
});

function isMatchingUrl() {
  return window.location.href.startsWith(BASE_URL) || window.location.href.startsWith(VIEW_URL);
}

if (isMatchingUrl()) {
  console.log('URL matched, initializing...');
  handleClickEvent();
} else {
  console.log('URL did not match');
}