import * as React from 'react';
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { Snackbar } from "@mui/material";
import '../styles/main.css';

export function Array() {
  const cppCode1 = `#include<iostream>
#include <climits>
using namespace std;

int getMin(int num[],int n){
    int mini = INT_MAX;
    for(int i=0;i<n;i++){
        mini = min(mini,num[i]);

        // if(num[i]<mini){
        //     mini = num[i];
        // }
    }
    return mini;
}

int getMax(int num[],int n){
    int maxi = INT_MIN;
    for(int i=0;i<n;i++){
        maxi = max(maxi,num[i]);

        // if(num[i]>maxi){
        //     maxi = num[i];
        // }
    }
    return maxi;
}
int main(){
    int num[] = {11,2,3,4,5,6,7,8,9,10};
    int n = sizeof(num)/sizeof(num[0]);
    cout<<"Minimum Element is : "<<getMin(num,n)<<endl;
    cout<<"Maximum Element is : "<<getMax(num,n)<<endl;
    return 0;

}`

  const [open,setOpen] = React.useState(false);
    const handleCopy = (code) => {
      navigator.clipboard.writeText(code);
      setOpen(true);
    };

  return (
    <div>
    <details>
        <summary>Array Codes List</summary>
        <details>
            <summary>Min Max Code</summary>
            <pre>
            <code>{cppCode1}</code>
            </pre>
            <button onClick={() => handleCopy(cppCode1)}>Copy Code</button>
        </details>    
    </details>         
      
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          onClose={() => setOpen(false)}
        >
          Code copied to clipboard!
        </Alert>
      </Snackbar>

    </div>
  );
}
