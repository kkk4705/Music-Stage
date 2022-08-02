import React, {
} from 'react';
import { YMaps, Map } from 'react-yandex-maps';

function Maps() {
  const defaultPoint = { center: [55.754138, 37.620324], zoom: 11 };
  return (
    <div className="w-50 h-50">
      <YMaps style={{
        width: '500px',
        height: '500px'
      }}
      >

        <Map defaultState={defaultPoint} />

      </YMaps>
    </div>
  );
}

export default Maps;
