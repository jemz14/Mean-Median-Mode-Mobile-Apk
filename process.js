Framework7.prototype.plugins.math = function (app, params) {
    if (!params) return;

    var stat = function(){
    	'use strict';
    	return {
            mean:function(num){
            	var y = 0;
            	$.each(num,function(a,b){
            		y = y + b;
            	})
            	return Math.round(y/num.length);
            },
           median: function(numbers) {
                var median = 0,
                numsLen = numbers.length;
                numbers.sort();
                if (numsLen % 2 === 0)
                    {
                        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
                } else 
                    { median = numbers[(numsLen - 1) / 2];
            }
                return Math.round(median);
       },  
               /*   mode: function(numbers){
                var modes = [],
                count = [],
                jemz,
                number,
                maxLength = 0;
                for (jemz = 0; jemz < numbers.length; jemz += 1) {
                    number = numbers[jemz];
                    count[number] = (count[number] || 0) + 1;
                    if (count[number] > maxLength) {
                        maxLength = count[number];
                    }
                }
                for (jemz in count) if (count.hasOwnProperty(jemz)) {
                    if (count[jemz] === maxLength) {
                        modes.push(Number(jemz));
                    }

                }
                return modes;*/
                mode : function(arr) {
                return arr.reduce(function(current, item) {
                var val = current.numMapping[item] = (current.numMapping[item] || 0) + 1;
                if (val > current.greatestFreq) {
                    current.greatestFreq = val;
                    current.mode = item;
                }
                    return current;
            }, {mode: null, greatestFreq: -Infinity, numMapping: {}}, arr).mode;

        }

    }
}();

    return {
        hooks: {
            appInit: function () {
                $$("#btn_calc").click(function(){
                    var input = $$("#input_ages").val().split(',');
                    $$.each(input,function(a,b){
                        input[a] = parseInt(input[a]);
                    });
                    $$("#statSolutions").html("<center>Mean: "+stat.mean(input)+"<center><br/>Median: "+stat.median(input)+"<center><br/>Mode: "+stat.mode(input)+"<center><br/>Note: all the results have been round off by the system <br/> Mode Function will show only the first number if the set of array have no equal number");
                });
            }
        }
    };
};

var $$ = Dom7;

var app = new Framework7({
	material:true,
	math:true
});



// 2 classifications of functions
// 1. named function

// 2. anonymous function

// 	appInit: function () {
// 	    console.log ('appInit');
// 	}
