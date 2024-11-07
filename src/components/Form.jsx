import { useState } from 'react';
import { validation } from '../utils/validation';
import styleForm from './Form.module.css'

const Form = ({setShow}) => {
  const [inputs, setInputs] = useState({
    name: '',
    language: '',
  });
  const[error, setError]=useState({})
 
 

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const errors =validation(inputs);
   if(!Object.keys(errors).length){
    console.log(Object.keys(errors).length)
    setShow({state:true, user:inputs})
   }else{
  setError(errors)
   }
  };

  return (
    <form className={styleForm.formContainer} onSubmit={handleSubmitForm}>
      <input
        type="text"
        className={styleForm.formInput}
        placeholder="Ingresa tu nombre"
        onChange={(event) => setInputs({ ...inputs, name: event.target.value })}
        value={inputs.name}
      />
      {error.name && <p className={styleForm.errors}>{error.name}</p> }
      <input
        type="text"
        className={styleForm.formInput}
        placeholder="Ingresa tu lenguaje de programación favorito"
        onChange={(event) =>
          setInputs({ ...inputs, language: event.target.value })
        }
        value={inputs.value}
      />
      {error.language && <p className={styleForm.errors}>{error.language}</p> }
      <button type="submit" className={styleForm.btn}>Enviar</button>
      {Object.keys(error).length > 0 && <p className={styleForm.errorContainer}>Por favor chequea que la información sea correcta</p> }
    </form>
  );
};

export default Form;
