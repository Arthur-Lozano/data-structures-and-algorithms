

## This is an article that should help you wrap your head around the insertion sort algorithm.


## array 
## arr = [8,4,23,42,16,15]

## function that takes in an array
### InsertionSort(int[] arr)

## starting the loop at 1 and ending when the list is empty
### FOR i = 1 to arr.length

## get two pointers
### int j <-- i - 1

## store temp variable 
### int temp <-- arr[i]

## While j is not nothing and temp is less than array at j
### WHILE j >= 0 AND temp < arr[j]

## Re assign 
### arr[j + 1] <-- arr[j]

## re-assign j
### j <-- j - 1

## reassign temp
### arr[j + 1] <-- temp