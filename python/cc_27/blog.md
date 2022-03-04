
<!-- arr = [8,4,23,42,16,15] -->
<!-- #Declare the function -->
# ALGORITHM Mergesort(arr)
<!-- def merge_sort(arr):
#loop through the array
#declare variable with length of array -->
#     DECLARE n <-- arr.length
# create a condition stating that the array is great then one do this
#     if n > 1
# Make a (mid) variable which will have the middle index of the array stored in it
#       DECLARE mid <-- n/2
# Declare a left variable that stores the left side of the array
#       DECLARE left <-- arr[0...mid]
# Create a right variable that stores the right side of the array
#       DECLARE right <-- arr[mid...n]
#       // sort the left side
#       Mergesort(left)
#       // sort the right side
#       Mergesort(right)
#       // merge the sorted left and right sides together
#       Merge(left, right, arr)

# ALGORITHM Merge(left, right, arr)
#     DECLARE i <-- 0
#     DECLARE j <-- 0
#     DECLARE k <-- 0
# Copy the data to temp arrays left[] and right[]
#     while i < left.length && j < right.length
#         if left[i] <= right[j]
#             arr[k] <-- left[i]
#             i <-- i + 1
#         else
#             arr[k] <-- right[j]
#             j <-- j + 1

#         k <-- k + 1

#     if i = left.length
#        set remaining entries in arr to remaining values in right
#     else
#        set remaining entries in arr to remaining values in left