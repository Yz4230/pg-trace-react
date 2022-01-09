import styled from "@emotion/styled";


import CafeImage1 from "@/assets/cafe1.jpg";
import CafeImage2 from "@/assets/cafe2.jpg";
import CafeImage3 from "@/assets/cafe3.jpg";
import CafeImage4 from "@/assets/cafe4.jpg";

import type React from "react";

const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
  alignItems: "stretch",
  justifyItems: "stretch",
});

const Image = styled.img({
  aspectRatio: "1/1",
  objectFit: "cover",
});

const ImageSet: React.FC = () => {
  const images = [CafeImage1, CafeImage2, CafeImage3, CafeImage4];

  return (
    <Container>
      {images.map((image, index) => (
        <Image key={index} src={image} />
      ))}
    </Container>
  );
};

export default ImageSet;
