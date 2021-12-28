
def insertShitArray(list, val):
 if not list:
    return [val]

 elif len(list) == 1:
    list.append(val)
    return list

 midpoint = len(list)//2
 currentindex = len(list)-1

   while currentindex >= midpoint:
      if len(list) == currentindex -1
          list.append[currentindex-1]
  else:
      list[currentindex + 1] = list[currentindex]
      currentindex -= 1

list[currentindex +1] = val
    return list

insertShitArray([2,4,6,-8], 5)