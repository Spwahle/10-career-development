'use strict';

const Node = require('./node');

// module.exports = function() {
//   this.head = null
// }

// class expression
// const SLL = class {
//   constructor() {
//     this.head = null
//   }
// }

// class definition
// class SLL {
//   constructor() {
//     this.head = null
//   }
// }

module.exports = class {
  constructor() {
    this.head = null;
  }
//0(1)
  prepend(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
      return node;
    }
    node.next = this.head;
    this.head = node;
    return node;
  }
//O(1)
  append(val) {
    let node = new Node(val);
    let lastNode;

    if(!this.head) {
      this.head = node;
      return node;
    }

    _findLastNode(this.head);
    lastNode.next = node;
    return node;

    function _findLastNode(node) {
      if(!node) return;
      lastNode = node;
      _findLastNode(node.next);
    }
  }

//0(1)
  reverse(){
    let current = this.head;
    let previous = null;

    while(current){
      let save = current.next;
      current.next = previous;
      previous = current;
      current = save;
    }
    console.log(previous);
    this.head = previous;
    return previous;
  }

//O(n)
  removeNthNode(node){
    if(this.head.val === node) {
      this.head = this.head.next;
      return
    } else {
      let prev = this head;
      let curr = prev.next;
      while(curr) {
        if (curr.val === node) {
          prev.next = curr.next;
          curr = curr.next;
          return;
        } else {
          prev = curr;
          curr = curr.next
        }
      }
    }
  }


};
