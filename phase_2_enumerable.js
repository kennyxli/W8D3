let callback = function(num){
    return num + 1;
}
Array.prototype.myEach = function(callback)
{   
    let arr = [];
    for(let i = 0; i < this.length; i++)
    {
        arr.push(callback(this[i]));
    }
    console.log(arr);
}