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
async function data_photos() {
  if (nav_page.list_btns[0].dataset.click == `1 c`) {
    try {
      let repo_data = document.getElementById(`repo_data`);
      repo_data.innerHTML = sessionStorage.getItem(`data photos`);
      let show_more = document.querySelectorAll(`.box_photos .ctn .show_more .btn`)[0];
      let ab_boxs = document.querySelectorAll(`.box_photos .ctn .ab_boxs`)[0];
      let show_more_number = +sessionStorage.getItem(`data photos show_more_number`);
      let initial_loop = +sessionStorage.getItem(`data photos initial_loop`);
      show_more.addEventListener(`click`, () => {
        async function show_more() {
          let response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
          let response_json = await response.json();
          let boxs = ``;
          show_more_number += 6;
          initial_loop += 6;
          sessionStorage.setItem(`data photos show_more_number`, show_more_number);
          sessionStorage.setItem(`data photos initial_loop`, initial_loop);
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
          sessionStorage.setItem(`data photos`, repo_data.innerHTML);
        }
        show_more()
      })
    } catch (error) {
      let repo_data = document.getElementById(`repo_data`);
      let Error = `
      <div class="ab_error">
        <i class="fa-solid fa-circle-exclamation"></i>
      </div>
      `;
      repo_data.innerHTML = Error;
      sessionStorage.clear()
    }
  } else {
      try {
        let repo_data = document.getElementById(`repo_data`);
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
        sessionStorage.setItem(`data photos`, repo_data.innerHTML);
        let show_more = document.querySelectorAll(`.box_photos .ctn .show_more .btn`)[0];
        let ab_boxs = document.querySelectorAll(`.box_photos .ctn .ab_boxs`)[0];
        let show_more_number = 6;
        let initial_loop = 0;
        sessionStorage.setItem(`data photos show_more_number`, show_more_number);
        sessionStorage.setItem(`data photos initial_loop`, initial_loop);
        show_more.addEventListener(`click`, () => {
          let boxs = ``;
          show_more_number += 6;
          initial_loop += 6;
          sessionStorage.setItem(`data photos show_more_number`, show_more_number);
          sessionStorage.setItem(`data photos initial_loop`, initial_loop);
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
          sessionStorage.setItem(`data photos`, repo_data.innerHTML);
        })
        nav_page.list_btns[0].dataset.click = `1 c`;
      } catch (error) {
        let repo_data = document.getElementById(`repo_data`);
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
    data_photos()
})
  
nav_page.list_btns[1].addEventListener(`click`, () => {
  async function data_posts() {
    if (nav_page.list_btns[1].dataset.click == `1 c`) {
      try {
        let repo_data = document.getElementById(`repo_data`);
        repo_data.innerHTML = sessionStorage.getItem(`data posts`);
        let show_more = document.querySelectorAll(`.box_posts .ctn .show_more .btn`)[0];
        let ab_boxs = document.querySelectorAll(`.box_posts .ctn .ab_boxs`)[0];
        let show_more_number = +sessionStorage.getItem(`data posts show_more_number`);
        let initial_loop = +sessionStorage.getItem(`data posts initial_loop`);
        show_more.addEventListener(`click`, () => {
          async function show_more() {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            let response_json = await response.json();
            let boxs = ``;
            show_more_number += 6;
            initial_loop += 6;
            sessionStorage.setItem(`data posts show_more_number`, show_more_number);
            sessionStorage.setItem(`data posts initial_loop`, initial_loop);
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
            sessionStorage.setItem(`data posts`, repo_data.innerHTML);
          }
          show_more()
        })
      } catch (error) {
        let repo_data = document.getElementById(`repo_data`);
        let Error = `
        <div class="ab_error">
          <i class="fa-solid fa-circle-exclamation"></i>
        </div>
        `;
        repo_data.innerHTML = Error;
        sessionStorage.clear()
      }
    } else {
        try {
          let repo_data = document.getElementById(`repo_data`);
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
          sessionStorage.setItem(`data posts`, repo_data.innerHTML);
          let show_more = document.querySelectorAll(`.box_posts .ctn .show_more .btn`)[0];
          let ab_boxs = document.querySelectorAll(`.box_posts .ctn .ab_boxs`)[0];
          let show_more_number = 6;
          let initial_loop = 0;
          sessionStorage.setItem(`data posts show_more_number`, show_more_number);
          sessionStorage.setItem(`data posts initial_loop`, initial_loop);
          show_more.addEventListener(`click`, () => {
            let boxs = ``;
            show_more_number += 6;
            initial_loop += 6;
            sessionStorage.setItem(`data posts show_more_number`, show_more_number);
            sessionStorage.setItem(`data posts initial_loop`, initial_loop);
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
            sessionStorage.setItem(`data posts`, repo_data.innerHTML);
          })
          nav_page.list_btns[1].dataset.click = `1 c`;
        } catch (error) {
          let repo_data = document.getElementById(`repo_data`);
          let Error = `
          <div class="ab_error">
            <i class="fa-solid fa-circle-exclamation"></i>
          </div>
          `;
          repo_data.innerHTML = Error;
        } 
    }
  }
  data_posts()
})
  
nav_page.list_btns[2].addEventListener(`click`, () => {
  async function data_comments() {
    if (nav_page.list_btns[2].dataset.click == `1 c`) {
      try {
        let repo_data = document.getElementById(`repo_data`);
        repo_data.innerHTML = sessionStorage.getItem(`data comments`);
        let show_more = document.querySelectorAll(`.box_comments .ctn .show_more .btn`)[0];
        let ab_boxs = document.querySelectorAll(`.box_comments .ctn .ab_boxs`)[0];
        let show_more_number = +sessionStorage.getItem(`data comments show_more_number`);
        let initial_loop = +sessionStorage.getItem(`data comments initial_loop`);
        show_more.addEventListener(`click`, () => {
          async function show_more() {
            let response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
            let response_json = await response.json();
            let boxs = ``;
            show_more_number += 6;
            initial_loop += 6;
            sessionStorage.setItem(`data comments show_more_number`, show_more_number);
            sessionStorage.setItem(`data comments initial_loop`, initial_loop);
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
            sessionStorage.setItem(`data comments`, repo_data.innerHTML);
          }
          show_more()
        })
      } catch (error) {
        let repo_data = document.getElementById(`repo_data`);
        let Error = `
        <div class="ab_error">
          <i class="fa-solid fa-circle-exclamation"></i>
        </div>
        `;
        repo_data.innerHTML = Error;
        sessionStorage.clear()
      }
    } else {
      try {
        let repo_data = document.getElementById(`repo_data`);
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
        sessionStorage.setItem(`data comments`, repo_data.innerHTML);
        let show_more = document.querySelectorAll(`.box_comments .ctn .show_more .btn`)[0];
        let ab_boxs = document.querySelectorAll(`.box_comments .ctn .ab_boxs`)[0];
        let show_more_number = 6;
        let initial_loop = 0;
        sessionStorage.setItem(`data comments show_more_number`, show_more_number);
        sessionStorage.setItem(`data comments initial_loop`, initial_loop);
        show_more.addEventListener(`click`, () => {
          let boxs = ``;
          show_more_number += 6;
          initial_loop += 6;
          sessionStorage.setItem(`data comments show_more_number`, show_more_number);
          sessionStorage.setItem(`data comments initial_loop`, initial_loop);
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
          sessionStorage.setItem(`data comments`, repo_data.innerHTML);
        })
        nav_page.list_btns[2].dataset.click = `1 c`;
      } catch (error) {
          let repo_data = document.getElementById(`repo_data`);
          let Error = `
          <div class="ab_error">
            <i class="fa-solid fa-circle-exclamation"></i>
          </div>
          `;
          repo_data.innerHTML = Error;
      } 
    }
  }
  data_comments()
})