class Node:
    """
    Create a Node which has properties of the value stored in the Node, left and right child nodes.
    """

    def __init__(self, value=None, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class BinaryTree:
    def __init__(self, root=None):
        self.root = root

    def pre_order(self):

        elements = []

        if self.root is None:
            return "Empty Tree"

        def traverse(root):

            elements.append(root.value)

            if root.left:
                traverse(root.left)

            if root.right:
                traverse(root.right)

        traverse(self.root)

        return elements

    # InOrder Method: Traverse a Binary Tree from left >> root >> right.
    def in_order(self):

        elements = []

        # check it root value is empty before running the traverse method, this will return a string and end the in_order function, else run the traverse method.
        if self.root is None:
            return "Empty Tree"

        def traverse(root):
            # vist left tree.
            if root.left:
                traverse(root.left)

            elements.append(root.value)

            # visit right tree
            if root.right:
                traverse(root.right)

        traverse(self.root)

        return elements

    # PostOrder Method: Traverse a Binary Tree from left >> right>> root.
    def post_order(self):

        if self.root is None:
            return "Empty Tree"

        elements = []

        def traverse(root):
            if root.left:
                traverse(root.left)

            if root.right:
                traverse(root.right)

            elements.append(root.value)

        traverse(self.root)

        return elements


class BinarySearchTree(BinaryTree):
    """
    Add a node to the binary search tree. BST only contains intergers/numbers.
    """

    def __init__(self, root=None, value=None):
        self.root = root
        self.value = value
        self.left = None
        self.right = None

    def add(self, value):

        if value is None or type(value) == str:
            return "Node must contain a number"

        node = Node(value)

        if self.root is None:

            self.root = node

        current = self.root

        while current != None:
            if current.value > value:
                if current.left is None:
                    current.left = node

                else:
                    current = current.left

            if current.value < value:
                if current.right is None:
                    current.right = node
                else:
                    current = current.right

            if current.value == value:
                return "Value already in tree"

    def contains(self, value):
        """
        Search to see if the BST contains a certain value. Returns a boolean to see if value is already inside the tree
        """
        current = self.root

        while current != None:
            if current.value > value:
                current = current.left
            if current.value < value:
                current = current.right
            if current.value == value:
                return True
            else:
                return False
