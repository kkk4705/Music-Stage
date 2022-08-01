import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.min.css';
import Card from './Card';
import { findArtThunk } from '../../redux/actions/findArtist';
import { addArtThunk } from '../../redux/actions/allArtistsAction';

export default function OneArtist({ input }) {
  const [data, setData] = useState('');
  const art = useSelector((store) => store.art);
  const find = useSelector((store) => store.find);

  const dispatch = useDispatch();

  // const changeHandler = (e) => {
  //   setInput(e.target.value);
  // };

  useEffect(() => {
    dispatch(addArtThunk());
    dispatch(findArtThunk(input));
  }, [input]);

  return (
    <div>
      {input ? (
        <div>
          {find?.findArtist.map((el) => (
            // <div className="card text-bg-ligth">
            <Card id={el.id} key={el.id} name={el.name} genre={el.genre} photo={el.photo} />
            // </div>
          ))}
        </div>
      )
        : (
          <div>
            {art.map((el) => (
              // <div className="card text-bg-ligth">
              <Card id={el.id} key={el.id} name={el.name} genre={el.genre} photo={el.photo} />
              // </div>
            ))}
          </div>
        ) }
    </div>
  );
}
