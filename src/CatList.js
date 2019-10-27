// write your CatList component here
import React from 'react';

const CatList = props => {
  console.log(props);
  return (
    props.catPics.map(cat => <img key={cat.url} src={cat.url} alt='cat' />)
  )

}

export default CatList;
