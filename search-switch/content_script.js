// console.log('------------')
// $('#su').append("追加文本");

const currentSiteLocation = document.location.href;

// 观察器的配置（需要观察什么变动）
const config = {
    attributes: true,
    attributeFilter: ["class"],
    childList: false,
};
// 当观察到变动时执行的回调函数
const callback = function (mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    console.log(`observer:: mutationsList`, mutationsList);
    for (let mutation of mutationsList) {
        if (mutation.type !== "attributes") {
            return;
        }

        // console.log(
        //     "observer:: The " +
        //         mutation.attributeName +
        //         " attribute was modified."
        // );
        const googleBtnInBaiduPage = document.getElementById(
            "search_switch_google_btn"
        );
        if (!googleBtnInBaiduPage) {
            return;
        }
        googleBtnInBaiduPage.style.height = "40px";
    }
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);

const startObserver = (targetNode) => {
    // 以上述配置开始观察目标节点
    observer.observe(targetNode, config);
};

const stopObserver = () => {
    // 停止观察
    observer.disconnect();
};

/** 在百度搜索页增加谷歌搜索按钮 */
const addGoogleBtnToBaiduPage = () => {
    const element = document.getElementById("search_switch_google_btn");
    if (element) {
        return;
    }
    const baiduSearchBtn = document.getElementById("su");
    const wrapperElement = document.getElementById("wrapper");

    if (!baiduSearchBtn) {
        return;
    }

    // 开始观察
    startObserver(wrapperElement);

    baiduSearchBtn.parentNode.style.position = "relative";

    const googleBtn = document.createElement("div");

    googleBtn.id = "search_switch_google_btn";
    googleBtn.style.width = "112px";
    googleBtn.style.height = "40px";
    googleBtn.style.position = "absolute";
    googleBtn.style.border = "2px solid rgb(199 56 47)";
    googleBtn.style.borderRadius = "10px";
    googleBtn.style.backgroundImage =
        "-webkit-linear-gradient(45deg, #4285f4, #ea4335, #fbbc05, #34a853)";
    // googleBtn.style.borderImage = '-webkit-linear-gradient(#4285f4, #ea4335, #fbbc05, #34a853) 20 20';
    googleBtn.style["-webkit-background-clip"] = "text";
    googleBtn.style["-webkit-text-fill-color"] = "transparent";
    // googleBtn.style.backgroundImage = "conic-gradient(#4285f4, #ea4335, #ea4335, #fbbc05, #34a853, #34a853, #4285f4)";
    googleBtn.style.top = "0";
    googleBtn.style.left = "120px";
    googleBtn.style["font-size"] = "17px";
    googleBtn.style["font-weight"] = "400";
    googleBtn.style.display = "flex";
    googleBtn.style["justify-content"] = "center";
    googleBtn.style["align-items"] = "center";
    googleBtn.style["text-align"] = "center";
    googleBtn.style.cursor = "pointer";
    googleBtn.style.boxSizing = "border-box";

    if (!currentSiteLocation.includes("/s?")) {
        console.log("not include");
        googleBtn.style.height = "44px";
    }

    googleBtn.addEventListener("click", function () {
        const keyword = document.getElementById("kw").value;
        console.log(`keyword`, keyword);
        window.open(
            `https://www.google.com.hk/search?safe=strict&q=${keyword}`
        );
        // chrome.runtime.sendMessage(
        //     {
        //         info: keyword,
        //         open: 'google',
        //     },
        // );
    });

    googleBtn.append("Google It");
    if (baiduSearchBtn) {
        baiduSearchBtn.parentNode.append(googleBtn);
    }

    // 快捷键
    // $(document).ready(function () {
    //     document
    //         .querySelector("html")
    //         .addEventListener("keypress", function keydown(e) {
    //             console.log("e", e, e.code === "KeyG", e.ctrlKey, e.shiftKey);
    //             if (e.code === "KeyG" && e.ctrlKey && e.shiftKey) {
    //                 const keyword = document.getElementById("kw").value;
    //                 console.log("keyword", keyword);
    //                 window.open(
    //                     `https://www.google.com.hk/search?safe=strict&q=${keyword}`
    //                 );
    //             }
    //             // if (window.Weibo.disableKeyEvent) {
    //             //   e.stopImmediatePropagation();
    //             // }
    //         });
    // });
};

/** 在谷歌搜索页增加百度搜索按钮 */
const addBaiduBtnToGooglePage = () => {
    let baiduBtn = null;
    let googleSearchBtn = null;

    if (currentSiteLocation.includes("/search")) {
        // 搜索结果页
        googleSearchBtn = $(".Tg7LZd");
        baiduBtn = document.createElement("div");
        baiduBtn.style.height = "44px";
        baiduBtn.style.paddingRight = "15px";
        baiduBtn.style.display = "flex";
        baiduBtn.style.justifyContent = "center";
        baiduBtn.style.alignItems = "center";
        baiduBtn.style.cursor = "pointer";

        const baiduBtnImg = document.createElement("img");
        baiduBtnImg.src = "https://z3.ax1x.com/2021/07/14/We3wTg.png";
        baiduBtnImg.style.height = "50%";

        baiduBtn.append(baiduBtnImg);
    } else {
        //  搜索初始页
        googleSearchBtn = $(".gNO89b");
        baiduBtn = document.createElement("div");
        baiduBtn.append("百度一下");
        baiduBtn.style.display = "inline-block";
        baiduBtn.style.height = "36px";
        baiduBtn.style.minWidth = "54px";
        baiduBtn.style.boxSizing = "border-box";
        baiduBtn.style.borderRadius = "4px";
        baiduBtn.style.userSelect = "none";
        baiduBtn.style.backgroundColor = "#f8f9fa";
        baiduBtn.style.border = "1px solid #f8f9fa";
        baiduBtn.style.fontSize = "14px";
        baiduBtn.style.margin = "11px 4px";
        baiduBtn.style.padding = "0 16px";
        baiduBtn.style.lineHeight = "36px";
        baiduBtn.style.cursor = "pointer";
        $(baiduBtn).on("mouseover", function () {
            $(this).css("boxShadow", "0 1px 1px rgb(0 0 0 / 10%)");
            $(this).css("border", "1px solid #dadce0");
        });
        $(baiduBtn).on("mouseleave", function () {
            $(this).css("boxShadow", "none");
            $(this).css("border", "1px solid #f8f9fa");
        });
    }

    if (!googleSearchBtn || !googleSearchBtn.length) {
        return;
    }
    $(baiduBtn).on("click", "", () => {
        console.log("debug:: click baiduBtn");
        const searchInputBoxArr = $("textarea.gLFyf");
        console.log(`searchInputBoxArr`, searchInputBoxArr);
        if (!searchInputBoxArr || !searchInputBoxArr.length) {
            return;
        }
        const searchInputBox = searchInputBoxArr[0];
        console.log(`searchInputBox`, searchInputBox);
        if (!searchInputBox) {
            return;
        }
        const keyword = searchInputBox.value || "";
        console.log(`baidu click keyword`, keyword);
        // chrome.runtime.sendMessage({
        //     info: keyword,
        //     open: "baidu",
        // });
        window.open(`https://www.baidu.com/s?wd=${keyword}`);
        return;
    });
    $.each(googleSearchBtn, (index, btn) => {
        if (btn) {
            btn.after(baiduBtn);
        } else {
            console.log("btn no parentNode", btn);
        }
    });
};

if (/google.com/.test(currentSiteLocation)) {
    // console.log("谷歌~~~~~~~");
    addBaiduBtnToGooglePage();
} else if (/baidu.com/.test(currentSiteLocation)) {
    // console.log("百度~~~~~~~");
    addGoogleBtnToBaiduPage();
}
