import { Tabs } from 'antd';
<<<<<<< HEAD
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
=======
// import { Button, Drawer, } from 'antd';
import React, { useEffect, useState } from 'react';
// import { SearchOutlined } from '@ant-design/icons';
// import {
//   FileAddOutlined,
// } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Add from '../Add/Add';
import Place from '../List/List';
import Lists2 from '../List/Event';
import Edit from '../Edit/Edit';
import RequesArt from '../List/RequestArt';
>>>>>>> 3
import { allTrackThunk } from '../../../redux/actions/getTrack';

const { TabPane } = Tabs;

function Tabses({ id_place }) {
  // const [visible, setVisible] = useState(false);

  // const showDrawer = () => {
  //   setVisible(true);
  // };

  // const onClose = () => {
  //   setVisible(false);
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allTrackThunk());
  }, []);

  return (
    <Tabs defaultActiveKey="1" className="overflow-auto">
      <TabPane tab="Мои площадки" key="1">
        <Place id_place={id_place} />
      </TabPane>
      <TabPane tab="Мои события" key="2">
        <Add />
        <Lists2 />
      </TabPane>
      <TabPane tab="Входящие заявки" key="3">
        <RequesArt />
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
