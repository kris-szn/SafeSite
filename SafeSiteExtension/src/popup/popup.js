(function()
{
    document.getElementById("PageTitle").innerText = chrome.i18n.getMessage("ExtensionName");

    chrome.tabs.query({ active: true, currentWindow : true}, function(tabs){
        chrome.runtime.sendMessage(
            { 
                messageId : "FindDomainInfo", 
                hostname : new URL(tabs[0].url).hostname
            },
            function(response){
                if (response.isFound)
                {
                    document.getElementById("PageIcon").src = "../.." + response.domainInfo.icon + "128.png";                
                    document.getElementById("PageHeader").innerText = response.domainInfo.name;
                    document.getElementById("PageContent").innerText = chrome.i18n.getMessage("PopupContentRecognized");                
                }
                else
                {
                    document.getElementById("PageIcon").src = "../../img/category/unknown/default128.png";                
                    document.getElementById("PageHeader").innerText = chrome.i18n.getMessage("PopupHeaderNotRecognized");
                    document.getElementById("PageContent").innerText = chrome.i18n.getMessage("PopupContentNotRecognized");                
                }
            });
        });
})();

