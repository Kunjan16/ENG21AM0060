const REACT_APP_API_URL = "http://20.244.56.144";
export const getRequest = (URL) => {
    return fetch(`${URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjIzNTkyLCJpYXQiOjE3MTcyMjMyOTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjZmZWJjMjk2LWMyNDItNGY3OC1hMzU3LTBlYjcwZmEyNDc2YSIsInN1YiI6ImtvdGVzaHdhcmFva290ZXNod2FyYW84MjNAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQ29tcGFueTEiLCJjbGllbnRJRCI6IjZmZWJjMjk2LWMyNDItNGY3OC1hMzU3LTBlYjcwZmEyNDc2YSIsImNsaWVudFNlY3JldCI6IllPaG1wVGF5dm5jS1ZzUkIiLCJvd25lck5hbWUiOiJOYWdlc3dhcmkiLCJvd25lckVtYWlsIjoia290ZXNod2FyYW9rb3Rlc2h3YXJhbzgyM0BnbWFpbC5jb20iLCJyb2xsTm8iOiJFTkcyMUFNMDA1MyJ9.d5S_inlBn-VEaSlguBRlqQjowQlqtiV4KD46FrTY1ME`
      },
    }).then(res => {
      if (res.status === 401) {
        // UserService.logout();
      }
  
      return res;
    })
      .catch(() => {
        console.log(`TypeError: failed to fetch ${URL}`);
      });
  };

export const getProductListAPI = async (payload) => {

    return getRequest(`${REACT_APP_API_URL}/test/companies/AMZ/categories/Phone/products?top=10&minPrice=1&maxPrice=1000`)
        .then((resp) => {
            const jsonPromise = resp.json();
            if (!!resp && resp.status === 200) {
                return jsonPromise.then((data) => {
                    return data;
                }).catch((error) => {
                    console.log('Successful request, Unexpected end of JSON input', error);
                    return null;
                })
            }

            return jsonPromise;
        });
};