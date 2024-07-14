function merge(arr){
    let first = arr[0]
    let findLast = arr.length - 1
    let last = arr[(findLast)]

    let findMid = Math.floor(arr.length / 2)
    let arrSliceOne = arr.slice(0, findMid)
    let arrSliceTwo = arr.slice(findMid)
    let arrOneSorted = arrSliceOne.sort((a, b) => a-b)
    let arrTwoSorted = arrSliceTwo.sort((a, b) => a-b)
    let arrOneTwoSorted = arrOneSorted.concat(arrTwoSorted)
    let fullArrSorted = arrOneTwoSorted.sort((a, b) => a-b)
    console.log(fullArrSorted)
}


