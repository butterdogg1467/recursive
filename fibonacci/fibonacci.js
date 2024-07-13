// function fibs(n){
//     let prev = 0
//     let current = 1
//     let arr = []
//     for (let i = 0; i < n; i++){
//         let nextFib = current + prev
//         arr.push(nextFib)
//         console.log(arr)
//         prev = current
//         current = nextFib
//     }
// }

// fibs(10)


let arrRec = []

function fibsRec(n){
    if (n <= 1) {
        console.log(n)
        return n
    } else {
        let fibN = fibsRec(n-1) + fibsRec(n-2)
        arrRec.push(fibN)
        console.log(arrRec)
        return fibN
    }
}

fibsRec(8)