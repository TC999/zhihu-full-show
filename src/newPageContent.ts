console.log('Executing in new window');

(function() {
  // 使用 MutationObserver 观察 DOM 变化
  const observer = new MutationObserver((mutations, obs) => {
    const richTextElement = document.querySelector('.RichText.ztext.PostIndex-richText') as HTMLElement;
    if (richTextElement) {
      // 一旦找到 RichText 元素，则停止观察
      obs.disconnect();
      console.log('RichText element found in new window');

      const catalogElements = richTextElement.querySelectorAll('.Catalog');
      catalogElements.forEach(catalog => {
        console.log('Catalog element removed');
        catalog.remove();
      });

      const processedContent = richTextElement.innerHTML;

      chrome.runtime.sendMessage({
        type: 'COPY_RICH_TEXT',
        content: processedContent
      }, (response) => {
        console.log('Message sent, response:', response);
      });
    } else {
      console.error('RichText element not found in new window');
    }
  });

  // 配置观察目标和类型
  observer.observe(document, {
    childList: true,
    subtree: true
  });
})();