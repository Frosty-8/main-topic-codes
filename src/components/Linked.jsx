import React from 'react';
import '../styles/main.css';

export function Linked() {
  const cppCode1 = `#include <iostream>
#include <string>
using namespace std;

string makeSmallestPalindrome(string s) {
    int n = s.length();
    for (int i = 0; i < n / 2; ++i) {
        if (s[i] != s[n - i - 1]) {
            s[i] = s[n - i - 1] = min(s[i], s[n - i - 1]);
        }
    }
    return s;
}

int main() {
    string s;
    cin >> s;
    cout << makeSmallestPalindrome(s) << endl;
    return 0;
}`;

  const cppCode2 = `#include <iostream>
#include <string>
using namespace std;

string makeSmallestPalindrome(string s) {
    int n = s.length();
    for (int i = 0; i < n / 2; ++i) {
        if (s[i] != s[n - i - 1]) {
            s[i] = s[n - i - 1] = min(s[i], s[n - i - 1]);
        }
    }
    return s;
}

int main() {
    string s;
    cin >> s;
    cout << makeSmallestPalindrome(s) << endl;
    return 0;
}`;

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div>
      <details>
        <summary>C++ Solution</summary>
        <pre>
          <code>{cppCode1}</code>
        </pre>
        <button onClick={() => handleCopy(cppCode1)}>Copy Code</button>
      </details>

      <details>
        <summary>C++ Solution</summary>
        <pre>
          <code>{cppCode2}</code>
        </pre>
        <button onClick={() => handleCopy(cppCode2)}>Copy Code</button>
      </details>
    </div>
  );
}
