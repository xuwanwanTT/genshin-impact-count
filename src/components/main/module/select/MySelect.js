import React, { useState } from 'react';
import './my-select.css';

const MySelect = ({ data = [], onSelect, ...props }) => {
  const [openLock, setOpenLock] = useState(false);
  const [showName, setShowName] = useState('请选择');

  return (
    <div className={'my-select-warp'} style={props.style}>
      <div className={'my-select-show'} onClick={() => { setOpenLock(!openLock) }}>{showName}</div>
      <div className={`my-select-bar ${openLock ? 'active' : ''}`}>
        {data.map((s, i) => (
          <div className={'my-select-item'} key={'select' + i} onClick={() => {
            setShowName(s.name);
            setOpenLock(false);
            if (onSelect instanceof Function) onSelect(s);
          }}>{s.name}</div>
        ))}
      </div>
    </div>
  );
};

export default MySelect;