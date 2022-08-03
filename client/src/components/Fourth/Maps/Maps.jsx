import React, { useState } from 'react';
import {
  YMaps, Map, FullscreenControl,
  SearchControl, ZoomControl, ObjectManager, Placemark, GeolocationControl,
} from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPlaceThunk } from '../../../redux/actions/AllPlaces';

function Maps() {
  const dispatch = useDispatch();
  const [points, setPoints] = useState([]);

  const places = useSelector((store) => store.place)?.map((elem) => elem.location);
  useEffect(() => {
    dispatch(getAllPlaceThunk());
  }, []);

  const defaultPoint = { center: [55.754138, 37.620324], zoom: 11 };
  return (
    <div className="d-flex flex-column justify-content-center">
      <YMaps
        onLoad={(ymaps) => {
          console.log('ymaps', ymaps.geocode);
        }}
        query={{
          lang: 'en_RU',
          apikey: '63b9b4db-e778-4867-b0b2-65c2fc80454c',
        }}
      >
        <p className="text-center fs-1 text-white py-3">Карта площадок</p>
        <div className="d-flex justify-content-center align-items-center rounded-0">
          <Map
            width="85vw"
            height="70vh"
            defaultState={defaultPoint}
            modules={['geolocation', 'geocode']}
          >
            <SearchControl options={{
              float: 'right'
            }}
            />
            <Placemark geometry={['Лубянский проезд, дом 25, стр. 1']} />
            <Placemark
              geometry={[55.724758, 37.78521]}
            />
            {/* <Placemark geometry={[55.734758, 37.553521]} />
            <Placemark geometry={[55.684758, 37.5321]} />
            <Placemark geometry={[55.684758, 37.3521]} /> */}
            <GeolocationControl options={{
              float: 'left'
            }}
            />
            <FullscreenControl />
            <ZoomControl />
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default Maps;
