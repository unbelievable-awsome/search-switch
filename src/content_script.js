// console.log('------------')
// $('#su').append("追加文本");

const searchBtn = document.getElementById("su");
if (searchBtn) {
    searchBtn.parentNode.style.position = "relative";
    searchBtn.style.borderRadius = "0";
    searchBtn.style.height = "40px";
}
// const keyword = document.getElementById('kw').value;
// alert(keyword);

const googleBtn = document.createElement("div");
if (googleBtn) {
    googleBtn.style.width = "112px";
    googleBtn.style.height = "36px";
    googleBtn.style.position = "absolute";
    googleBtn.style.border = "2px solid rgb(199 56 47)";
    googleBtn.style.borderRadius = "0";
    googleBtn.style.backgroundImage =
      "-webkit-linear-gradient(45deg, #4285f4, #ea4335, #fbbc05, #34a853)";
    // googleBtn.style.borderImage = '-webkit-linear-gradient(#4285f4, #ea4335, #fbbc05, #34a853) 20 20';
    googleBtn.style["-webkit-background-clip"] = "text";
    googleBtn.style["-webkit-text-fill-color"] = "transparent";
    // googleBtn.style.backgroundImage = "conic-gradient(#4285f4, #ea4335, #ea4335, #fbbc05, #34a853, #34a853, #4285f4)";
    googleBtn.style.top = "0";
    googleBtn.style.left = "114px";
    googleBtn.style["font-size"] = "17px";
    googleBtn.style["font-weight"] = "400";
    googleBtn.style.display = "flex";
    googleBtn.style["justify-content"] = "center";
    googleBtn.style["align-items"] = "center";
    googleBtn.style["text-align"] = "center";
    googleBtn.style.cursor = "pointer";
}


const bd1 = document.querySelector(".s_ipt_wr");
if (bd1) {
    bd1.style.borderRadius = "0";
}

const searchInput = document.getElementById("kw");
if (searchInput) {
    searchInput.style.borderRadius = "0";
    searchInput.style.padding = "10px 16px";
}

// const form = document.getElementById('form');
// searchBtn.style.position = "relative";
// searchBtn.style.left = "-60px";

googleBtn.addEventListener("click", function () {
  const keyword = document.getElementById("kw").value;
  chrome.runtime.sendMessage(
    {
      info: keyword,
    },
    (res) => {
      // alert(res)
    }
  );
});

googleBtn.append("Google It");
searchBtn.parentNode.append(googleBtn);


$(document).ready(function () {
  document
    .querySelector("html")
    .addEventListener("keypress", function keydown(e) {
      console.log("e", e, e.code === "KeyG", e.ctrlKey, e.shiftKey);
      if (e.code === "KeyG" && e.ctrlKey && e.shiftKey) {
        const keyword = document.getElementById("kw").value;
        console.log("keyword", keyword);
        window.open(`https://www.google.com.hk/search?safe=strict&q=${keyword}`)
      }
      // if (window.Weibo.disableKeyEvent) {
      //   e.stopImmediatePropagation();
      // }
    });
});
