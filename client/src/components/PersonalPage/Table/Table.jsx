import { Tabs } from 'antd';
import { Button, Drawer, } from 'antd';
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {
  FileAddOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Add from '../Add/Add';
import Lists from '../List/List';
import Lists2 from '../List/List2';
import Edit from '../Edit/Edit';
import { allTrackThunk } from '../../../redux/actions/getTrack';

const { TabPane } = Tabs;

function Tabses({ info }) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allTrackThunk());
  }, []);

  return (
    <Tabs defaultActiveKey="1" className="overflow-auto">
      <TabPane tab="Заявки" key="1">
        <Lists info={info} />
      </TabPane>
      <TabPane tab="Треки" key="2">
        <Add />
        <Lists2 />
      </TabPane>
      {/* <TabPane tab="Добавить трек" key="3">
        <Add />
      </TabPane> */}
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
