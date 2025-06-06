import { IonInput, IonButton, IonSpinner } from "@ionic/react";
import { useFormik } from "formik";
import {v4 as uuidv4} from "uuid";
import {useTasks} from "../../../hooks";
import { initialValues, validationSchema } from "./TaskForm.form";
import { TaskFormTypes } from "./TaskForm.type";

import "./TaskForm.scss";

export function TaskForm(props: TaskFormTypes.Props) {
  const { onClose } = props;
  const {createTask}=useTasks();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: (formValue) => {
     
      const data={
        id:uuidv4(),
        description:formValue.task,
        completed:false,
        created_at:new Date()
      }
      createTask(data);
      
      setTimeout(()=>{
        onClose();
      },3000)
    },
  });
  return (
    <div className="task-form">
      <IonInput
        placeholder="Descripcion de la tarea"
        autoFocus
        name="name"
        color={formik.errors.task}
        onIonChange={(e) => formik.setFieldValue("task", e.detail.value)}
      />
      <IonButton expand="block" onClick={() => formik.handleSubmit()}>
        {formik.isSubmitting ? <IonSpinner name="crescent"/>:"Crear"}
      </IonButton>
    </div>
  );
}
