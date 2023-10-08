async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'blue';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'red';

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            }
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'cyan';
            }
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped
        ele[min_index].style.background = 'cyan';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
    }
}

// function for selection sort -- Shivam36998

function addSelectionDescription() {
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
        <h1 class="description-heading"> Selection Sort </h1>
        <div class="description-box"> Selection Sort is a simple comparison-based sorting algorithm. It works by repeatedly selecting the minimum element from the unsorted portion of the array and putting it at the beginning. Selection Sort is inefficient for large lists and is generally used for its simplicity. <br>
        <br>
        Here's a description of the Selection Sort algorithm: <br>
        <br>
        1. Find the minimum element in the unsorted portion of the array. <br>
        2. Swap the minimum element with the first element in the unsorted portion. <br>
        3. Move the boundary between the sorted and unsorted portions one element to the right. <br>
        4. Repeat these steps until the entire array is sorted. <br>
        <br>
        Here's an example of Selection Sort implemented in C++: <br>
        <br>
        <div class="code-area"> 
        <h1>Selection Sort in C++</h1>
        <pre>
#include &lt;iostream&gt;

void selectionSort(int arr[], int n) {
    for (int i = 0; i &lt; n-1; i++) {
        int minIndex = i;
        for (int j = i+1; j &lt; n; j++) {
            if (arr[j] &lt; arr[minIndex]) {
                minIndex = j;
            }
        }
        std::swap(arr[i], arr[minIndex]);
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, n);

    std::cout &lt;&lt; "Sorted array is:";
    for (int i = 0; i &lt; n; i++) {
        std::cout &lt;&lt; " " &lt;&lt; arr[i];
    }
    std::cout &lt;&lt; std::endl;

    return 0;
}
        </pre>
        </div>
        This code will sort the arr list in ascending order using the Selection Sort algorithm. The algorithm has a time complexity of O(n^2) in the worst case, where n is the number of elements in the list. <br>
        </div>
    `;

    // Append the new content to the "description" element
    descriptionElement.appendChild(ele);
}


var audio2 = new Audio('kerusu.mp3');
audio2.volume = 0.1;

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    addSelectionDescription(); // added for adding selection sort function
    audio2.play();
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();

    audio2.pause();
    audio2.currentTime = 0;

});
