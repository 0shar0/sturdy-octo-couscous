
function click(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/vote' ,true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4)return
        if(xhr.status !==200){
            alert('Error : ' + xhr.status + ' : ' + xhr.statusText);
        } else {
            document.getElementById('but').innerText = xhr.responsText
        }
    }
    xhr.send()
}