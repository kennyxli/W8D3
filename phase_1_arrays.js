Array.prototype.uniq = function(){
    let arr = [];

    for (let i = 0; i < this.length; i++) {
        if (arr.includes(this[i])){

            continue;
        }
            arr.push(this[i]); 
    }
    console.log(arr);
}

Array.prototype.twosum = function () {
    let arr = [];
    for (let i = 0; i < this.length - 1; i++){
        for (let j = i+1; j < this.length; j++ ){
            if (this[i] + this[j] === 0){
                arr.push([i,j]);
            }
        }
    }
    console.log(arr);
}
//[[1,3,5],[2,4,6]]
//[[1,2],[3,4],[5,6]]

//[[1,3,5],[2,4,6],[0,0,0]]
//[[1,2,0],[3,4,0],[5,6,0]]
//nested loop 
Array.prototype.transpose = function()
{
    let arr = [];
    for(let i = 0; i < this[0].length; i++) 
    {   
        let subarr = [];
        for(let j = 0; j < this.length; j++)
        {
            subarr.push(this[j][i]);
        }
        arr.push(subarr);
    }
    console.log(arr);
}

