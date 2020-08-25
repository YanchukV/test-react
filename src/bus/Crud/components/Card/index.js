// Core
import React, { useState } from 'react';
// PropTypes
import { string, number } from 'prop-types';
// Formik
import { Form, Formik } from 'formik';
// Styles
import cx from 'classnames';
import Styles from './index.module.scss';
// Hooks
import { useCard } from '../../hooks/useCard';
// Others
import { cardSchema } from './card.schema';
import { MyTextInput } from '../../elements/myTextInput';
import { MyTextArea } from '../../elements/myTextArea';


export const Card = ({ title, price, text, img, id }) => {

	const { editPopupCard, updateCardAsync, removeCardAsync, editCard, data } = useCard();

	const initialValues = editCard[0];

	const [stateImg, setImg] = useState(data[0].img);

	const image = JSON.parse(img);

	const cardCX = cx({
		[Styles.card]: true,
		[Styles.hidden]: editCard[0]?.id === id,
	});

	const cardJSX = (
		<div className={cardCX}>
			<div className={Styles.img}>
				<img src={image} alt='img' />
			</div>
			<h2 className={Styles.title}>{title}</h2>
			<h2 className={Styles.price}>{price}$</h2>
			<div className={Styles.text}>{text}</div>
			<button className={Styles.btn} onClick={() => {
				editPopupCard(id);
			}} type='button'>Edit
			</button>
		</div>
	);

	const cardFormJSX = editCard[0]?.id === id && (
		<div>
			<Formik
				initialValues={initialValues}
				enableReinitialize='true'
				validationSchema={cardSchema}
				onSubmit={(values) => {
					updateCardAsync(values);
				}}>
				{({ values, handleSubmit, setFieldValue }) => {
					return (

						<Form onSubmit={handleSubmit}>
							<div className={Styles.img}>
								<img src={JSON.parse(stateImg)} alt='preview' className={Styles.preview} />
								<input type='file' name='img' id='cardImg' placeholder='Image'
											 onChange={e => {
												 const file = e.target.files[0];
												 const reader = new FileReader();
												 setFieldValue('img', file.name);
												 reader.onload = item => {
													 setImg(JSON.stringify(item.currentTarget.result));
													 setFieldValue('img', JSON.stringify(item.currentTarget.result));
												 };
												 reader.readAsDataURL(file);
											 }}
								/>
							</div>
							<div className={Styles.inputTitle}>
								<MyTextInput type='text' name='title' id='cardTitle' label='Card title'
														 placeholder={initialValues?.title} />
							</div>
							<div className={Styles.inputPrice}>
								<MyTextInput type='number' name='price' id='cardPrice' label='Card price'
														 placeholder={initialValues?.price} />
							</div>
							<div className={Styles.inputText}>
								<MyTextArea name='text' id='cardText' placeholder={initialValues?.text} />
							</div>
							<div className={Styles.buttons}>
								<button className={Styles.btnReturn} type='button' onClick={() => removeCardAsync(values)}>Delete</button>
								<button className={Styles.btnSubmit} type='submit'>Update</button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);

	return (
		<div className={Styles.root}>
			{cardJSX}
			{cardFormJSX}
		</div>
	);
};

Card.defaultProps = {
	title: string.isRequired,
	price: number.isRequired,
	img: string.isRequired,
	id: number.isRequired
};
