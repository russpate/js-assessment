/* jshint ignore: start */

exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return _.reduce(arr, function(sum, el){
      return sum + el
    },0);
  },

  remove : function(arr, item) {
    return _.without(arr, item);
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
     if (arr[i] === item) arr.splice(i, item);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var counter = [];
    for(var i = 0; i < arr.length; ++i){
      if(arr[i] === item)
        counter++;
    }
    return counter;
  },

  duplicates : function(arr) {
    
  },

  square : function(arr) {
    return mapArr = _.map(arr, function(num){
    return Math.pow(num, 2);
    });
  },

  findAllOccurrences : function(arr, target) {

  }
};
