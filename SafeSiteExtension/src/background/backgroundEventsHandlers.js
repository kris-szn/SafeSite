chrome.runtime.onInstalled.addListener(function() 
{
    PopulateSafeSitesDictionary();
});

chorme.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)
{
    if (changeInfo.url)
    {
        FindDomainInfo(GetDomain(change.url), function(isFound, domainInfo) 
        {
            if (isFound)
            {
                chrome.pageAction.setTitle({tabId: tabId, title: domainInfo.name}, function() {});
                chrome.pageAction.setIcon({tabId: tabId, path: domainInfo.setIcon}, function() {});
                chrome.pageAction.show(tabId);
            }
            else
            {
                chrome.pageAction.hide(tabId);
            }
        });
    }
});

LoadSafeSites();