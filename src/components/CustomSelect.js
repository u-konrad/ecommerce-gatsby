import React from "react"
import styled from "styled-components"
import Select from "react-select"

const CustomSelect = ({
  onChange,
  options,
  placeholder,
  className,
  value,
  style,
}) => {
  return (
    <Wrapper
      options={options}
      placeholder={placeholder}
      classNamePrefix="react-select"
      onChange={onChange}
      className={className}
      style={style}
      value={value}
    />
  )
}

const Wrapper = styled(Select)`
font-family: var(--ff-primary);

  &.small {
    font-size: 14px;
    width: 170px !important;
    font-weight: bold;

  }
  &.small .react-select__control {
    border: none !important;
    box-shadow: none !important;
  }

  .form-select:focus {
    border-color: black;
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
  }
  option {
    padding-left: 0.5rem;
  }

  .react-select__control {
    border-radius: 0;
    border-color: black;
    box-shadow: none;
  }

  .small .react-select__control {
  }

  .react-select__control:hover {
    border-color: black;
    box-shadow: 0 0 0 2px black;
    /* border: 2px solid black; */
  }

  .react-select__menu {
    border-radius: 0;
    background-color: #f5f5f5;
  }

  .react-select__option:hover {
    background-color: #e8e8e8;
  }

  .react-select__option--is-focused {
    background-color: #e8e8e8;
  }

  .react-select__option--is-selected {
    background-color: #808080;
  }

  .react-select__option--is-selected:hover {
    background-color: #909090;
  }
`

export default CustomSelect
