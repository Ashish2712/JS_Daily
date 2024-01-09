// A queue is a First In, First Out (FIFO) data structure. 
// It's like waiting in a line. The first person to arrive is the first to leave.


let queue = [];
queue.push(1); // Enqueue an element
queue.push(2);
queue.shift(); // Dequeue the first element (removes 1)


console.log(queue); // [2] , deque will remove the first element.