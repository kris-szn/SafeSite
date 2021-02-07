import 
{ 
    PopulateSafeSitesDictionary, 
    FindDomainInfo,
    LoadSafeSites
} from "/src/background/safeSitesUtils.js";

chrome.runtime.onInstalled.addListener(function() 
{
    PopulateSafeSitesDictionary();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)
{
    if (changeInfo.url)
    {
        console.log("Looking for domain: " + new URL(changeInfo.url).hostname + " (url: " + changeInfo.url + ")");
        FindDomainInfo(new URL(changeInfo.url).hostname, function(isFound, domainInfo) 
        {
            if (isFound)
            {
                console.log("Domain found: " + domainInfo);
                chrome.pageAction.setTitle({tabId: tabId, title: domainInfo.name}, function() {});
                chrome.pageAction.setIcon(
                    {
                        tabId: tabId, 
                        path: {
                            "19": domainInfo.icon + "19.png",
                            "38": domainInfo.icon + "38.png"
                        }
                    }, 
                    function() {});
                chrome.pageAction.show(tabId);
            }
            else
            {
                console.log("Domain not found.");
                chrome.pageAction.hide(tabId);
            }
        });
    }
});

LoadSafeSites();