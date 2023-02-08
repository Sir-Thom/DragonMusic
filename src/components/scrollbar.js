import React, { useState, useRef } from 'react';
import './CustomScrollbar.css';

const CustomScrollbar = ({ children }) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollableRef = useRef(null);

  const handleScroll = () => {
    setScrollHeight(scrollableRef.current.scrollTop);
  };

  const startScrolling = (event) => {
    setIsScrolling(true);
    event.preventDefault();
  };

  const stopScrolling = () => {
    setIsScrolling(false);
  };

  return (
    <div className="scrollable-container" onScroll={handleScroll} ref={scrollableRef}>
      <div className="scrollable-content">
        {children}
      </div>
      <div
        className="scrollbar"
        style={{
          height: `${(scrollableRef.current?.offsetHeight * scrollableRef.current?.offsetHeight) /
            scrollableRef.current?.scrollHeight}px`,
          transform: `translateY(${(scrollHeight *
            scrollableRef.current?.offsetHeight) /
            scrollableRef.current?.scrollHeight}px)`,
        }}
        onMouseDown={startScrolling}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
      />
    </div>
  );
};

export default CustomScrollbar;
