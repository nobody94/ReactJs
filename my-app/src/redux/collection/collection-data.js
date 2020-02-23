import * as actionTypes from '../action';
import hat from '../../assets/hat.jpg';
import jacket from '../../assets/jacket.jpg';
import sneaker from '../../assets/sneaker.jpg';
import women from '../../assets/women.jpg';
import men from '../../assets/men.jpg';
const initialState = {
    sections: [
        {
          title: 'hats',
          imageUrl: {hat},
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl:{jacket},
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: {sneaker},
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'women',
          imageUrl: {women},
          size: 'large',
          id: 4,
          linkUrl: 'shop/women'
        },
        {
          title: 'men',
          imageUrl: {men},
          size: 'large',
          id: 5,
          linkUrl: 'shop/men'
        }
      ]
};

const collectionData = ( state = initialState, action ) => {
    switch ( action.type ) {
        default:
            return state;
    }
    return state;
};

export default collectionData;