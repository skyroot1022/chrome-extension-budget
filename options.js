$(function(){
    chrome.storage.sync.get('limit', function(budget){
        $('#limit').val(budget.limit);
    })

    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if(limit){
            chrome.storage.sync.set({'limit': limit}, function(){
                close();
            });
        }
    });

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0}, function(){
            var notifOptions = {
                        type: 'basic',
                        iconUrl: 'favicon.ico',
                        title: 'Reset Total!',
                        message: "Total has been reset to 0!"
                    };
                    chrome.notifications.create('limitNotif', notifOptions);
        });
    })
});