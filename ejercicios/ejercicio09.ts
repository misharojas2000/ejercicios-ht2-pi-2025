interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
  correo?: string;
}

interface InformacionLogIn {
  correo: string;
  clave: string;
  recaptcha: boolean;
}

const usuarioActual: Usuario = {
  nombre: "Mishell",
  edad: 25,
  activo: true,
  correo: "mishellrojas123@gmail.com"
};

function loguear(info: InformacionLogIn): void {
  const correoValido = info.correo.includes("@") && info.correo.includes(".");
  const claveValida = info.clave.length >= 6;
  const captchaValido = info.recaptcha;

  if (correoValido && claveValida && captchaValido) {
    console.log("Acceso permitido");
  } else {
    console.log("Datos inválidos");
  }
}

const intentoLogIn: InformacionLogIn = {
  correo: "ejemplo@gmail.com",
  clave: "1234567890",
  recaptcha: true
};

loguear(intentoLogIn);
