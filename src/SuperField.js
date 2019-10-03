import React, { Fragment } from "react";
import InputField from "./InputField";
import Fuse from "fuse.js";
import styled from "styled-components";

const InputContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: #eee;
  margin-bottom: 15px;
  ${props => props.css && props.css};
  input {
    padding-left: 10px;
    width: 100%;
    height: 100%;
    margin: 0px;
    border: 1px solid #ccc;
    ${props => props.open && "border-bottom: 0px;"};
  }
`;

const Options = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  background-color: white;
`;

const Option = styled.div`
  height: 80px;
  position: relative;
  ${props =>
    props.index > 0
      ? "border-top: 1px solid #ccc;"
      : "border: none;"} div.copy {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 10px;
    font-size: 14px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0px;
    color: rgb(255, 255, 255);
    span {
      display: block;
      &.name {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        // line-height: 1.38;
        letter-spacing: normal;
        color: #000000;
      }
      &.title {
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        // line-height: 1.83;
        letter-spacing: normal;
        color: #000000;
      }
      &.department {
        font-size: 10px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        // line-height: 2.2;
        letter-spacing: normal;
        color: #000000;
      }
    }
  }
  background-color: rgb(255, 255, 255);
  &.hoverAddName:hover {
    background-color: rgb(237, 245, 247);
    cursor: pointer;
  }
`;

const ImageCircle = styled.div`
  width: 69px;
  height: 69px;
  background-color: #3d627b;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(${props => props.src && props.src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

class SuperField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      open: false
    };
  }


  componentDidMount() {
    this.setState({
      suggestions: this.props.options,
      value: ""
    });
  }

  toggleSearchPane = () =>
    this.setState({
      open: !this.state.open
    });

  searchValues = term => {
    let options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["firstName"]
    };
    let fuse = new Fuse(this.props.options, options); // "list" is the item array
    let suggestions = fuse.search(term);
    this.setState(
      {
        suggestions,
        value:term
      },
      () => {
        term
           ?
           this.setState({
              open: true
            })
          : this.setState({ open: false, value: "" });
      }
    );
  };

  setValue = sug => {
    this.setState(
      {
        value: sug.firstName + " " + sug.lastName,
        open: false
      }
    );
  };

  render() {
    let { height, width, css } = this.props;

    return (
      <Fragment>
        <InputContainer
          height={height ? height : "35px"}
          width={width ? width : "100%"}
          css={css && css}
          open={this.state.open}
        >
          {this.state.open ? (
            <Fragment>
              <InputField
                type="text"
                onChange={e => this.searchValues(e.target.value)}
              />
              <Options>
                {this.state.suggestions.map((sug, i) => (
                  <Option
                    className={"hoverAddName"}
                    key={i}
                    onClick={() => this.setValue(sug)}
                    index={i}
                  >
                    <div className={"copy"}>
                      <span className={"name"}>
                        {sug.firstName}
                        &nbsp;
                        {sug.lastName}
                      </span>
                      <span className={"title"}>{sug.title}</span>
                      <span className={"department"}>{sug.department}</span>
                    </div>
                    <ImageCircle
                      src=""
                    />
                  </Option>
                ))}
              </Options>
            </Fragment>
          ) : (
            <InputField
              type="text"
              value= {this.state.value}
              onChange={e => this.searchValues(e.target.value)}
              placeholder="Search here ..."
            />
          )}
        </InputContainer>
      </Fragment>
    );
  }
}

export default SuperField;