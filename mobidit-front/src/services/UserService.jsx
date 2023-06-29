export async function UserLogin (params) {    
    var formBody = [];

    for (var property in params) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    const response = await fetch('http://localhost:3008/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })

    const result = await response.json()
    return result
}

export function getUserPhoto (id) {
    return "https://www.japanfm.fr/wp-content/uploads/2022/12/Yamato-scaled.jpg"
}

export function getUserName (id) {
    return "TEST"
}