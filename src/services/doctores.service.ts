import { DoctorModel } from "../models/doctor-model";

const API_URL = "http://127.0.0.1:4000/api/V1/Doctor";

export const DoctorsService = {
  getAll: async (): Promise<DoctorModel[]> => {
    const response = await fetch(`${API_URL}/Doctors`);
    if (!response.ok) throw new Error("Error al obtener doctores");
    return response.json();
  },

  getById: async (id: string): Promise<DoctorModel> => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Error al obtener doctor");
    return response.json();
  },

  update: async (id: string, data: Partial<DoctorModel>) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error al actualizar doctor");
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar doctor");
    return response.json();
  },
};