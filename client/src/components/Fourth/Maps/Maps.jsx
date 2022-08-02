import React, {
} from 'react';
// import {
//   YMaps, Map, FullscreenControl, SearchControl, ZoomControl, ObjectManager
// } from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPlaceThunk } from '../../../redux/actions/AllPlaces';

function Maps() {
  const dispatch = useDispatch();
  let places = useSelector((store) => store.place);
  places = places.filter((elem) => elem.location);
  console.log(places);
  useEffect(() => {
    dispatch(getAllPlaceThunk());
  }, []);

  const defaultPoint = { center: [55.754138, 37.620324], zoom: 11 };
  return (
    <div className="d-flex flex-column justify-content-center">
      {/* <YMaps query={{
        lang: 'en_RU',
        // apikey: '63b9b4db-e778-4867-b0b2-65c2fc80454c',
      }}
      >
        <p className="text-center fs-1 text-white py-3">Карта площадок</p>
        <div className="d-flex justify-content-center align-items-center rounded-0">
          <Map
            width="90%"
            height="60%"
            defaultState={defaultPoint}
          >
            <SearchControl options={{
              float: 'right'
            }}
            />
            <ObjectManager
              options={{
                clusterize: true,
                gridSize: 32
              }}
              objects={{
                openBalloonOnClick: true,
                preset: 'islands#greenDotIcon'
              }}
              clusters={{
                preset: 'islands#redClusterIcons'
              }}
              filter={(object) => object.id % 2 === 0}
              defaultFeatures={defaultPoint}
              modules={['objectManager.addon.objectsBalloon', 'objectManager.addon.objectsHint']}
            />
            <FullscreenControl />
            <ZoomControl />
          </Map>
        </div>
      </YMaps> */}
    </div>
  );
}

export default Maps;
