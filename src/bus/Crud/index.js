import React from "react";
import Header from "./components/Header";
// Styles
import './theme/index.scss';
import CardList from './components/CardList';
import { PopupCard } from './components/PopupCard';

export const Crud = () => {

  return (
    <>
      <Header />
      <main className="main">
        <PopupCard/>
        <CardList/>
      </main>
    </>
  );
};
