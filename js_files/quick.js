
async function partitionLomuto(ele, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            // color
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++;
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    // pauseChamp
    await waitforme(delay);

    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

// function for quick sort -- Shivam36998

function addQuickSortDescription() {
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
        <h1 class="description-heading"> Quick Sort </h1>
        <div class="description-box"> Quick Sort is a highly efficient and widely used sorting algorithm. It uses a divide-and-conquer approach to sort an array. Quick Sort is known for its average-case time complexity of O(n log n) and is often preferred over other sorting algorithms for large datasets. <br>
        <br>
        Here's a description of the Quick Sort algorithm: <br>
        <br>
        1. Choose a "pivot" element from the array. <br>
        2. Partition the array into two subarrays: elements less than the pivot and elements greater than the pivot. <br>
        3. Recursively apply Quick Sort to the two subarrays. <br>
        4. Concatenate the sorted subarrays and the pivot to get the final sorted array. <br>
        <br>
        Here's an example of Quick Sort implemented in C++: <br>
        <br>
        <div class="code-area"> 
        <h1>Quick Sort in C++</h1>
        <pre>
#include &lt;iostream&gt;
#include &lt;vector&gt;

int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j &lt; high; j++) {
        if (arr[j] &lt;= pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(std::vector<int>& arr, int low, int high) {
    if (low &lt; high) {
        int pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

int main() {
    std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    int n = arr.size();

    quickSort(arr, 0, n - 1);

    std::cout &lt;&lt; "Sorted array is:";
    for (int i = 0; i &lt; n; i++) {
        std::cout &lt;&lt; " " &lt;&lt; arr[i];
    }
    std::cout &lt;&lt; std::endl;

    return 0;
}
        </pre>
        </div>
        This code will sort the arr list in ascending order using the Quick Sort algorithm. The algorithm has an average-case time complexity of O(n log n), making it highly efficient for large lists. <br>
        </div>
    `;

    // Append the new content to the "description" element
    descriptionElement.appendChild(ele);
}


var audio4 = new Audio('kira.mp3');
const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
  audio4.play();
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    addQuickSortDescription();  // added for adding quick sort function
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();

    audio4.pause();
    audio4.currentTime = 0;
});
