import { Modal } from 'antd';
import 'antd/dist/antd.min.css';
import React, { useState } from 'react';

import 'antd/dist/antd.min.css';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import ModalPage from './ModalPage';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Tooltip>
        <Button shape="circle" icon={<SearchOutlined />} onClick={() => setVisible(true)} />
      </Tooltip>
      <Modal
        centered
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
        width={1200}
      >
        <ModalPage />
      </Modal>
    </>
  );
}

export default App;
