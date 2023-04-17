function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let insertingData = arr[i];

        let j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > insertingData) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }

        arr[j + 1] = insertingData;
    }
}

const arr =[1,2,5,6,4,3];
InsertionSort(arr);
console.log(arr);
