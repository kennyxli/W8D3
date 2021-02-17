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

