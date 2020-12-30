import React, { Component } from 'react';
import { Segment, Label, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { requestBookAndSimilars } from '../actions/book';
import { addToCart } from '../actions/cart';

import './BookDetails.css';

class BookDetails extends Component {
  componentDidMount() {
    this.props.requestBookAndSimilars(this.props.id);
  }

  handleAddToCart = () => {
    this.props.addToCart(this.props.id);
  }

  render() {
    const { id, series, title, author, image, tags, similarBooks } = this.props;
    return (
      <Segment.Group>
        <Segment size='big'>{series}</Segment>
        <Segment>
          <img src={image} alt={name} className='cover' />
          <h1>ID: {id} - {title}</h1>
          <h2>By {author}</h2>
          { tags && tags.map(tag => <Label key={tag} color='yellow'>{tag}</Label>) }
          <Button content='Buy' icon='shop' onClick={this.handleAddToCart} />
          <div className='similar'> 
            <h3>You might also like:</h3>
            { similarBooks && similarBooks.map(similar => (
              <img key={similar.id} src={similar.image} alt={similar.name} className='similar_cover' />
            )) }
          </div>
          
        </Segment>
      </Segment.Group>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedBook, similar } = state.books;
  return {
    ...selectedBook,
    series: selectedBook.series || selectedBook.title, 
    similarBooks: similar
  }
}

const mapDispatchToProps = {
  requestBookAndSimilars,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
