var storageKey = "SaveSitesDictionary";
var safeSitesDictionary = {};
var safeSitesLoaded = false;

function PopulateSafeSitesDictionary()
{
    for (var category in categories)
    {
        for (var group in category.groups)
        {
            for (var domain in group.domains)
            {
                safeSitesDictionary[domain] = 
                {
                    domain = domain,
                    name = group.name,
                    category = category.name,
                    icon = category.icon
                };
            }
        }
    }
    safeSitesLoaded = true;
    chrome.storage.local.set({storageKey: safeSitesDictionary}, function() {});
}

function Private_HandleStorageResult(result)
{
    if (storageKey in result)
    {
        safeSitesDictionary = result[storageKey];
        safeSitesLoaded = true;
    }
    else
    {
        PopulateSafeSitesDictionary();
    }
}

function LoadSafeSites()
{
    if (!safeSitesLoaded)
    {
        chrome.storage.local.get(storageKey, function(result)
        {
            Private_HandleStorageResult(result);
        })
    }
}

function Private_FindLoadedDomainInfo(domain, callback)
{
    callback(domain in safeSitesDictionary, safeSitesDictionary[domain]);
}

function FindDomainInfo(domain, callback)
{
    if (safeSitesLoaded)
    {
        Private_FindLoadedDomainInfo(domain, callback);
    }
    else
    {
        chrome.storage.local.get(storageKey, function(result)
        {
            Private_HandleStorageResult(result);
            Private_FindLoadedDomainInfo(domain, callback);
        })
    }
}