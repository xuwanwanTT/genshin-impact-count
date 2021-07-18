import React, { useState } from 'react';
import './header.css';
import RoleBar from './module/RoleBar.js';

const Header = ({ data, itemClick }) => {
  const [roleName, setRoleName] = useState();

  const roleSelected = (role) => {
    setRoleName(role);
    if (itemClick instanceof Function) itemClick(role);
  };

  return (
    <div className={'header-bg'}>
      <div className={'role-info'}>{roleName}</div>
      <RoleBar data={data} onSelect={roleSelected} />
      <div className={'my-info'}>xuwanwan.com</div>
    </div>
  );
};

export default Header;