from stack_queue import Queue, Node, Stack
from graph import Graph

def graph_depth_first(vertex):

    dfs_list = []
    stack = Stack()
    visited = set()

    stack.push(vertex)
    while not stack.is_empty():
        stack.peek()

        for child in stack.top.next:
            if child not in visited:
                visited.append(child)
                stack.push(child)
            stack.pop()
    return dfs_list