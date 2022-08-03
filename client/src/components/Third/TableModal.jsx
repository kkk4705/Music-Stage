import { Tabs } from 'antd';
import React, { useState } from 'react';
import ListModal from './ListModal';

const { TabPane } = Tabs;

function Tabses({ id }) {
  const onChange = (key) => {
  };

  return (
    <Tabs defaultActiveKey="1" onChange={onChange} className="overflow-auto">
      <TabPane tab="Заявки" key="1">
        <ListModal id={id} />
      </TabPane>
      <TabPane tab="Треки" key="2">
        {/* <Lists /> */}
      </TabPane>
    </Tabs>
  );
}

export default Tabses;
