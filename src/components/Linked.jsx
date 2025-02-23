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

  const cppCode6 = `float linklist::find() {
    if(head==NULL){
        cout<<"List is empty"<<endl;
    }
    Node *t=head;
    int maxval = t->data;
    while(t!=NULL){
        if(t->data < maxval){
            maxval = t->data;
        }
        t=t->link;
    }
    return maxval;
} `;

  const cppCode7 = `void linklist::negative(){
    if(head==NULL){
        cout<<"List is empty\n"<<endl;
    }
    Node *t=head;
    while(t!=NULL){
        if(t->data < 0){
            cout<< t->data << " ";
        }
        t=t->link;
    }
}
  `;

  const cppCode8 = `int linklist::search(int key){
    Node *t=head;

    while(t!=NULL){
        if(t->data==key){
            cout<<"key found";
            return key;
        }
        t=t->link;
    }
    cout<<"key not found\n";
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

      <details>
        <summary>Code for finding maximum number in the List </summary>
        <pre>
          <code>{cppCode6}</code>
        </pre>
        <button onClick={() => handleCopy(cppCode6)}>Copy Code</button>
      </details>

      <details>
        <summary>Code for displaying the negative no. in List </summary>
        <pre>
          <code>{cppCode7}</code>
        </pre>
        <button onClick={() => handleCopy(cppCode7)}>Copy Code</button>
      </details>

      <details>
        <summary>Code for searching the no. in List </summary>
        <pre>
          <code>{cppCode8}</code>
        </pre>
        <button onClick={() => handleCopy(cppCode8)}>Copy Code</button>
      </details>



    </div>
  );
}
