import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles.jsx';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer className='price'>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispathToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispathToProps)(CollectionItem);
