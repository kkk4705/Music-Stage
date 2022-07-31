import React from 'react';

export default function Event() {
  return (
    <div
      style={{
        backgroundColor: `rgb(${0}, ${36}, ${57})`,
        width: '100vw',
        height: '130vh'
      }}
    >
      <div className="d-flex flex-column mb-3 w-100 h-100 d-inline-block p-3">
        <div style={{ backgroundColor: `rgb(${0}, ${36}, ${57})` }} className="d-flex h-40 d-inline-block justify-content-center">
          <div className="w-75 ps-5 ms-5 mt-5 justify-content-center" style={{ backgroundColor: `rgb(${0}, ${36}, ${57})` }}>
            <div className="textTitle fs-1 d-flex justify-content-center ps-5 ms-5 fw-semibold text-light">АФИША</div>
            <div className="textTitle fs-3 d-flex justify-content-center ps-5 ms-5 fw-lighter text-light">СОБЫТИЙ</div>
            <div className="d-flex flex-row mt-5 justify-content-around">
              <div className="card w-25 opacity-75 d-flex justify-content-space-around">
                <div>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>EVENT TYPE</option>
                    <option value="1">SITE OPENING</option>
                    <option value="2">FESTIVAL</option>
                    <option value="3">CONCERT</option>
                  </select>
                </div>
              </div>
              <div className="input-group d-flex justify-content-center w-25 h-25">
                <input type="text" className="form-control opacity-75 d-flex justify-content-center w-25 h-15 rounded-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>
            <div className="d-flex flex-column align-items-end me-5 pe-5">.</div>
          </div>
          <div className="d-flex flex-column justify-content-start mt-5 ms-4">
            <img src="whitelogo.png" width="100px" alt="" />
          </div>
        </div>
        <div style={{ backgroundColor: `rgb(${0}, ${36}, ${57})` }} className="d-flex ps-0 p-5 h-75 mt-5 mb-5 d-inline-block justify-content-center">
          <div className="col-8 d-flex justify-content-center mt-5 mb-5">
            <div className="card rounded-5 mt-5 text-bg-dark d-flex h-50 w-75 ms-0 d-flex align-content-stretch flex-wrap">
              <div className="card-text d-flex justify-content-center fs-1 fw-lighter m-0 mt-0 mb-5 fs-1">
                <div className="card-title d-flex fs-1 fw-lighter m-0 mt-4 fs-1 text-break">БОЛЬ ФЕСТИВАЛЬ</div>
                <img src="https://img.gazeta.ru/files3/776/13407776/Depositphotos_404277306_l-2015-pic905-895x505-85353.jpg" className="d-flex rounded-5 card-img w-100 h-100 opacity-50 position-absolute" alt="" />
              </div>
              <div className="card-img d-flex justify-content-around flex-row mt-5">
                <div className="cartadiv d-flex justify-content-start align-items-end">
                  <div className="card d-flex opacity-50 ">
                    <div style={{ color: `rgb(${0}, ${36}, ${57})` }} className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted d-flex justify-content-start align-items-end">ЯКАРТА1</h6>
                      <p className="card-text ">24 августа Бар Голубая устрица</p>
                    </div>
                  </div>
                </div>
                <div className="cartadiv d-flex justify-content-start align-items-start w-25 h-25 ">
                  <div className="card d-flex justify-content-start opacity-50 ">
                    <div style={{ color: `rgb(${0}, ${36}, ${57})` }} className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted d-flex justify-content-start ">ВИДЕОКАССЕТА ТВОИХ РОДИТЕЛЕЙ</h6>
                      <p className="card-text">ЗАКЛАДКА</p>
                      <p className="card-text">10 дней без горячей воды</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
