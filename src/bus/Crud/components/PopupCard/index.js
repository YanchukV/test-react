// Core
import React, { useState } from 'react';
// Formik
import { Formik, Form } from 'formik';
// Styles
import cx from 'classnames';
import Styles from './index.module.scss';
// Hooks
import { useCard } from '../../hooks/useCard';
// Others
import { MyTextInput } from '../../elements/myTextInput';
import { MyTextArea } from '../../elements/myTextArea';
// Schemas
import { cardSchema } from './card.schema';

export const PopupCard = () => {

	const { createCardAsync, closePopupCard, isPopupCard, data } = useCard();

	const dataId = data[data.length - 1]?.id;

	const initialValues = {
		id: null,
		img: '',
		title: '',
		price: 0,
		text: '',
	};

	const [stateImg, setImg] = useState(null);

	const cardOverlayCX = cx({
		[Styles.overlay]: true,
		[Styles.overlayShow]: isPopupCard,
	});

	const cardCX = cx({
		[Styles.root]: true,
		[Styles.rootShow]: isPopupCard,
	});

	return (
		<>
			<div className={cardOverlayCX} />
			<div className={cardCX}>
				<Formik
					initialValues={initialValues}
					enableReinitialize='true'
					validationSchema={cardSchema}
					onSubmit={(values, {resetForm}) => {
						// eslint-disable-next-line no-param-reassign
						values.id = dataId ? (dataId + 1) : 1;
						createCardAsync(values);
							if(!initialValues.id) {
								resetForm(initialValues);
								setImg(null);
							}
					}} >
					{({ handleSubmit, setFieldValue }) => {
						return (
					<Form onSubmit={handleSubmit}>
						<div className={Styles.content}>
							<div className={Styles.img}>
								{ stateImg && <img src={JSON.parse(stateImg)} alt='preview' className={Styles.preview}/> }
								<input type='file' name='img' id='popupImg'
														 onChange={e => {
															 const file = e.target.files[0];
															 const reader = new FileReader();
															 setFieldValue("img", file?.name);
															 reader.onload = item => {
															 	 setImg( JSON.stringify(item.currentTarget.result));
																 setFieldValue("img",  JSON.stringify(item.currentTarget.result));
															 };
															 reader.readAsDataURL(file);}}
								/>
							</div>
							<div className={Styles.title}>
								<MyTextInput type='text' name='title' id='popupCardTitle' label='popupCardTitle' placeholder='Title' />
							</div>
							<div className={Styles.title}>
								<MyTextInput type='number' name='price' id='popupCardNum' label='popupCardNum' placeholder='Price' />
							</div>
							<div className={Styles.text}>
								<MyTextArea name='text' id='popupCardText' placeholder='Text for card' />
							</div>
							<div className={Styles.buttons}>
								{/* eslint-disable-next-line react/button-has-type */}
								<button className={Styles.btnReturn} type='reset' onClick={closePopupCard}>No Thanks!</button>
								<button className={Styles.btnSubmit} type='submit'>Save</button>
							</div>
						</div>
					</Form>
						);
				}}
				</Formik>
			</div>
		</>
	);
};
