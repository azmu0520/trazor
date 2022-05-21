import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Wrap } from './style';

const Navbar = () => {
  return (
    <Wrap>
      <Wrap.Nav>
        <Link className='link' to='/home'>
          <Wrap.Logo />
        </Link>
        <Wrap.Wrap>
          <Wrap.Category />
          <Wrap.Arrow />
        </Wrap.Wrap>
        <Wrap.Wrap>
          Buy Crypto <span>EUR</span>
          <Wrap.Arrow />
        </Wrap.Wrap>
        <Wrap.Wrap>
          <Link className='link' to='/markets'>
            Markets
          </Link>
        </Wrap.Wrap>
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
          <Link className='link' to='/nft'>
            NFT <span>New</span>
            <Wrap.Arrow />
          </Link>
        </Wrap.Wrap>
        <Wrap.Wrap left='true'>
          <Link className='link' to='/login'>
            Log In
          </Link>
        </Wrap.Wrap>
        <Wrap.Btn>
          <Link className='link' to='/register'>
            Register
          </Link>
        </Wrap.Btn>
        <Wrap.Wrap>Downloads</Wrap.Wrap>
        <Wrap.Wrap border='true'>English</Wrap.Wrap>
        <Wrap.Wrap border='true'>USD</Wrap.Wrap>
        <Wrap.Moon />
      </Wrap.Nav>
      <Outlet />
    </Wrap>
  );
};

export default Navbar;
