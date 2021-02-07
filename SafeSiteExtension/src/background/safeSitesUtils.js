import 
{ 
    categories
} from "/src/background/safeSites.js";

var storageKey = "SaveSitesDictionary";
var safeSitesDictionary = {};
var safeSitesLoaded = false;

export function PopulateSafeSitesDictionary()
{
    console.log("PopulateSafeSitesDictionary: " + categories);
    for (var category in categories)
    {
        console.log("Category: " + category);
        for (var group in category.groups)
        {
            console.log("Group: " + group);
            for (var domain in group.domains)
            {
                console.log("Domain: " + domain);
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
    console.log("Popupated dictionary: " + safeSitesDictionary);
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

export function FindDomainInfo(domain, callback)
{
    if (safeSitesLoaded)
    {
        FindLoadedDomainInfo(domain, callback);
    }
    else
    {
        chrome.storage.local.get(storageKey, function(result)
        {
            HandleStorageResult(result);
            FindLoadedDomainInfo(domain, callback);
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

function FindLoadedDomainInfo(domain, callback)
{
    callback(domain in safeSitesDictionary, safeSitesDictionary[domain]);
}
