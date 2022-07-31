function Add() {
  return (
    <ul className="list-group list-group-flush bg-transparent w-50">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Название</label>
          <input type="text" className="form-control bg-transparent rounded-0" id="" placeholder="Название" />
          <input className="form-control bg-transparent rounded-0 my-3" id="formFileSm" type="file" />
          <button type="submit" className="btn bg-transparent rounded-0 my-3">Добавить</button>
        </div>
      </form>

      <hr />
    </ul>
  );
}

export default Add;
