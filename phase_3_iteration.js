Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for(let i = 0; i < this.length - 1; i++) {
            if(this[i] > this[i+1]){
                let int1 = this[i];
                this[i] = this[i+1];
                this[i+1] = int1;
                //this[i],this[i+1] = this[i+1], this[i];
                sorted = false;
            }
        }     
    }
    return this;
}
String.prototype.substrings = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = 1; j < this.length; j++) {
            if(j > i){
                arr.push(this.substr(i,j));
            }
        }
    }
    return arr;
}