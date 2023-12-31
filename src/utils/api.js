const BASEURL = 'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest';
const TOKEN = 'Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo';



export function getColors() {
  return fetch(`${BASEURL}/colors`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((res) => res.json());
}

export function getMaterials() {
  return fetch(`${BASEURL}/material`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((res) => res.json());
}

export function getProducts() {
  return fetch(`${BASEURL}/products`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((res) => res.json());
}
