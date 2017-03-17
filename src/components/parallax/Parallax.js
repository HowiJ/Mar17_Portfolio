import React from 'react';
import Img from '../../assets/img/imgLoader';
const Parallax = (props) => {
  let style = {
    'background': `url('${Img[props.img] || props.img}')`,

    'minHeight': `500px`,

    'backgroundAttachment': `fixed`,
    'backgroundPosition': `center`,
    'backgroundRepeat': `no-repeat`,
    'backgroundSize': `cover`,
  }
  return (
    <div style={ style }></div>
  );
}
//https://source.unsplash.com/random
//https://source.unsplash.com/category/nature/720x400
export default Parallax;