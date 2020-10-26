document.getElementById("login_form").onsubmit = function()
{
    tmp();
    console.log("onsubmit!!?????");
    chrome.storage.sync.set(
        {
            username : document.getElementById("username").value
        }
    )

    return false;
}

chrome.storage.sync.get(["username"], function (items) {
    document.getElementById("username").value = items.username; // -> "string1"

});