﻿function solve(args) {
    var nums = args.match(/-?\d+/g).map(Number);
    var result = 1;
    var current = 0;
    var evenRule = nums[0] % 2 == 0;
    for (var i = 0; i < nums.length; i++) {
        var isEven = nums[i] % 2 == 0;
        if (evenRule == isEven) {
            current++;
        } else if (nums[i] == 0) {
            current++;
        } else {
            current = 1;
            evenRule = isEven;
        }
        result = Math.max(current, result);
        evenRule = !evenRule;
    }
    return result;
}
console.log(solve('(3) (22) (-18) (55) (44) (3) (21)'));
console.log(solve('  ( 2 )  ( 33 ) (1) (4)   (  -1  ) '));
console.log(solve('(2) (2) (2)(2) (2) (2)(2) (2) (2)(2) (2) (2)(2) (2) (2)(2) (2) (2)(2) (2) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0)(2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0)(2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0)(2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0)(2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (2) (  33) (44) (55  ) (0  ) (  77) (88) ( 0 )   (0) (  11  )(22)(0)(0)(0)(2  ) (0) (4) (1) (2) (0) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)'));
console.log(solve('(1) (0) (0) (0) (0) (0) (0) (1)'));