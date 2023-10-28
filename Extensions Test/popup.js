document.getElementById("changeColor").addEventListener("click", function () {
    // Change the background color of the current tab's body to red.
    chrome.scripting.executeScript({
        target: { tabId: chrome.tabs.id },
        function: () => {
            document.body.style.backgroundColor = "red";
        }
    });
});