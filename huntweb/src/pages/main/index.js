import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const {docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });
  }

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) {
      return;
    }

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  }

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) {
      return;
    }

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  }

  render() {
    const { products, productInfo, page } = this.state;

    return (
      <div className='product-list'>
        {products.map(product => {
          const { _id, title, description } = product;

          return (
            <article key={_id}>
              <strong>{title}</strong>
              <p>{description}</p>

              <Link to={`/products/${_id}`}>Acessar</Link>
            </article>
          )
        })}
        <div className='actions'>
          <button disabled={page === 1} onClick={ this.prevPage }>Anterior</button>
          <button disabled={page === productInfo.pages} onClick={ this.nextPage }>Próxima</button>
        </div>
      </div>
    )
  }
}