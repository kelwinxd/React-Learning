export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

//const {url, options} = TOKEN_POST({
//    user:user.value,
//    password:password.value,
//  })

//  const res = await fetch(url, options)
//  const json = await res.json()
//  console.log(json)