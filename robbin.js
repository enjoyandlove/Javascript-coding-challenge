const solution = (A) => {
    const leng = A.length;
    const totalS = Math.pow(2, leng);
    let solution = 200;
    for (let i = 0; i < totalS; i++) {
        let kk=i, pp = [];
        for (let j = 1; j <= leng; j++) {
            if (kk == 0) pp.unshift(0);
            else {
                pp.unshift(kk % 2);
                kk /= 2;
            }
        }
        let multi = pp.reduce((result, e, index) => {
                e = parseInt(e);
                e = e ? e : -1;
                return result += e * A[index];
            }, 0);
        multi = Math.abs(multi);
        solution = solution > multi ? multi : solution;
        if (solution == 0) break;
    }
    return solution;
}
console.log(solution([-100, 30, 25, 67]))