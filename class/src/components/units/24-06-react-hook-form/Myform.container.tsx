import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import MyformUI from "./Myform.presenter"
import { schema } from "./Myform.validation"
import {FormValues} from "./Myform.types"

export default function Myform(){
    
      function onClickLogin(data: FormValues) {
        console.log(data);
      }
    return(
        <MyformUI
        handleSubmit={handleSubmit}
        register={register}
        formState={formState}
        onClickLogin={onClickLogin} 


    )
}