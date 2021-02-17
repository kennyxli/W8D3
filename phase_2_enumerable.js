let callback1 = function(ele) {
    console.log(ele + 1);
};

Array.prototype.myEach = function(callback) {   
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

Array.prototype.myMap = function (callback) {
    let arr = [];
    
    this.myEach(function(ele) {
        arr.push(callback(ele))
    }) 
    return arr
    console.log(arr);
};



Array.prototype.myReduce = function(callback, initialvalue = 0){
    
    this.myEach(function(ele){
        initialvalue = callback(initialvalue, ele)
    });
    return initialvalue
    console.log(initialvalue)
};



function add(num){console.log(num)}
[1, 2, 3].myEach(function add(num) { console.log(num) })

def my_map(&prc)
    arr =[]
    self.each do |ele|
        arr << prc.call(ele)
    end
end