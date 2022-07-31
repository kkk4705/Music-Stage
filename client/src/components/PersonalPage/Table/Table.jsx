import { Tabs } from 'antd';
import { Button, Drawer, } from 'antd';
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {
  FileAddOutlined,
} from '@ant-design/icons';
import Add from '../Add/Add';
import Lists from '../List/List';
import Edit from '../Edit/Edit';

const { TabPane } = Tabs;

function Tabses() {
  const onChange = (key) => {
    console.log(key);
  };

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Tabs defaultActiveKey="1" onChange={onChange} className="overflow-auto">
      <TabPane tab="Заявки" key="1">
        <Lists />
      </TabPane>
      <TabPane tab="Треки" key="2">
        <Lists />
      </TabPane>
      <TabPane tab="Добавить трек" key="3">
        <Add />
      </TabPane>
      <TabPane
        tab="Редактировать"
        key="4"
      >
        <Edit />
      </TabPane>
    </Tabs>
  );
}

export default Tabses;
