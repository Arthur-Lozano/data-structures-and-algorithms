class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def insert(self, value):
        node = Node(value)  # Node of [3]
        if self.head is not None:
            node.next = self.head
        self.head = node

    def includes(self, value):
        current = self.head
        while current is not None:
            if current.value == value:
                return True
            else:
                current = current.next
        return False

    # insert before
    def append(self, value):
        new_node = Node(value)
        current = self.head

        if current is None:
            current = new_node
        else:
            while current.next is not None:
                current = current.next
        current.next = new_node

    def insert_before(self, new_value, value):
        # create new node
        newNode = Node(new_value)
        # find target node to insert
        node = self.head
        if node == None:
            return
        else:
            # search nodes
            if node.value == value:
                newNode.next = self.head
                self.head = newNode

            while node.next is not None:
                if node.next.value == value:
                    newNode.next = node.next
                    node.next = newNode
                    return
                else:
                    node = node.next

    def insert_after(self, value, new_value):
        newNode = Node(new_value)
        current = self.head
        if self.head == None:
            self.head = newNode
            return
        else:
            if current == value:
                return
            temp = self.head
            while temp.next != None:
                temp = temp.next
            temp.next = newNode

    def to_string(self):
        # defining a blank res variable
        results = ""
        # initializing ptr to head
        current = self.head
        # traversing and adding it to results
        while current:
            results += f"{ {current.value} } -> "
            current = current.next
        results += f"None"
        return results

    # Code challenge 7

    def kth_from_end(self, k):
        length = -1
        current = self.head

        while current:
            current = current.next
            length += 1
        if k > length:
            return "That brings us out of the linked list"
        elif k < 0:
            return "please choose a positive number"
        else:
            current = self.head
            position = length - k

            for _ in range(0, position):
                current = current.next
            return current.value

    # Code Challenge 08
    def zip_list(llone, lltwo):

        # llone = LinkedList()
        # lltwo = LinkedList()

        current_one = llone.head
        current_two = lltwo.head

        result = LinkedList()

        while current_one and current_two is not None:
            if current_one is not None:
                node_one = Node(current_one)
                result.append(node_one)
                current_one = current_one.next

            if current_two is not None:
                node_two = Node(current_two)
                result.append(node_two)
                current_two = current_two.next

        return result
