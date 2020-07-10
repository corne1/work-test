import React from 'react';
import './tabsContent.scss';
import Content from '../content/content';

const TabsContent = (props) => {
  const { glowsData, onToggleCheck, onToggleContent, logic, tabsItems } = props;
  return (
    <div className="section content">
      <Content
        glowsData={glowsData}
        onToggleCheck={onToggleCheck}
        onToggleContent={onToggleContent}
        logic={logic}
      />
    </div>
  )
}
export default TabsContent;