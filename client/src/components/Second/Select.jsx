// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTypeThunk } from '../../redux/actions/getType';

// export default function Select() {
//   const [select, setSelect] = useState('');

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getTypeThunk());
//   }, []);
//   // const event = useSelector((store) => store.event);
//   const type = useSelector((store) => store.type);

//   //   console.log(type.allTypes);
//   // console.log(type);
//   // console.log(event);

//   return (
//     <div className="d-flex card w-25 opacity-75 justify-content-space-around">
//       <div>
//         <select className="form-select d-flex" aria-label="Default select example">
//           <option selected>Тип события</option>
//           {type.map((el) => (
//             <option value={select} onChange={(e) => setSelect(e.target.value)}>{el.name}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }