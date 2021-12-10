# Insert value into middle of list

-   Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index

## Whiteboard Process

![WhiteBoard](.img/n.png)

## Approach & Efficiency

-   Handle edge cases. If input list is empty or None then return a single element list containing the new value. If input list only contains 1 element then append the new element to the end of the list and return the list Identify the midpoint by dividing the length of the list by 2 (integer division) Create variable current and initialize it to the index of the last element in the list Shift element at 'current' to the right then decrement current Continue to do this until current == midpoint Place new value at the midpoint then return the list
-   Complexity Analysis
    Time Complexity - O(n)
    Space Complexity - O(1)
