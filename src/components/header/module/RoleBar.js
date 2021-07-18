import React, { useEffect, useRef, useState } from 'react';
import './role-bar.css';

const RoleBar = ({ data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], onSelect }) => {
  const [index, setIndex] = useState();
  const [moveLock, setMoveLock] = useState(true);
  const [startX, setStartX] = useState();
  const [lastScroll, setLastScroll] = useState(0);
  const scrollWrap = useRef();

  const roleSelect = (data, index) => {
    setIndex(index);
    if (onSelect instanceof Function) onSelect(data);
  };

  const scrollMouseDown = (e) => {
    setStartX(e.pageX)
    setMoveLock(false);
  };

  const scrollMouseUp = (e) => {
    setMoveLock(true);
    scrollWrap && scrollWrap.current && setLastScroll(scrollWrap.current.scrollLeft);
  };

  const scrollMouseMove = (e) => {
    if (!moveLock) {
      const diff = startX - e.pageX;
      scrollWrap.current.scroll(lastScroll + diff, 0);
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', scrollMouseUp);
  }, []);

  return (
    <div className={'role-bar-view-wrap'}>
      <div className={'role-bar-view'} ref={scrollWrap}
        onMouseDown={scrollMouseDown}
        onMouseUp={scrollMouseUp}
        onMouseMove={scrollMouseMove}
      >
        <div className={'role-bar-wrap'}>
          {data.map((s, i) => (
            <div className={'role-item-wrap'} key={'role' + i} style={{
              backgroundColor: index === i ? '#5dadc4' : 'rgba(0, 0, 0, 0)',
              borderColor: index === i ? '#5dadc4' : 'rgba(255, 255, 255, 0.1)'
            }}>
              <div className={'role-item-img'} onClick={() => roleSelect(s, i)} style={{
                backgroundImage: `url(${s})`,
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleBar;