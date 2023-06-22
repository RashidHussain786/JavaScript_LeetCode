var MinStack = function() {
    this.stack = [];
    this.minStack = [];
  };
  
  MinStack.prototype.push = function(val) {
    this.stack.push(val);
  
    // Update the minimum stack
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  };
  
  MinStack.prototype.pop = function() {
    const val = this.stack.pop();
  
    // Update the minimum stack if the popped element was the minimum
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  };
  
  MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
  };
  
  MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
  };

  
  // Example Usages:

  var obj = new MinStack(); // Create a new instance of MinStack

obj.push(-2); // Push -2 onto the stack
obj.push(0); // Push 0 onto the stack
obj.push(-3); // Push -3 onto the stack

var min = obj.getMin(); // Retrieve the minimum element in the stack
console.log(min); // Output: -3

obj.pop(); // Remove the top element from the stack

var topElement = obj.top(); // Get the top element of the stack
console.log(topElement); // Output: 0

min = obj.getMin(); // Retrieve the minimum element in the stack
console.log(min); // Output: -2
