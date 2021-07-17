let arr = prompt(`Nhập vào 1 mảng chứa tên cách nhau bằng dấu ","`);
function allLongestStrings(){
    let arrName = arr.split(",")
    let maxlength = 0;
    let arrLongestStr = []
    for (let i = 0; i < arrName.length; i++) {
        if (maxlength < arrName[i].length) {
            maxlength = arrName[i].length;
 }
}
    arrName.forEach(element => { 
        if(element.length == maxlength){
            arrLongestStr.push(element)
        }
    });
    alert(arrLongestStr)
}

allLongestStrings()