
class PseudoQueue():
    def __init__(self):
        self.s1 = []
        self.s2 = []

    def enqueue(self, x):
        
        # Move items from s1 to s2 
        while len(self.s1) != 0: 
            self.s2.push(self.s1[-1]) 
            self.s1.pop()

        # Push items onto self.s1 
        self.s1.push(x) 

        # Push back to s1 
        while len(self.s2) != 0: 
            self.s1.push(self.s2[-1]) 
            self.s2.pop()

    # Dequeue item 
    def dequeue(self):
        if len(self.s1) == 0: 
            print("Empty")
    
        # Return top of self.s1 
        x = self.s1[-1] 
        self.s1.pop() 
        return x

if __name__ == '__main__':
    