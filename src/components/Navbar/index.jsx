import React from 'react';
import { Wrap } from './style';

const Navbar = () => {
  return (
    <Wrap>
      <Wrap.Nav>
        <Wrap.Logo />
        <Wrap.Wrap>
          <Wrap.Category />
          <Wrap.Arrow />
        </Wrap.Wrap>
        <Wrap.Wrap>
          Buy Crypto <span>EUR</span>
          <Wrap.Arrow />
        </Wrap.Wrap>
        <Wrap.Wrap>Markets</Wrap.Wrap>
        <Wrap.Wrap>
          Trade
          <Wrap.Arrow />
        </Wrap.Wrap>
        <Wrap.Wrap>
          Derivatives
          <Wrap.Arrow />
        </Wrap.Wrap>
        <Wrap.Wrap>
          Earn
          <Wrap.Arrow />
        </Wrap.Wrap>
        <Wrap.Wrap>
          Finance
          <Wrap.Arrow />
        </Wrap.Wrap>
        <Wrap.Wrap>
          Derivatives <span>New</span>
          <Wrap.Arrow />
        </Wrap.Wrap>

        <Wrap.Wrap>Log In</Wrap.Wrap>
      </Wrap.Nav>
      <Wrap.Section>sction</Wrap.Section>
    </Wrap>
  );
};

export default Navbar;
