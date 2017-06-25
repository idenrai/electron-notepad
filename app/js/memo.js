/**
 * memo.js
 **/
// テキスト保存
function saveTxt(){
  var ntText = document.getElementById("ntText").value;
  var ntBlobText = new Blob([ntText], {type:'text/plain'});
  var nmSaveFile = document.getElementById("nmSaveFile").value;
  var saveLink = document.createElement("a");
  saveLink.download = (nmSaveFile === null || nmSaveFile == "") ? "memo.txt" : nmSaveFile + ".txt";
  saveLink.innerHTML = "Download File";
  saveLink.href = window.webkitURL.createObjectURL(ntBlobText);
  saveLink.click();
}

// テキストロード
function loadTxt(){
  var nmLoadFile = document.getElementById("nmLoadFile").files[0];
  var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent){
    var ntLoadText = fileLoadedEvent.target.result;
    document.getElementById("ntText").value = ntLoadText;
  };
  fileReader.readAsText(nmLoadFile, "UTF-8");
}
