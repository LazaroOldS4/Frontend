import { IonInput, IonButton } from "@ionic/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useUser} from '../../../hooks';
import { ChangeFormNameTypes } from "./ChangeFormName.types";
import "./ChangeFormName.scss";

export function ChangeFormName(props: ChangeFormNameTypes.Props) {
  const { onClose } = props;
  const {onChangeUsername}=useUser();

  const validarInput=()=>{
    console.log("Nuevo");
    
  }

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("danger"),
    }),
    onSubmit: (formValue) => {
        onChangeUsername(formValue.name);
      onClose();
    },
  });

  return (
    <div className="change-form-name">
      <IonInput
      name="nombre"
        placeholder="Cambiar nombre y apellidos"
        autofocus
        color={formik.errors.name}
        onIonChange={(e) => formik.setFieldValue("name", e.detail.value)}
      />
      <IonButton expand="block" onClick={()=>formik.handleSubmit()}>
        Actualizar...
      </IonButton>
    </div>
  );
}
