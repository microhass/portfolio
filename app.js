const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu ul li');

const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup');
const backgroundBlur = document.querySelector('.background');
const seeProjectBtns = document.querySelectorAll('.see-project');

menuIcon.addEventListener('click', () => {
  menu.classList.add('show-menu');
  document.body.classList.add('menu-open');
});

closeMenuIcon.addEventListener('click', () => {
  menu.classList.remove('show-menu');
  document.body.classList.remove('menu-open');
});

[...menuLinks].forEach((link) =>
  link.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    document.body.classList.remove('menu-open');
  })
);

const projects = [
  {
    name: 'Multi Post Stories - 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/popup/popup-1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },

  {
    name: 'Second Project - 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/popup/popup-1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Second Project - 3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/popup/popup-1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Second Project - 4',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/popup/popup-1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Second Project - 5',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/popup/popup-1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Second Project - 6',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/popup/popup-1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Second Project - 7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/popup/popup-1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
];

[(closePopup, backgroundBlur)].forEach((el) => {
  el.addEventListener('click', () => {
    // popup.classList.remove('show-popup');
    backgroundBlur.classList.remove('show-popup');
    popup.style.display = 'none';
  });
});

[...seeProjectBtns].forEach((btn) => {
  btn.addEventListener('click', () => {
    const projectId = btn.dataset.id;
    const project = projects[projectId];
    console.log(project);
    const popupMarkup = `
      <div class="popup">
        <div class="title">
          <h2>Multi Post Stories</h2>
          <div class="close-popup">
            <img src="./images/cancel.svg" alt="Cancel" />
          </div>
        </div>
        <ul class="languages technologies">
          <li>HTML</li>
          <li>Bootstrap</li>
          <li>Ruby on Rails</li>
        </ul>
        <div class="content">
          <div class="popup-image">
            <picture>
              <source
                media="(min-width: 768px)"
                srcset="./images/desktop/works-illustration.svg"
              />
              <img
                src="./images/works-illustration.svg"
                alt="Works ilustration"
              />
            </picture>
          </div>
          <div class="project-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.
            </p>
            <div class="buttons">
              <button type="button">
                See live
                <span
                  ><img
                    src="./images/popup/link.svg"
                    alt="Live project link"
                /></span>
              </button>
              <button type="button">
                See live
                <span
                  ><img
                    src="./images/popup/github.svg"
                    alt="Project code link"
                /></span>
              </button>
            </div>
          </div>
        </div>
      </div>`;
    popup.classList.add('show-popup');
    backgroundBlur.classList.add('show-popup');
    // document.body.classList.add('menu-open');
  });
});
