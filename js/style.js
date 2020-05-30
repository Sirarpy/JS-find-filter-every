var vals = document.getElementsByTagName('input')
var buttons = document.getElementsByTagName('button')
var res = document.getElementsByTagName('h3')[0]

buttons[2].onclick = function () {
    var arr = []
    for (let i = 0; i<vals.length; i++)
    {
        var eachValue =  vals[i].value
        arr[i] = parseInt(eachValue)
        var matches = arr.filter(el => el === arr[i]);

        if (matches.length >= 2){
            res.innerText = 'There are coincidences'
        }else {
            res.innerText = 'There are no coincidences'
        }
    }
}


buttons[1].onclick = function () {
    var arr = []
    for (let i = 0; i<vals.length; i++)
    {
        var eachValue =  vals[i].value
        arr[i] = parseInt(eachValue)
        console.log(arr)
        var bool = arr.find( (val, i, arr) => 1 === arr[i] )
        if (bool){
            res.innerText = 'At least one of the digits is 1'
        }else {
            res.innerText = '1 digit is not included'
        }
    }
}

buttons[0].onclick = function () {
    var arr = []
    for (let i = 0; i<vals.length; i++)
    {
        var eachValue =  vals[i].value
        arr[i] = parseInt(eachValue)
        console.log(arr)
        var bool = arr.every( (val, i, arr) => 4 === arr[i] )
        if (bool){
            res.innerText = 'All digits are 4 '
        }else {
            res.innerText = 'Not all digits are 4'
        }
    }
}

