
function validSolution(solution) {

    function transpose(a) {
        return Object.keys(a[0]).map(function(c) {
            return a.map(function(r) { return r[c]; });
        });
    }

    for (let i = 0; i < 9; i++) {
        let unique = new Set(solution[i]);      
        if ((unique.size) != 9)
            return false;
    }

    solution = transpose(solution); 

    for (let i = 0; i < 9; i++) {
        let unique = new Set(solution[i]);      
        if ((unique.size) != 9)
            return false;
    }

    return true;
}



alert(validSolution([
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]
])); // => true
    
alert(validSolution([
[5, 3, 4, 6, 7, 8, 9, 1, 2], 
[6, 7, 2, 1, 9, 0, 3, 4, 8],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]
])); // => false

  
