//function to find triplets with sum 0
function findTriplets(arr) {
    //sort the array
    let found = false;
    arr.sort(function(a, b) { 
        return a - b; 
    });
    //find the triplets
    for (let i = 0; i < arr.length - 1; i++) {
        //initialize left and right 
        let left = i + 1;
        let right = arr.length - 1;
        //run loop until left is less than right
        while (left < right) {
            //if sum is 0, print the triplets
            const sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                console.log('Triplet:', arr[i], arr[left], arr[right]);
                left++;
                right--;
                found = true;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    //if no triplets found
    if (!found) {
        console.log('No triplets found');
    }
}
//array of integers
arr = [0, -1, 2, -3, 1];
findTriplets(arr);