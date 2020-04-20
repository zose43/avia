// project news app
// ajax method`s
function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error.status: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });
        xhr.addEventListener("error", () => {
          cb(`Error.status: ${xhr.status}`, xhr);
        });
        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("post", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error.status: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });
        xhr.addEventListener("error", () => {
          cb(`Error.status: ${xhr.status}`, xhr);
        });
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    }
  };
}
const customHttp = http();
// init sellect
document.addEventListener("DOMContentLoaded", function() {
  M.AutoInit();
  loadNews();
});

const newService = (function() {
  const apiKey = "284b28be09c34abd9e1c44168d62227b";
  const apiUrl = "http://newsapi.org/v2";
  return {
    topHeadlines(country = "ru", cb) {
      customHttp.get(
        `${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`,
        cb
      );
    },
    everything(query, cb) {
      customHttp.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    }
  };
})();
// elements
const form = document.forms["newsControls"];
const countrySelect = form.elements["country"];
const searchInput = form.elements["search"];

// form event
form.addEventListener("submit", e => {
  e.preventDefault();
  loadNews();
});

// Load news function
function loadNews() {
  showPreload();
  const countrySelectValue = countrySelect.value;
  const searchInputValue = searchInput.value;

  if (!searchInputValue) {
    newService.topHeadlines(countrySelectValue, onGetResponse);
  } else {
    newService.everything(searchInputValue, onGetResponse);
  }
}

// function on get response from server
function onGetResponse(err, resp) {
  removePreload();
  if (err) {
    showAlert(err, "error-msg");
    return;
  }
  if (!resp.articles.length) {
    showEmptyAlert("no news", "error");
    return;
  }
  renderNews(resp.articles);
}

// function render new`s
function renderNews(news) {
  const newsContainer = document.querySelector(".news-container .row");
  if (newsContainer.children.length) {
    clearContainer(newsContainer);
  }
  let fragment = "";

  news.forEach(newsItem => {
    const el = newsItemTemplate(newsItem);
    fragment += el;
  });
  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

// new`s item template function
function newsItemTemplate({ urlToImage, title, url, description }) {
  return `
  <div class='col s12'>
    <div class='card'>
        <div class='card-image'>
            <img src='${urlToImage}'>
            <span class='card-title'>${title || ""}</span>
            <p
        </div>
        <div class='card-content'>
        <p>${description || ""}</p>
        </div>
        <div class='card-action'>
        <a href='${url}'>Read more</a>
        </div>
    </div>
  </div>
  `;
}

// show msg
function showAlert(msg, type = "success") {
  M.toast({ html: msg, classes: type });
}

function showEmptyAlert(msg, type = "success") {
  M.toast({
    html: msg,
    classes: type
  });
}

// function clear container
function clearContainer(container) {
  // container.innerHTML = '';
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

// preloader
function showPreload() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="progress">
        <div class="indeterminate"></div>
    </div>`
  );
  return;
}
// remove preload function
function removePreload() {
  const load = document.querySelector(".progress");
  if (load) {
    load.remove();
  }
}
// const promise = new Promise(resolve => {
//   setTimeout(() => resolve(Math.random()), 1000);
// });
// console.log(promise);
// promise
//   .then(x => {
//     console.log(x);
//     return x;
//   })
//   .then(y => console.log(y));

// function http() {
//   return {
//     get(url, cb) {
//       try {
//         const xhr = new XMLHttpRequest();
//         xhr.open("get", url);
//         xhr.addEventListener("load", () => {
//           if (Math.floor(xhr.status / 100) !== 2) {
//             cb(`Error.status: ${xhr.status}`, xhr);
//             return;
//           }
//           const response = JSON.parse(xhr.responseText);
//           cb(null, response);
//         });
//         xhr.addEventListener("error", () => {
//           cb(`Error.status: ${xhr.status}`, xhr);
//         });
//         xhr.send();
//       } catch (error) {
//         cb(error);
//       }
//     },
//     post(url, body, headers, cb) {
//       try {
//         const xhr = new XMLHttpRequest();
//         xhr.open("post", url);
//         xhr.addEventListener("load", () => {
//           if (Math.floor(xhr.status / 100) !== 2) {
//             cb(`Error.status: ${xhr.status}`, xhr);
//             return;
//           }
//           const response = JSON.parse(xhr.responseText);
//           cb(null, response);
//         });
//         xhr.addEventListener("error", () => {
//           cb(`Error.status: ${xhr.status}`, xhr);
//         });
//         Object.entries(headers).forEach(([key, value]) => {
//           xhr.setRequestHeader(key, value);
//         });
//         xhr.send(JSON.stringify(body));
//       } catch (error) {
//         cb(error);
//       }
//     }
//   };
// }
// const customHttp = http();

// function getPost(id) {
//   return new Promise((resolve, reject) => {
//     customHttp.get(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       (err, resp) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(resp);
//       }
//     );
//   });
// }
// function getPostComments(post) {
//   const { id } = post;
//   return new Promise((resolve, reject) => {
//     customHttp.get(
//       `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
//       (err, resp) => {
//         if (err) {
//           reject(err);
//         }
//         resolve({ post, comments: resp });
//       }
//     );
//   });
// }
// function getUserCreatedPost(data) {
//   const {
//     post: { userId }
//   } = data;
//   return new Promise((resolve, reject) => {
//     customHttp.get(
//       `https://jsonplaceholder.typicode.com/users/${userId}`,
//       (err, resp) => {
//         if (err) {
//           reject(err);
//         }
//         resolve({ ...data, user: resp });
//       }
//     );
//   });
// }
// // getPost(3)
// //   .then(post => getPostComments(post))
// //   .then(data => getUserCreatedPost(data))
// //   .then(fullData => console.log(fullData))
// //   .catch(err => console.log(err));

// function getPost1(id) {
//   return new Promise((resolve, reject) => {
//     customHttp.get(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       (err, resp) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(resp);
//       }
//     );
//   });
// }
// function getPostComments1(id) {
//   return new Promise((resolve, reject) => {
//     customHttp.get(
//       `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
//       (err, resp) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(resp);
//       }
//     );
//   });
// }
// function getUserCreatedPost1(userId) {
//   return new Promise((resolve, reject) => {
//     customHttp.get(
//       `https://jsonplaceholder.typicode.com/users/${userId}`,
//       (err, resp) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(resp);
//       }
//     );
//   });
// }
// Promise.all([getPost1(4), getPostComments1(4), getUserCreatedPost1(4)])
//   .then(([post, comment, user]) => console.log(post, comment, user))
//   .catch(err => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(resp => {
//     //return resp.json();
//   })
//   //.then(post => console.log(post))
//   .catch(err => console.log(err));
