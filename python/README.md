# Code Challenges

# Reverse an Array

## Challenge

<!-- Description of the challenge -->

Write a function that reverses an array, in place

Be careful of: empty arrays, arrays with only 1, odd numbered count, even numbered count

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

-   Create a function that takes in an array
-   Inserting at zero th position
-   Reversed array complete

## Solution

<!-- Embedded whiteboard image -->

![WhiteBoard](./codeChallenge1/codechallenge1/cc1.png)

# Insert value into middle of list

-   Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index

## Whiteboard Process

![WhiteBoard](./codeChallenge2/insertone/img/n.png)

## Approach & Efficiency

-   Handle edge cases. If input list is empty or None then return a single element list containing the new value. If input list only contains 1 element then append the new element to the end of the list and return the list Identify the midpoint by dividing the length of the list by 2 (integer division) Create variable current and initialize it to the index of the last element in the list Shift element at 'current' to the right then decrement current Continue to do this until current == midpoint Place new value at the midpoint then return the list
-   Complexity Analysis
    Time Complexity - O(n)
    Space Complexity - O(1)


# Binary Search of Sorted Array

**Author**: Arthur Lozano

## Overview

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Whiteboard Process

<!-- Embedded whiteboard image -->

![WhiteBoard](./code_challenges/codeChallenge3/whiteboard/cc3.png)

## Approach & Efficiency

<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

-   Find mid point
-   Bring in the arr see if it matches midpoint
-   check if the target is less than or higher than midpoint
-   return true or false

## Big O

-   Time O(log n)
-   O(1)


# Code Challenge 6

# Add three new methods to the Linked List class

## Challenge

-   append

    -   arguments: new value
    -   adds a new node with the given value to the end of the list

-   insert before

    -   arguments: value, new value
        adds a new node with the given new value immediately before the first node that has the value specified

-   insert after
    -   arguments: value, new value
        adds a new node with the given new value immediately after the first node that has the value specified

## Approach & Efficiency

-   Time: O(N)
-   Space: O(N)

## Solution

[LinkedList](../assets/ll2.png)

# Code Challenge 7

# k-th value from the end of a linked list

## Challenge

-   Write the following method for the Linked List class:
    -   kth from end
    -   argument: a number, k, as a parameter.
    -   Return the node’s value that is k places from the tail of the linked list.

## Approach & Efficiency

-   Time: O(N)
-   Space: O(N)

## Solution

[LinkedList - k-th value](./linked_list/assets/CodeChallenge7.jpg)

# Code Challenge: 13 Stack-queue-brackets

## Challenge
- Write a function called validate brackets
- Return: boolean that represents whether or not the brackets in the string are balanced.
- There are 3 types of brackets:
- Round Brackets: `()`, Square Brackets: `[]`, Curly Brackets: `{}`

## Big 0

- Time: O(n)
- Space: O(1)

## Whiteboard

![WhiteBoard](./stack_queue_brackets.PNG)

