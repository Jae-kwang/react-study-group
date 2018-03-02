import React from 'react';

const Header = ({children}) => {
  return (
    <header>
      <h1 className="title">{children}</h1>
    </header>
  )
};

export default Header;