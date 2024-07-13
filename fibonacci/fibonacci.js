function fibs(n){
    let prev = 0
    let current = 1
    let arr = []
    for (let i = 0; i < n; i++){
        let nextFib = current + prev
        arr.push(nextFib)
        prev = current
        current = nextFib
    }
    console.log({arr})
}

fibs(10)


let arrRec = []
let hasBeenLogged = false

function fibsRec(n){
    if (n == 1 || n == 0) {
        return n
    } else {
        let fibN = fibsRec(n-1) + fibsRec(n-2)
        if (!arrRec.includes(fibN)){
            arrRec.push(fibN)
        }
        if (hasBeenLogged === false) {
            console.log({arrRec})
            hasBeenLogged = true
        }
        return fibN
    }
}

fibsRec(10)