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
        FindDomainInfo(new URL(changeInfo.url).hostname, function(isFound, domainInfo) 
        {
            if (isFound)
            {
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
                chrome.pageAction.show(tabId, function() {});
            }
            else
            {
                chrome.pageAction.hide(tabId, function() {});
            }
        });
    }
});

LoadSafeSites();