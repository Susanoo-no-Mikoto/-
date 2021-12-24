const alfRuCap = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
const alfRuLow = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
const alfMarks = [' ', '!','~','`','@','"','#','№','$',';','%','^',':','&','?','*','(',')','-','_','=','+','[',']','{','}','|','/','<','>',',','.',''];

let go = document.getElementById('sub');
go.addEventListener("click", function(){
    let txt = document.forms['form'].elements['inp'].value,
        key = Number(document.forms['form'].elements['key'].value),
        TF = document.forms['form'].elements['check'].value,
        newarr = [],
        txtNew;
    qq(txt,key,TF,newarr,txtNew);
})



function qq(txt,key,TF,newarr,txtNew){
    if (TF == 1){
        let arr = txt.split('');
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < alfRuCap.length && alfMarks.length && alfRuLow.length; j++) {
                if (arr[i] === alfRuCap[j]) {
                    let a = alfRuCap[j + key];
                    if (a == undefined) {
                        newarr.push(alfRuCap[j + key - alfRuCap.length]);
                    }
                    if (a != undefined) {
                        newarr.push(alfRuCap[j + key]);
                    }       
                }
                if (arr[i] === alfRuLow[j]) {
                    let a = alfRuLow[j + key];
                    if (a == undefined) {
                        newarr.push(alfRuLow[j + key - alfRuLow.length]);
                    }
                    if (a != undefined) {
                        newarr.push(alfRuLow[j + key]);
                    }
                }
                if (arr[i] === alfMarks[j]) {
                    newarr.push(alfMarks[j]);
                }
            }
        }
        txtNew = newarr.join(''); 
        document.getElementById('txtNew').innerHTML = txtNew;
    }
    if (TF == 0){
        let arr = txt.split('');
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < alfRuCap.length && alfRuLow.length && alfMarks.length; j++) {
                if (arr[i] === alfRuCap[j]) {
                    let a = alfRuCap[j - key];
                    if (a == undefined) {
                        newarr.push(alfRuCap[j - key + alfRuCap.length]);
                    } 
                    if (a != undefined) {
                        newarr.push(alfRuCap[j - key]);
                    } 
                }
                if (arr[i] === alfRuLow[j]) {
                    let a = alfRuLow[j - key];
                    if (a == undefined) {
                        newarr.push(alfRuLow[j - key + alfRuLow.length]);
                    } 
                    if (a != undefined) {
                        newarr.push(alfRuLow[j - key]);
                    } 
                }
                if (arr[i] === alfMarks[j]) {
                    newarr.push(alfMarks[j]);
                }
            }
        }
        txtNew = newarr.join('');
        document.getElementById('txtNew').innerHTML = txtNew;
    }
}