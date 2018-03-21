import React from 'react';
import Header from './Header';
import '../styles/Section.css';

export default (props) => <section className="section">
  <Header />
  {props.children}
</section>
