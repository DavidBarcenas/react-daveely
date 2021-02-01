import {
  AUTH_VALIDATOR_EMAIL,
  AUTH_VALIDATOR_EMPTY,
  AUTH_VALIDATOR_NAME_MIN,
  AUTH_VALIDATOR_ONLY_LETTERS,
  AUTH_VALIDATOR_PSSD_MIN,
  AUTH_VALIDATOR_PSSD_REPEAT,
  AUTH_VALIDATOR_REQUIRED,
} from '../constants';

export function nameValidation(name: string): string {
  const regex = /[^a-zA-Z -]/;
  if (name.trim() === AUTH_VALIDATOR_EMPTY) {
    return AUTH_VALIDATOR_REQUIRED;
  } else if (regex.test(name)) {
    return AUTH_VALIDATOR_ONLY_LETTERS;
  } else if (name.trim().length < 3) {
    return AUTH_VALIDATOR_NAME_MIN;
  } else {
    return AUTH_VALIDATOR_EMPTY;
  }
}

export function emailValidation(email: string): string {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(String(email).toLowerCase())) {
    return AUTH_VALIDATOR_EMPTY;
  } else if (email.trim() === AUTH_VALIDATOR_EMPTY) {
    return AUTH_VALIDATOR_REQUIRED;
  } else {
    return AUTH_VALIDATOR_EMAIL;
  }
}

export function pssdValidation(pssd: string): string {
  if (pssd.trim() === AUTH_VALIDATOR_EMPTY) {
    return AUTH_VALIDATOR_REQUIRED;
  } else if (pssd.length < 6) {
    return AUTH_VALIDATOR_PSSD_MIN;
  } else {
    return AUTH_VALIDATOR_EMPTY;
  }
}

export function pssdRepeatValidation(pssd: string, pssdRepeat: string): string {
  if (pssd.trim() === AUTH_VALIDATOR_EMPTY) {
    return AUTH_VALIDATOR_REQUIRED;
  } else if (pssd !== pssdRepeat) {
    return AUTH_VALIDATOR_PSSD_REPEAT;
  } else {
    return AUTH_VALIDATOR_EMPTY;
  }
}
