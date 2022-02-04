import React from 'react';

const modal = (props) => {
  const {children, styled} = props;
  return <div style={styled}>{children}</div>;
};

export default modal;
