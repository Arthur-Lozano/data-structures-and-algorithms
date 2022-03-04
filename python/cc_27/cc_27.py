def mergeSort(firstList):
    if len(firstList) > 1:
        mid = len(firstList) // 2
        left = firstList[:mid]
        right = firstList[mid:]

        mergeSort(left)
        mergeSort(right)

        i = 0
        j = 0

        k = 0

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                firstList[k] = left[i]
                i += 1
            else:
                firstList[k] = right[j]
                j += 1
            k += 1

        while i < len(left):
            firstList[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            firstList[k] = right[j]
            j += 1
            k += 1
