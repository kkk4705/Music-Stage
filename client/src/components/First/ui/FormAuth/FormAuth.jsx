import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function FormAuth({ typeUser }) {
  return (
    <form>
      <Input hidden="wer" type="mail" name="mail" placeholder="Электронная почта" />
      <Input type="password" name="pass" placeholder="Пароль" />
      <Button value={typeUser} type="button" body="ВОЙТИ" />
    </form>
  );
}
