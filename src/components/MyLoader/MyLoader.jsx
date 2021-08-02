import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={150}
    height={230}
    viewBox="0 0 150 230"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="136" rx="5" ry="5" width="150" height="15" />
    <rect x="0" y="0" rx="5" ry="5" width="150" height="120" />
    <rect x="0" y="200" rx="5" ry="5" width="125" height="30" />
    <rect x="0" y="160" rx="5" ry="5" width="90" height="15" />
  </ContentLoader>
);

export default MyLoader;
