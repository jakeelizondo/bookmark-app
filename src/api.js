const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jake';

const getBookmarks = function () {
  return bookmarkApiFetch(`${BASE_URL}/bookmarks`);
};

function bookmarkApiFetch(...args) {
  let error;
  return fetch(...args)
    .then((response) => {
      if (!response.ok) {
        error = { code: response.status };
      }

      return response.json();
    })
    .then((data) => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      return data;
    });
}

export default {
  getBookmarks,
};
