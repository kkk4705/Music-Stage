import { Tabs } from 'antd';
import React, { useState } from 'react';
import ListModal from './ListModal';

const { TabPane } = Tabs;

function Tabses() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Tabs defaultActiveKey="1" onChange={onChange} className="overflow-auto">
      <TabPane tab="Список артистов" key="1">
        <div className="d-flex flex-row justify-content-center-between">
          <div className="d-flex fs-5 d-flex">Артисты:</div>
          <div className="d-flex fs-5 d-flex">Сообщение:</div>
        </div>
        <ListModal />
      </TabPane>
    </Tabs>
  );
}

export default Tabses;
