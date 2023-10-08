async function bubble() {
    // console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        // console.log('In ith loop');
        for (let j = 0; j < ele.length - i - 1; j++) {
            // console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                // console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'red';
            ele[j + 1].style.background = 'red';
        }
        ele[ele.length - 1 - i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

var audio1 = new Audio('ac2.mp3');

// function for bubble sort -- Shivam36998

function addBubbleDescription() {
    // Check if the "description" element exists
    let descriptionElement = document.getElementById("description");
    if (!descriptionElement) {
        console.log("The 'description' element does not exist in the document.");
        return;
    }
    else{
        console.log("in here")
    }

    let ele = document.createElement("div");
    ele.innerHTML = `
        <h1 class="description-heading"> Bubble Sort </h1>
        <div class="description-box"> Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which means the list is sorted. <br>
 <br>
    Here's a description of the Bubble Sort algorithm: <br>
 <br>
    1. Start at the beginning of the list. <br>
    2. Compare the first two elements. If the first element is greater than the second element, swap them. <br>
    3. Move to the next pair of elements (i.e., the second and third elements) and repeat the comparison and swapping if necessary. <br>
    4. Continue this process, moving one element at a time towards the end of the list until you reach the end of the list. <br>
    5. After the first pass, the largest element will have "bubbled up" to the end of the list. <br>
    6. Repeat the process for the remaining unsorted elements (i.e., excluding the last element which is already in its correct position). <br>
    7. Continue these passes until no more swaps are needed during a pass. This means the list is sorted. <br>
     <br>
    Here's an example of Bubble Sort implemented in C++: <br>
 <br>
    <div class="code-area"> 
    <h1>Bubble Sort in C++</h1>
    <pre>
#include &lt;iostream&gt;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i &lt; n - 1; i++) {
        // Flag to optimize the algorithm - if no swaps are made in a pass, the array is sorted
        bool swapped = false;

        // Last i elements are already in place, so we don't need to check them
        for (int j = 0; j &lt; n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] &gt; arr[j + 1]) {
                // Swap if they are in the wrong order
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }

        // If no swaps were made in a pass, the array is sorted
        if (!swapped) {
            break;
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    bubbleSort(arr, n);

    std::cout &lt;&lt; "Sorted array is:";
    for (int i = 0; i &lt; n; i++) {
        std::cout &lt;&lt; " " &lt;&lt; arr[i];
    }
    std::cout &lt;&lt; std::endl;

    return 0;
}
    </pre>
    </div>
    This code will sort the arr list in ascending order using the Bubble Sort algorithm. The algorithm  has a time complexity of O(n^2) in the worst case, where n is the number of elements in the list, making it inefficient for large lists. <br>
    </div>
    `;

    // Append the new content to the "description" element
    descriptionElement.appendChild(ele);
}


const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function () {
    addBubbleDescription(); // added for adding bubble function
    audio1.play();
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    audio1.pause();
    audio1.currentTime = 0;
});
