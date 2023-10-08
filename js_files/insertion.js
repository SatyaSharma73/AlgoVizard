async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'blue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'green';
    }
}

// function for insertion sort -- Shivam36998

function addInsertionDescription() {
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
        <h1 class="description-heading"> Insertion Sort </h1>
        <div class="description-box"> Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. <br>
        <br>
        Here's a description of the Insertion Sort algorithm: <br>
        <br>
        1. Start with the second element (index 1) and consider it as the current element. <br>
        2. Compare the current element with the one before it (index-1). If the current element is smaller, swap them. <br>
        3. Move the current element one position to the left and compare it with the previous elements until the correct position is found. <br>
        4. Repeat these steps for all elements in the list, shifting larger elements to the right as necessary. <br>
        <br>
        Here's an example of Insertion Sort implemented in C++: <br>
        <br>
        <div class="code-area"> 
        <h1>Insertion Sort in C++</h1>
        <pre>
#include &lt;iostream&gt;

void insertionSort(int arr[], int n) {
    for (int i = 1; i &lt; n; i++) {
        int key = arr[i];
        int j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
        while (j &gt;= 0 &amp;&amp; arr[j] &gt; key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);

    std::cout &lt;&lt; "Sorted array is:";
    for (int i = 0; i &lt; n; i++) {
        std::cout &lt;&lt; " " &lt;&lt; arr[i];
    }
    std::cout &lt;&lt; std::endl;

    return 0;
}
        </pre>
        </div>
        This code will sort the arr list in ascending order using the Insertion Sort algorithm. The algorithm has a time complexity of O(n^2) in the worst case, where n is the number of elements in the list. <br>
        </div>
    `;

    // Append the new content to the "description" element
    descriptionElement.appendChild(ele);
}


var audio3 = new Audio('aekasora.mp3');
const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    addInsertionDescription();  // added for adding Insetion sort function
    audio3.play();
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();

        audio3.pause();
        audio3.currentTime = 0;
});
