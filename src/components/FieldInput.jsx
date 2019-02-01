import React from "react";
import PropTypes from "prop-types";
import {
	FormGroup, FormControl, ControlLabel, HelpBlock,
} from "react-bootstrap";

const FieldInput = ({ id, name, value, title, helpText, placeholderText, disabled, hideLabel, modifier, inputRef }) => {
	return (
		<div className={`field ${disabled ? "field--disabled" : ""}`}>
			<FormGroup
				controlId={id}
			>
				<ControlLabel className={hideLabel ? "u-visibility-hidden" : ""}>
					{title}
				</ControlLabel>
				{" "}
				<FormControl
					inputRef={inputRef}
					type="text" 
					disabled={disabled} 
					name={name}
					defaultValue={value}
					placeholder={placeholderText}
					bsClass={`form-control ${modifier}`}
				/>
				<FormControl.Feedback />

				{helpText && <HelpBlock>
					{helpText}
				</HelpBlock>}

			</FormGroup>
		</div>
	);
};

FieldInput.defaultProps = {
	helpText: "",
	placeholderText: "",
};

FieldInput.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	helpText: PropTypes.string,
	placeholderText: PropTypes.string,
};

export default FieldInput;