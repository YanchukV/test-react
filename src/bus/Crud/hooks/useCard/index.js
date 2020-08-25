// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { cardActions } from '../../actions';

export const useCard = () => {

    const dispatch = useDispatch();
    const {
        data,
        isLoading,
        editCard,
        isPopupCard
    } = useSelector((state) => state.card);

    useEffect(() => {
        dispatch(cardActions.fetchCardsAsync());
    }, [dispatch]);

    const addPopupCard = () => {
        dispatch(cardActions.addPopupCard());
    };

    const closePopupCard = () => {
        dispatch(cardActions.closePopupCard());
    };

    const createCardAsync = _card => {
        dispatch(cardActions.createCardAsync(_card));
    };

    const editPopupCard = _id => {
        dispatch(cardActions.editPopupCard(_id));
    };

    const updateCardAsync = _card => {
        dispatch(cardActions.updateCardAsync(_card));
    };

    const removeCardAsync = _card => {
        dispatch(cardActions.removeCardAsync(_card));
    };

    return {
        data,
        isPopupCard,
        isLoading,
        editCard,
        addPopupCard,
        closePopupCard,
        createCardAsync,
        editPopupCard,
        updateCardAsync,
        removeCardAsync
    }

};
