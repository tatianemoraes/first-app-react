import React from 'react';
import Button from './Button';

function Form() {

  let stylesDiv = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };

  return (
    <form
        style={{
          justifyContent:'center',
          display:'flex',
          alignItems:'center',
          flexDirection:'column'
        }}
      >
      <h1>Cadastro de Usuários</h1>
      <div style={stylesDiv}>
        <label htmlFor="">Nome:</label>
        <input type="text" name="name" />
        <label htmlFor="">Sobrenome:</label>
        <input type="text" name="sobrenome" />
        <label htmlFor="">E-mail</label>
        <input type="email" name="email" id="email" />
        <Button
          btnName={'Cadastrar Usuário'}
          bgColor={'#000'}
          border={ 'none' }
        />
        <Button
          btnName={'Cancelar'}
          bgColor={'red'}
          border={ 'none' }
        />
      </div>
    </form>
  );
};

export default Form;
