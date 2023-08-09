import React from 'react'
import styled from 'styled-components';

interface DetailImageProps {
  image: string;
  width: string;
  height: string;
  alt: string;
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailImage = ({image, width, height, alt}:DetailImageProps) => {
  return (
    <ImageContainer>
    <img
      src={image}
      alt={alt}
      width={width}
      height={height}
    />
  </ImageContainer>
  )
}

export default DetailImage