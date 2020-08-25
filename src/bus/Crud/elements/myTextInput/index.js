// Core
import React from 'react';
// Hooks
import { useField } from 'formik';

export const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<input {...field} {...props} />
			{meta.touched && meta.error && <div>{meta.error}</div>}
		</>
	);
};
