//let delay = 30;
async function merge(ele, low, mid, high){
    console.log('In merge()');
    console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await waitforme(delay);
        console.log('In merge left loop');
        console.log(ele[low + i].style.height + ' at ' + (low+i));
        // color
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
        console.log('In merge right loop');
        console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));

        // To add color for which two r being compared for merging

        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop if');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }

            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log('In merge while loop else');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        console.log("In while if n1 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        console.log("In while if n2 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    console.log('In mergeSort()');
    if(l >= r){
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

// function for merge sort -- Shivam36998

function addMergeSortDescription() {
    // Check if the "description" element exists
    let descriptionElement = document.getElementById("description");
    if (!descriptionElement) {
        console.log("The 'description' element does not exist in the document.");
        return;
    }
    else {
        console.log("In here");
    }

    let ele = document.createElement("div");
    ele.innerHTML = `
        <h1 class="description-heading"> Merge Sort </h1>
        <div class="description-box"> Merge Sort is a highly efficient and stable sorting algorithm. It uses a divide-and-conquer approach to sort an array. Merge Sort is known for its consistent time complexity of O(n log n) and is often preferred for sorting large datasets. <br>
        <br>
        Here's a description of the Merge Sort algorithm: <br>
        <br>
        1. Divide the unsorted array into two halves. <br>
        2. Recursively sort each half using Merge Sort. <br>
        3. Merge the two sorted halves to create a single sorted array. <br>
        <br>
        Here's an example of Merge Sort implemented in C++: <br>
        <br>
        <div class="code-area"> 
        <h1>Merge Sort in C++</h1>
        <pre>
#include &lt;iostream&gt;
#include &lt;vector&gt;

void merge(std::vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    std::vector<int> leftArr(n1);
    std::vector<int> rightArr(n2);

    for (int i = 0; i &lt; n1; i++) {
        leftArr[i] = arr[left + i];
    }
    for (int j = 0; j &lt; n2; j++) {
        rightArr[j] = arr[mid + 1 + j];
    }

    int i = 0, j = 0, k = left;
    while (i &lt; n1 &amp;&amp; j &lt; n2) {
        if (leftArr[i] &lt;= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        }
        else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    while (i &lt; n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j &lt; n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

void mergeSort(std::vector<int>& arr, int left, int right) {
    if (left &lt; right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    int n = arr.size();

    mergeSort(arr, 0, n - 1);

    std::cout &lt;&lt; "Sorted array is:";
    for (int i = 0; i &lt; n; i++) {
        std::cout &lt;&lt; " " &lt;&lt; arr[i];
    }
    std::cout &lt;&lt; std::endl;

    return 0;
}
        </pre>
        </div>
        This code will sort the arr list in ascending order using the Merge Sort algorithm. The algorithm has a consistent time complexity of O(n log n), making it efficient for large lists. <br>
        </div>
    `;

    // Append the new content to the "description" element
    descriptionElement.appendChild(ele);
}


var audio5 = new Audio('game.mp3');
const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    audio5.play();
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    addMergeSortDescription();  // added for adding merge function
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();


    audio5.pause();
    audio5.currentTime = 0;
});
