"use strict"

# def insertion_sort(arr):
#   # for (i = 1; i < length; i++)
#   for i in range(1, len(arr)):
#     key = arr[i];
#     j = i - 1;
#     while (j >= 0 && arr[j] > key):
#       arr[j + 1] = arr[j];
#       j = j - 1;

#       arr[j + 1] = key;

#     return arr;


def insertionSort(arr):
    for i in range(1, len(arr)):
        current = arr[i]
        while i > 0 and arr[i - 1] > current:
            arr[i] = arr[i - 1]
            i = i - 1
            arr[i] = current
    return arr


print(insertionSort([10, 2, 1, 7, 0, 4, 15]))
