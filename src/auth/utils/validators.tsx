export function nameValidation(name: string): string {
  const regex = /[^a-zA-Z -]/;
  if (name.trim() === '') {
    return 'el campo es requerido';
  } else if (regex.test(name)) {
    return 'Solo se permiten letras';
  } else if (name.trim().length < 3) {
    return 'El campo debe tener mínimo 3 caracteres';
  } else {
    return '';
  }
}

export function emailValidation(email: string): string {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(String(email).toLowerCase())) {
    return '';
  } else if (email.trim() === '') {
    return 'El campo es requerido';
  } else {
    return 'Ingrese un email válido';
  }
}

export function pssdValidation(pssd: string): string {
  if (pssd.trim() === '') {
    return 'el campo es requerido';
  } else if (pssd.length < 6) {
    return 'el campo debe tener minimo 6 caracteres';
  } else {
    return '';
  }
}

export function pssdRepeatValidation(pssd: string, pssdRepeat: string): string {
  if (pssd.trim() === '') {
    return 'el campo es requerido';
  } else if (pssd !== pssdRepeat) {
    return 'Las contraseñas no coinciden';
  } else {
    return '';
  }
}
