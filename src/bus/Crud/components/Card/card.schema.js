// Core
import * as Yup from 'yup';

export const cardSchema = Yup.object().shape({
    img: Yup.mixed()
      .required('Image must be uploaded'),
    title: Yup.string()
        .min(3, 'Task title is too short')
        .required('Task title field is required'),
    price: Yup.number()
        .moreThan(0, 'Price must be more than 0')
        .required('Task tag field is required'),
    text: Yup.mixed()
      .required('Task text field is required')
});
