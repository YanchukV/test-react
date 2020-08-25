// Core
import React from 'react';
// Hooks
import { useField } from 'formik';
// Others
import TextareaAutosize from 'react-textarea-autosize';

export const MyTextArea = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<TextareaAutosize {...field} {...props} />
			{meta.touched && meta.error && <div>{meta.error}</div>}
		</>
	);
};
