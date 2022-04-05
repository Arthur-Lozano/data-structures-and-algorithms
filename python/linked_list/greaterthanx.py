from linked_list import LinkedList

L = LinkedList()
L.add_node(1) 
L.add_node(5)
L.add_node(8)
L.add_node(10)
L.add_node(15)
L.add_node(8)
L.add_node(1000)

def filter_linkedlist(linked_list, k):
  curr = linked_list.head
  prev = None
 
  while curr:
    if curr.value > k:   
      prev.next = curr.next    
      curr = curr.next 
    else:
      prev = curr
      curr = curr.next
  return linked_list