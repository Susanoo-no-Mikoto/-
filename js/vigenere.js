const alfRuCap = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
const alfRuLow = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
const alfMarks = [' ', '!','~','`','@','"','#','№','$',';','%','^',':','&','?','*','(',')','-','_','=','+','[',']','{','}','|','/','<','>',',','.',''];

function code(txt,codeword,codewordNew) {
    console.log(txt);
    console.log(codeword);
    let p,
        o,
        txtNew;
    for (let i = 0; i < txt.length; i++) {
        if (txt.length > codewordNew.length) {
            codewordNew = codewordNew + codeword;
        } 
    }
    codewordNew = codewordNew.split('');
    for (let i = 0; i < txt.length; i++) {
        for (let j = 0; j < alfMarks.length; j++) {
            if (txt[i] == alfMarks[j]) {
                codewordNew.splice(i, 0, alfMarks[j]);
            }
        }
    }
    console.log(codewordNew);
    qq(txt,codewordNew,p,o,txtNew);
}



let go = document.getElementById('sub');
go.addEventListener('click', function(){
    let txt = document.forms['form'].elements['inp'].value,
        codeword = document.forms['form'].elements['inp2'].value,
        codewordNew = [];
    code(txt,codeword,codewordNew);
})


function qq(txt,codewordNew,p,o,txtNew) {
    let res = [];
    console.log(codewordNew);
    for (let i = 0; i < txt.length; i++) {
        p = txt[i];
        o = codewordNew[i];
        txtSearch(p);
        arrSearch(o);
        for (let j = 0; j < alfRuCap.length && alfRuLow.length && alfMarks.length; j++) {
            if (p == alfRuCap[j]) {
                if (alfRuCap[q + w] == undefined) {
                    res.push(alfRuCap[q + w - alfRuCap.length]);
                }else{
                    res.push(alfRuCap[q + w]);
                }
            }
            if (p == alfRuLow[j]) {
                if (alfRuLow[q + w] == undefined) {
                    res.push(alfRuLow[q + w - alfRuLow.length]);
                }else{
                    res.push(alfRuLow[q + w]);
                }
            }
            if (p == alfMarks[j]) {
                res.push(alfMarks[j]);
            }   
        }   
    }
    txtNew = res.join('');
    document.getElementById('txtNew').innerHTML = txtNew;
}

function txtSearch(p) {
    q = 0;
    for (let j = 0; j < alfRuLow.length && alfRuCap.length; j++) {
        if (p == alfRuLow[j]) {
            q = q + j; 
        } 
        if (p == alfRuCap[j]) {
            q = q + j; 
        } 
    }
}

function arrSearch(o) {
    w = 0;
    for (let j = 0; j < alfRuLow.length && alfRuCap.length && alfMarks.length; j++) {
        if (o == alfRuLow[j]) {
            w = w + j;  
        }
        if (o == alfRuCap[j]) {
            w = w + j;  
        }
    }
}



