const API_URL = "http://127.0.0.1:4000/api/V1/Usuario"; 

export const AuthService = {
  login: async (data: { Email: string; Password: string }) => {
    const response = await fetch(`${API_URL}/IniciarSesion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Credenciales incorrectas");
    return response.json();
  },

  registerPaciente: async (data: any) => {
    const response = await fetch(`${API_URL}/Registrar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id_rol: 3 }),
    });
    if (!response.ok) throw new Error("Error al registrar paciente");
    return response.json();
  },

  registerDoctor: async (data: any) => {
    const response = await fetch(`${API_URL}/Registrar/admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id_rol: 2 }),
    });
    if (!response.ok) throw new Error("Error al registrar doctor");
    return response.json();
  },

  getProfile: async (id: number) => {
    const response = await fetch(`${API_URL}/usuarios/${id}`);
    if (!response.ok) throw new Error("No se pudo obtener el perfil");
    return response.json();
  },
};