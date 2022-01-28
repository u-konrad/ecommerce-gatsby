import { Field } from "formik";
import React from "react";

const InputField = ({
  as = "input",
  onChange=()=>{},
  rows = "10",
  errors,
  touched,
  name,
  children,
  handleChange,
  divClass='mb-3',
  label,
  placeholder ,
  disabled,
  autocomplete,
  onBlur,
  type,
  style,
  id,
}) => {
  const processedLabel = label ?? name[0].toUpperCase() + name.slice(1);

  return (
    <div className={divClass}>
      <label className="form-label " htmlFor={id}>
        {processedLabel}
      </label>
      {/* <div className="d-flex-row-c">
      {children} */}
      <Field
        placeholder={placeholder|| `Wprowadź ${label.toLowerCase()}...`}
        disabled={disabled}
        as={as}
        name={name}
        className={`form-control ${
          touched[name] ? (!errors[name] ? "is-valid" : "is-invalid") : ""
        }`}
        type={type}
        id={id}
        rows={rows}
        onChange={(e) => {
          onChange(e);
          handleChange(e);
        }}
        onBlur={onBlur}
        autoComplete={autocomplete}
        style={style}
      >
      </Field>
      {/* </div> */}
      {touched[name] && errors[name] ? (
        <div className="text-danger small">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default InputField;
