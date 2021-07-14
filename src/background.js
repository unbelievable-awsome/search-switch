// chrome.commands.onCommand.addListener(function(command) {
//   chrome.tabs.getSelected( function(tab){
//     console.log('tab', tab.url)
//     if (tab.url.includes('www.baidu.com')) {
//       console.log('baidu!!!')
//     }
//   });
// })

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    // sendResponse('我收到了你的来信')
    console.log("接收了来自 content.js的消息", req);
    if (req.open === "google") {
        createGoogleTab(req.info);
    } else if (req.open === "baidu") {
        createBaiduTab(req.info);
    }
});

function createGoogleTab(keyword) {
    chrome.tabs.create({
        url: `https://www.google.com.hk/search?safe=strict&q=${keyword}`,
    });
}

function createBaiduTab(keyword) {
    chrome.tabs.create({
        url: `https://www.baidu.com/s?wd=${keyword}`,
    });
}
