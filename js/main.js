let nav_page = {
  icon: document.querySelectorAll(`.header-page .ctn .ab_icon`)[0],
  nav_muni: document.querySelectorAll(`.nav-page`)[0],
  open: false,
  list_btns: 
    [
      document.querySelectorAll(`.nav-page .ctn .list`)[0].children[0],
      document.querySelectorAll(`.nav-page .ctn .list`)[0].children[1],
      document.querySelectorAll(`.nav-page .ctn .list`)[0].children[2],
    ],
}
nav_page.icon.addEventListener(`click`, () => {
  if (nav_page.open === false) {
    nav_page.nav_muni.style.left = `0%`;
    nav_page.nav_muni.style.opacity = `1`;    
    nav_page.open = true;
  } else {
    nav_page.nav_muni.style.left = `-100%`;
    nav_page.nav_muni.style.opacity = `0`;
    nav_page.open = false;
  }
})

nav_page.list_btns.forEach((el) => {
  el.addEventListener(`click`, (e) => {
    nav_page.list_btns.forEach((el) => {
      el.style.backgroundColor = `black`;
    })
    e.currentTarget.style.backgroundColor = `rgb(85, 85, 85)`;
  })
})

async function data_photos() {
    try {
      nav_page.list_btns[0].style.backgroundColor = `rgb(85, 85, 85)`;
      let  response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
      let response_json = await response.json();
      let boxs = ``;
      for (let i = 0; i < 6; i++) {
        boxs += `
        <div class="boxs">
          <div class="imgs">
            <img src="${response_json[i].url}" alt="">
          </div>
          <h1 class="titles">${response_json[i].title}</h1>
        </div>
        `;
      }
      let division_photos = `
      <div class="box_photos">
        <div class="ctn">
          <div class="ab_boxs">
            ${
              boxs
            }
          </div>
          <div class="show_more">
            <div class="btn">
              show more
            </div>
          </div>
        </div>
      </div>
    `;
    let repo_data = document.getElementById(`repo_data`);
    repo_data.innerHTML = ``;
    repo_data.innerHTML = division_photos;
    let show_more = document.querySelectorAll(`.box_photos .ctn .show_more .btn`)[0];
    let ab_boxs = document.querySelectorAll(`.box_photos .ctn .ab_boxs`)[0];
    let show_more_number = 6;
    let initial_loop = 0;
    show_more.addEventListener(`click`, () => {
      let boxs = ``;
      show_more_number += 6;
      initial_loop += 6;
      for (let i = initial_loop; i < show_more_number; i++) {
        boxs += `
        <div class="boxs">
          <div class="imgs">
            <img src="${response_json[i].url}" alt="">
          </div>
          <h1 class="titles">${response_json[i].title}</h1>
        </div>
        `;
      }
      ab_boxs.innerHTML += boxs;
    })
    } catch (error) {
      console.log(error);
    }
}
data_photos()

nav_page.list_btns[0].addEventListener(`click`, () => {
  (async function data_photos() {
    try {
      let  response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
      let response_json = await response.json();
      let boxs = ``;
      for (let i = 0; i < 6; i++) {
        boxs += `
        <div class="boxs">
          <div class="imgs">
            <img src="${response_json[i].url}" alt="">
          </div>
          <h1 class="titles">${response_json[i].title}</h1>
        </div>
        `;
      }
      let division_photos = `
      <div class="box_photos">
        <div class="ctn">
          <div class="ab_boxs">
            ${
              boxs
            }
          </div>
          <div class="show_more">
            <div class="btn">
              show more
            </div>
          </div>
        </div>
      </div>
    `;
    let repo_data = document.getElementById(`repo_data`);
    repo_data.innerHTML = ``;
    repo_data.innerHTML = division_photos;
    let show_more = document.querySelectorAll(`.box_photos .ctn .show_more .btn`)[0];
    let ab_boxs = document.querySelectorAll(`.box_photos .ctn .ab_boxs`)[0];
    let show_more_number = 6;
    let initial_loop = 0;
    show_more.addEventListener(`click`, () => {
      let boxs = ``;
      show_more_number += 6;
      initial_loop += 6;
      for (let i = initial_loop; i < show_more_number; i++) {
        boxs += `
        <div class="boxs">
          <div class="imgs">
            <img src="${response_json[i].url}" alt="">
          </div>
          <h1 class="titles">${response_json[i].title}</h1>
        </div>
        `;
      }
      ab_boxs.innerHTML += boxs;
    })
    } catch (error) {
      console.log(error);
    }
  }())
})

nav_page.list_btns[1].addEventListener(`click`, () => {
  (async function data_posts() {
    try {
      let  response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let response_json = await response.json();
      let boxs = ``;
      for (let i = 0; i < 6; i++) {
        boxs += `
          <div class="boxs">
            <h1 class="titles">
              ${response_json[i].title}
            </h1>
            <p class="description">
              ${response_json[i].body}
            </p>
          </div>
        `;
      }
      let division_posts = `
        <div class="box_posts">
          <div class="ctn">
            <div class="ab_boxs">
              ${boxs}
            </div>
            <div class="show_more">
              <div class="btn">
                show more
              </div>
            </div>
          </div>
        </div>
      `;
      let repo_data = document.getElementById(`repo_data`);
      repo_data.innerHTML = ``;
      repo_data.innerHTML = division_posts;
      let show_more = document.querySelectorAll(`.box_posts .ctn .show_more .btn`)[0];
      let ab_boxs = document.querySelectorAll(`.box_posts .ctn .ab_boxs`)[0];
      let show_more_number = 6;
      let initial_loop = 0;
      show_more.addEventListener(`click`, () => {
        let boxs = ``;
        show_more_number += 6;
        initial_loop += 6;
        for (let i = initial_loop; i < show_more_number; i++) {
          boxs += `
          <div class="boxs">
            <h1 class="titles">
              ${response_json[i].title}
            </h1>
            <p class="description">
              ${response_json[i].body}
            </p>
          </div>
          `;
        }
        ab_boxs.innerHTML += boxs;
      })
    } catch (error) {
      console.log(error);
    }
  }())
})

nav_page.list_btns[2].addEventListener(`click`, () => {
  (async function data_comments() {
    try {
      let url = `https://jsonplaceholder.typicode.com/comments`;
      let  response = await fetch(url);
      let response_json = await response.json();
      let boxs = ``;
      for (let i = 0; i < 6; i++) {
        boxs += `
        <div class="boxs">
          <h1 class="titles">
            ${response_json[i].name}
          </h1>
          <h2 class="email">
            ${response_json[i].email}
          </h2>
          <p class="description">
            ${response_json[i].body}
          </p>
        </div>
        `;
      }
      let division_posts = `
      <div class="box_comments">
        <div class="ctn">
          <div class="ab_boxs">
            ${
              boxs
            }
          </div>
          <div class="show_more">
            <div class="btn">
              show more
            </div>
          </div>
        </div>
      </div>
      `;
      let repo_data = document.getElementById(`repo_data`);
      repo_data.innerHTML = ``;
      repo_data.innerHTML = division_posts;
      let show_more = document.querySelectorAll(`.box_comments .ctn .show_more .btn`)[0];
      let ab_boxs = document.querySelectorAll(`.box_comments .ctn .ab_boxs`)[0];
      let show_more_number = 6;
      let initial_loop = 0;
      show_more.addEventListener(`click`, () => {
        let boxs = ``;
        show_more_number += 6;
        initial_loop += 6;
        for (let i = initial_loop; i < show_more_number; i++) {
          boxs += `
          <div class="boxs">
            <h1 class="titles">
              ${response_json[i].name}
            </h1>
            <h2 class="email">
              ${response_json[i].email}
            </h2>
            <p class="description">
              ${response_json[i].body}
            </p>
          </div>
          `;
        }
        ab_boxs.innerHTML += boxs;
      })
    } catch (error) {
      console.log(error);
    }
  }())
})