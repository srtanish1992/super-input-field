import React from "react";
import SuperField from "./SuperField";

class SuperInputField extends React.Component {
    constructor() {
        super();
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