let input = '';

const solve = () => {
    let fix =  [];
        fix[0,1,2,3,4,5,6,7,8,9] = -1;
    for (i=0; i<input.length; i++) {
        let x = +input[i];
        if(isNaN(x) == false) {
            fix[x] = 1;
        }
    }
    let sum = 0;
    for (i=0; i<fix.length; i++) {
        if(fix[i] == 1)
        sum++
    }
    if(sum == 10){
        console.log("YES")
    }
    else{
        console.log("NO")
    }
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);