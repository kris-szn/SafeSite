import 
{ 
    FindDomainInfo
} from "/src/background/safeSitesUtils.js";

chrome.runtime.onMessage.addListener(function(request, sender, responseCallback) {
    if (request.messageId === "FindDomainInfo")
    {
        FindDomainInfo(request.hostname, function(isFound, domainInfo) 
        {
            responseCallback(
                {
                    isFound : isFound,
                    domainInfo : domainInfo
                }
            );
        });
    }
});