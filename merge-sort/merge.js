// function merge(arr){
//     let first = arr[0]
//     let findLast = arr.length - 1
//     let last = arr[(findLast)]

//     let findMid = Math.floor(arr.length / 2)
//     let arrSliceOne = arr.slice(0, findMid)
//     let arrSliceTwo = arr.slice(findMid)
//     let arrOneSorted = arrSliceOne.sort((a, b) => a-b)
//     let arrTwoSorted = arrSliceTwo.sort((a, b) => a-b)
//     let arrOneTwoSorted = arrOneSorted.concat(arrTwoSorted)
//     let fullArrSorted = arrOneTwoSorted.sort((a, b) => a-b)
//     console.log(fullArrSorted)
// }

function mergeSort(arr){
    if (arr.length <= 1) {
        return arr
    } else {
        let findMid = Math.floor(arr.length / 2)
        let a1 = arr.slice(0, findMid)
        let a2 = arr.slice(findMid)
        let b1 = mergeSort(a1) 
        let b2 = mergeSort(a2) 
        return merge(b1, b2)
        
    }

}



function merge(arr1, arr2){
    let result = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length) { 
        if (arr1[i] < arr2[k]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[k])
            k++
        }
    }

    while (i < arr1.length) { 
        result.push(arr1[i])
        i++
    }

    while (k < arr2.length) { 
        result.push(arr2[k])
        k++
    }

    console.log(result)
    return result

}
