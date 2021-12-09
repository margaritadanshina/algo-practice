// given the head of a alinked list and an integer val, remove all the odes of the linked list that has Node.val == val, and return the new head.

function listNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let removeElements = function (head, val) {
    let newNode = new listNode();
    let currentNode = newNode;

    while(head !== null) {
        if(head.val !== val) {
        currentNode.next = head;
        currentNode = currentNode.next;
        }
        head = head.next;
    }
    currentNode.next = null;
    return newNode.next;
}

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6))