from stack_queue import Queue, Node

# Breadth-first: Traverse a Binary Tree breadth-first
def breadth(self):

    root = self.root

    if root is None:
        return "Empty Tree"

    else:
        order = []
        queue = Queue()
        queue.enqueue(root)

        while not queue.is_empty():
            front = queue.dequeue()
            order.append(front.value)
            if front.left:
                queue.enqueue(front.left)
            if front.right:
                queue.enqueue(front.left)
    return order
