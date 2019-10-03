import styled from "styled-components";
import PropTypes from "prop-types";

const InputField = styled.input`
  &[type="text"] {
    width: 100%;
    color: black !important
  
  }

  font-family: Helvetica;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  
  border-radius: 0px;
  width : ${props => props.width};
  height : ${props => props.height};
  margin-bottom: 15px;
  opacity: ${props => (props.disabled ? 0.5 : 1.0)};
`;

InputField.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
};

export default InputField;