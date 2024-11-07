export const validation = ({name, language})=>{

    const errors={}
  
if(!name.length){
  errors.name = "*Debes ingresar tu nombre"
}else if(name.trim().length < 3){
   errors.name = "*Debes ingresar un nombre válido con mínimo 3 caracteres sin espacios" 
}

if(!language.length){
    errors.language = "*Debes ingresar un lenguaje"
}else if(language.trim().length < 6){
    errors.language = "*Debes ingresar un lenguaje válido con 6 caracteres mínimo"
}

return errors;

}