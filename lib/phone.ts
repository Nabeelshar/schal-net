const _rev = "420277884329+";

export function getPhone(): string {
  return _rev.split("").reverse().join("");
}

export function getWhatsAppUrl(): string {
  return `https://wa.me/${getPhone()}`;
}

export function getTelUrl(): string {
  return `tel:${getPhone()}`;
}
