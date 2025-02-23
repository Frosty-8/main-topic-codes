import React from 'react';
import '../styles/main.css';

export function Linked() {
  const cppCode1 = `#include <iostream>
#include<vector>
using namespace std;
`;

  const cppCode2 = `struct Node {
    int data;
    Node *link;
};`;

  const cppCode3 = `class linklist {
    Node *head; // Declare head pointer
public:
    linklist(){
        head=NULL;
    }  // Initialize head to NULL in constructor
    
    ~linklist(){}
    void create();
    float find();
    void negative();
    void display();
    void reverse();
    void single();
    int search(int key);
};`;

  const cppCode4 = `void linklist::create() {
    Node *nn, *temp;
    int n, i;
    cout << "Enter no. of nodes: ";
    cin >> n;
    
    for (i = 0; i < n; i++) {
        nn = new Node; // Allocate memory for new node
        cout << "\nEnter data for node: ";
        cin >> nn->data; // Input data for the node
        cout << nn->data << " stored in node " << i << endl;
        nn->link = NULL; // Ensure new node's link is NULL
        
        if (i == 0) {
            head = nn; // First node becomes the head
            temp = nn; // Set temp to the first node
        } else {
            temp->link = nn; // Link the previous node to the new node
            temp = nn; // Move temp to the new node
        }
    }
    
    cout << "List created.\n" << endl;
}
  `;

  const cppCode5 = `void linklist::display(){
    Node *t = head;
    while(t!=NULL){
        cout<<t->data<<" -> ";
        t=t->link;
    }
    cout<<" X ";
}
  `;

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div>
      <details>
        <summary>Inserting the required libraries for the linked list</summary>
        <pre>
          <code>{cppCode1}</code>
        </pre>
        <button onClick={() => handleCopy(cppCode1)}>Copy Code</button>
      </details>

      <details>
        <summary>Making a structure Node </summary>
        <pre>
          <code>{cppCode2}</code>
        </pre>
        <button onClick={() => handleCopy(cppCode2)}>Copy Code</button>
      </details>

      <details>
        <summary>Using constructor and Destructor in class Linklist </summary>
        <pre>
          <code>{cppCode3}</code>
        </pre>
        <button onClick={() => handleCopy(cppCode3)}>Copy Code</button>
      </details>

      <details>
        <summary>Code for Creating Nodes </summary>
        <pre>
          <code>{cppCode4}</code>
        </pre>
        <button onClick={() => handleCopy(cppCode4)}>Copy Code</button>
      </details>

      <details>
        <summary>Code for displaying the List </summary>
        <pre>
          <code>{cppCode5}</code>
        </pre>
        <button onClick={() => handleCopy(cppCode5)}>Copy Code</button>
      </details>


    </div>
  );
}
