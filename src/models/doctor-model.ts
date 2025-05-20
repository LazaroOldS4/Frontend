export interface DoctorModel {
    id_usuario: string;
    especialidad: string;
    biografia?: string;
    disponible?: string;
    creado_en?: Date;
    actualizado_en?: Date;
}