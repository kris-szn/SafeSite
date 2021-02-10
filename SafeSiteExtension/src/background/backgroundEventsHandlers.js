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
                chrome.browserAction.setTitle({tabId: tabId, title: domainInfo.name}, function() {});
                chrome.browserAction.setIcon(
                    {
                        tabId: tabId, 
                        path: {
                            "19": domainInfo.icon + "19.png",
                            "38": domainInfo.icon + "38.png"
                        }
                    }, 
                    function() {});
            }
            else
            {
                chrome.browserAction.setTitle({tabId: tabId, title: chrome.i18n.getMessage("ActionDefaultTitle")}, function() {});
                chrome.browserAction.setIcon(
                    {
                        tabId: tabId, 
                        path: {
                            "19": "/img/category/unknown/default19.png",
                            "38": "/img/category/unknown/default38.png"
                        }
                    }, 
                    function() {});
            }
        });
    }
});

LoadSafeSites();