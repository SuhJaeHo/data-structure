function MergeSort(arr, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
        let midIndex = parseInt((leftIndex + rightIndex) / 2);
        MergeSort(arr, leftIndex, midIndex);
        MergeSort(arr, midIndex + 1, rightIndex);
        Merge(arr, leftIndex, midIndex, rightIndex);
    }
}

function Merge(arr, leftIndex, midIndex, rightIndex) {
    let leftAreaIndex = leftIndex;
    let rightAreaIndex = midIndex + 1;

    const tempArr = [];
    tempArr.length = rightAreaIndex + 1;
    tempArr.fill(0, 0, rightIndex + 1);

    let tempArrIndex = leftIndex;
    while (leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) {
        if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
            tempArr[tempArrIndex] = arr[leftAreaIndex++];
        } else {
            tempArr[tempArrIndex] = arr[rightAreaIndex++];
        }
        tempArrIndex++;
    }

    if (leftAreaIndex > midIndex) {
        for (let i = rightAreaIndex; i <= rightIndex; i++) {
            tempArr[tempArrIndex++] = arr[i];
        }
    } else {
        for (let i = leftAreaIndex; i<= midIndex; i++) {
            tempArr[tempArrIndex++] = arr[i];
        }
    }

    for (let i = leftIndex; i <= rightIndex; i++) {
        arr[i] = tempArr[i];
    }
}

const arr = [3, 5, 2, 4, 1, 7, 8, 6];
MergeSort(arr, 0, arr.length - 1);
console.log(arr);
