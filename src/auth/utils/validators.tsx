export function nameValidation(name: string): string | null {
  const regex = /[^a-zA-Z -]/;
  if (name.trim() === '') {
    return 'el campo es requerido';
  }
  if (regex.test(name)) {
    return 'Solo se permiten letras';
  }
  if (name.trim().length < 3) {
    return 'El campo debe tener mínimo 3 caracteres';
  }
  return null;
}

export function emailValidation(email: string): string | null {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(String(email).toLowerCase())) {
    return null;
  }
  if (email.trim() === '') {
    return 'El campo es requerido';
  }
  return 'Ingrese un email válido';
}
