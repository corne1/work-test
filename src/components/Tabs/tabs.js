import React, { useState } from 'react';
// import TabsContent from '../TabsContent';
import './tabs.scss';
import Content from '../content';

const Tabs = (props) => {
  const [active, setActive] = useState(null);
  const {tabsItems, ...itemProps} = props;
  const openTab = e => setActive(+e.target.dataset.index);
  return (
    <div className='main'>
      {tabsItems[active] && <Content {...itemProps}/>}

      <div className="tabs">
        {tabsItems.map(({ title, visited, id }) => (
          <button
            key={id}
            className={`tablinks ${id === active ? 'active' : ''}`}
            onClick={openTab}
            data-index={id}>
            {title}</button>
        ))}
      </div>
    </div>
  )
}

export default Tabs;