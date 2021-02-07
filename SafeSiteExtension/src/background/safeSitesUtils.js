import 
{ 
    categories
} from "/src/background/safeSites.js";

var storageKey = "SaveSitesDictionary";
var safeSitesDictionary = {};
var safeSitesLoaded = false;

export function PopulateSafeSitesDictionary()
{
    for (var categoryIndex = 0; categoryIndex < categories.length; categoryIndex++)
    {
        var category = categories[categoryIndex];
        for (var groupIndex = 0; groupIndex < category.groups.length; groupIndex++)
        {
            var group = category.groups[groupIndex];
            for (var domainIndex = 0; domainIndex < group.domains.length; domainIndex++)
            {
                var domain = group.domains[domainIndex];
                safeSitesDictionary[domain] = 
                {
                    domain: domain,
                    name: group.name,
                    category: category.name,
                    icon: category.icon
                };
            }
        }
    }
    safeSitesLoaded = true;
    chrome.storage.local.set({storageKey: safeSitesDictionary}, function() {});
}

export function LoadSafeSites()
{
    if (!safeSitesLoaded)
    {
        chrome.storage.local.get(storageKey, function(result)
        {
            HandleStorageResult(result);
        })
    }
}

export function FindDomainInfo(hostname, callback)
{
    if (safeSitesLoaded)
    {
        FindLoadedDomainInfo(hostname, callback);
    }
    else
    {
        chrome.storage.local.get(storageKey, function(result)
        {
            HandleStorageResult(result);
            FindLoadedDomainInfo(hostname, callback);
        })
    }
}


function HandleStorageResult(result)
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

function FindLoadedDomainInfo(hostname, callback)
{
    while (!(hostname in safeSitesDictionary) && hostname.indexOf(".") >= 0)
    {
        hostname = hostname.substring(hostname.indexOf(".") + 1);
    }
    callback(hostname in safeSitesDictionary, safeSitesDictionary[hostname]);
}
