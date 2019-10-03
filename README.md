super-input-field is a simple search text field. The search uses [Fuse.js] (https://fusejs.io/) library which is a fuzzy search lightweight library.

**Installation**

Using npm

```npm install --save super-input-field```

make sure you have installed the peer dependencies as well

```
react
styled-components
```

**Sample Code**

Below is the sample code which initializes the component with the mock-data.

```
import React from "react";
import SuperField from "./SuperField";

class SuperInputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          options : [
            {
                "firstName": "John",
                "lastName": "Doe",
                "title" : "Software Engineer",
                "department" : "IT",
                "img" : ""
              },
              {
                "firstName": "Dan",
                "lastName": "Pitt",
                "title" : "Building Supervisor",
                "department" : "Administration",
                "img" : ""
              },
              {
                "firstName": "Carter",
                "lastName": "Finlay",
                "title" : "Electrical Engineer",
                "department" : "Energy",
                "img" : ""
              }
              
          ]
        };
      }
    
      render() {
        return (
                <SuperField
                  options={this.state.options}
                  width={"30%"}
                />
              )}
}

export default SuperInputField;
```

**Props**

| prop    | type  | description |
|---------|-------|-------------|
| options | Array | An array of data which is used for the search         |


**Complete Source Code and Contributing**

Kindly refer the github link for the full source code. Also, if you have any ideas on how to make this better? Open an issue!