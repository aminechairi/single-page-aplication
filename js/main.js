async function data_fotos() {
  try {
    let url = `https://jsonplaceholder.typicode.com/photos`;
    let  response = await fetch(url);
    let response_json = await response.json();
    console.log(response_json);
  } catch (error) {
    console.log(error);
  }
}
data_fotos()

async function data_posts() {
  try {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    let  response = await fetch(url);
    let response_json = await response.json();
    console.log(response_json);
  } catch (error) {
    console.log(error);
  }
}
data_posts()

async function data_comments() {
  try {
    let url = `https://jsonplaceholder.typicode.com/comments`;
    let  response = await fetch(url);
    let response_json = await response.json();
    console.log(response_json);
  } catch (error) {
    console.log(error);
  }
}
data_comments()