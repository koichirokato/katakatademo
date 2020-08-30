$(function(){
    $("#save").on("click", function(){
        saveSetting($('#checkkata').prop('checked'),$('#checkpochi').prop('checked'),$('#checkbyun').prop('checked'))
    })
});

function setData(){
    chrome.storage.sync.get(
        ["kata","pochi","byun"],
        function(items) {
            if(items.kata==true) $('#checkkata').prop('checked', true);
            else $('#checkkata').prop('checked', false);
            if(items.pochi==true) $('#checkpochi').prop('checked', true);
            else $('#checkpochi').prop('checked', false);
            if(items.byun==true) $('#checkbyun').prop('checked', true);
            else $('#checkbyun').prop('checked', false);
        }
    );
}
function saveSetting(kata,pochi,byun){
    var setting ={
        "kata" : kata,
        "pochi": pochi,
        "byun" : byun
    }
    chrome.storage.sync.set(setting, function(){});
}
window.onload = function(){
    console.log("on load");
    setData();
}