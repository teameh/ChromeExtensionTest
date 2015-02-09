'use strict';

this.getData = function(){
    chrome.storage.sync.get(null, _.bind(function(storedData){
        if(typeof storedData['SiteList'] != "undefined"){
            this.siteList = storedData['SiteList'];
            console.log('List of sites was retrieved from storage', this.siteList);
        }else{
            this.siteList = Array();
        }
    }, this));
}

this.addSite = function(site, pw){
    if(typeof this.siteList[site.origin] == "undefined"){
        // add entry
        this.siteList[site.origin] = site.href;
        console.log("this.siteList", this.siteList);

        chrome.storage.sync.set({'SiteList': this.siteList}, function() {
            // Notify that we saved.
            console.log('List of sites was saved');

            var options = {
                type: "basic",
                title: 'Yes!',
                message: 'Another site stored the database',
                iconUrl: 'icon-38.png'
            }

            chrome.notifications.create("test", options);

            // show!
            notification.show();

        });
    }
}

this.getData();

document.addEventListener("input", _.bind(function(e){
    // get and check type
    var input = e.target;
    var inputType = input.getAttribute('type');
    if(typeof inputType == "string" && inputType == "password"){
        console.log("Entering password: ", input.value);
        this.addSite(window.location)
    }
}, this));

console.log('Custom chrome extension contentscript loaded!');