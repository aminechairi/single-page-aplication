let nav_page = {
  icon: document.querySelectorAll(`.header-page .ctn .ab_icon`)[0],
  nav_muni: document.querySelectorAll(`.nav-page`)[0],
  open: false,
  list_btns: 
    [
      document.querySelectorAll(`.nav-page .ctn .list`)[0].children[0],
      document.querySelectorAll(`.nav-page .ctn .list`)[0].children[1],
      document.querySelectorAll(`.nav-page .ctn .list`)[0].children[2],
      document.querySelectorAll(`.nav-page .ctn .list`)[0].children[3],
      document.querySelectorAll(`.nav-page .ctn .list`)[0].children[4],
      document.querySelectorAll(`.nav-page .ctn .list`)[0].children[5],
    ],
  repos_data: document.querySelectorAll(`.repo_data`),
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
if (window.innerWidth > 768) {
  nav_page.nav_muni.style.left = `0%`;
  nav_page.nav_muni.style.opacity = `1`;
  nav_page.open = true;
  nav_page.list_btns.forEach((el) => {
    el.addEventListener(`click`, () => {
      nav_page.nav_muni.style.left = `0%`;
      nav_page.nav_muni.style.opacity = `1`;
      nav_page.open = true;
    })
  })
} 
if (window.innerWidth < 768) {
  nav_page.nav_muni.style.left = `-100%`;
  nav_page.nav_muni.style.opacity = `0`;
  nav_page.open = false;
  nav_page.list_btns.forEach((el) => {
    el.addEventListener(`click`, () => {
      nav_page.nav_muni.style.left = `-100%`;
      nav_page.nav_muni.style.opacity = `0`;
      nav_page.open = false;
    })
  })
}
window.addEventListener(`resize`, () => {
  if (window.innerWidth > 768) {
    nav_page.nav_muni.style.left = `0%`;
    nav_page.nav_muni.style.opacity = `1`;
    nav_page.open = true;
    nav_page.list_btns.forEach((el) => {
      el.addEventListener(`click`, () => {
        nav_page.nav_muni.style.left = `0%`;
        nav_page.nav_muni.style.opacity = `1`;
        nav_page.open = true;
      })
    })
  } 
  if (window.innerWidth < 768) {
    nav_page.nav_muni.style.left = `-100%`;
    nav_page.nav_muni.style.opacity = `0`;
    nav_page.open = false;
    nav_page.list_btns.forEach((el) => {
      el.addEventListener(`click`, () => {
        nav_page.nav_muni.style.left = `-100%`;
        nav_page.nav_muni.style.opacity = `0`;
        nav_page.open = false;
      })
    })
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

function display(number_index) {
  nav_page.repos_data.forEach((el) => {
    el.style.display = `none`;
  })
  nav_page.repos_data[number_index].style.display = `block`;
}

async function data_photos() {
  let number_index = 0;
  if (nav_page.list_btns[number_index].dataset.click === `1 c`) {
    display(number_index);
  } else {
    try {
      let repo_data = document.getElementById(`repo_data_photos`);
      let load = `
      <div class="ab-load">
        <div class="load"></div>
      </div>
      `;
      repo_data.innerHTML = load;
      let response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
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
      nav_page.list_btns[number_index].dataset.click = `1 c`;
    } catch (error) {
      let repo_data = document.getElementById(`repo_data_photos`);
      let Error = `
      <div class="ab_error">
        <i class="fa-solid fa-circle-exclamation"></i>
      </div>
      `;
      repo_data.innerHTML = Error;
    }
  }
}
data_photos()

nav_page.list_btns[0].addEventListener(`click`, () => {
  let number_index = 0;
  display(number_index);
  data_photos();
})

nav_page.list_btns[1].addEventListener(`click`, () => {
  let number_index = 1;
  display(number_index);
  if (nav_page.list_btns[number_index].dataset.click === `1 c`) {
    display(number_index);    
  } else {
    async function data_posts() {
      try {
        let repo_data = document.getElementById(`repo_data_posts`);
        let load = `
        <div class="ab-load">
          <div class="load"></div>
        </div>
        `;
        repo_data.innerHTML = load;
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
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
        nav_page.list_btns[number_index].dataset.click = `1 c`;
      } catch (error) {
        let repo_data = document.getElementById(`repo_data_posts`);
        let Error = `
        <div class="ab_error">
          <i class="fa-solid fa-circle-exclamation"></i>
        </div>
        `;
        repo_data.innerHTML = Error;
      }
    }
    data_posts()
  }
})

nav_page.list_btns[2].addEventListener(`click`, () => {
  let number_index = 2;
  display(number_index);
  if (nav_page.list_btns[number_index].dataset.click === `1 c`) {
    display(number_index);    
  } else {
    async function data_comments() {
        try {
          let repo_data = document.getElementById(`repo_data_comments`);
          let load = `
          <div class="ab-load">
            <div class="load"></div>
          </div>
          `;
          repo_data.innerHTML = load;
          let response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
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
          let division_comments = `
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
          repo_data.innerHTML = ``;
          repo_data.innerHTML = division_comments;
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
          nav_page.list_btns[number_index].dataset.click = `1 c`;
        } catch (error) {
          let repo_data = document.getElementById(`repo_data_comments`);
            let Error = `
            <div class="ab_error">
              <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            `;
            repo_data.innerHTML = Error;
        }
      
    }
    data_comments()
  }
})