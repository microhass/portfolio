const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu ul li');

let popup;

let closePopup;
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

[...menuLinks].forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('show-menu');
  document.body.classList.remove('menu-open');
}));

const projects = [
  {
    name: 'Multi Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    mobileImage: './images/works-illustration.svg',
    desktopImage: './images/desktop/works-illustration.svg',
    technologies: ['HTML', 'Bootstrap', 'JavaScript'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },

  {
    name: 'Second Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    mobileImage: './images/popup/proj2-mobile.jpg',
    desktopImage: './images/popup/proj2-desktop.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Third Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.<br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita sit iste facere nemo. Repellendus nihil asperiores nesciunt incidunt id doloremque sit tenetur, dolores consequuntur consequatur debitis praesentium omnis vero, numquam natus eaque magni nam rem autem voluptas. Incidunt, deserunt!",
    mobileImage: './images/popup/proj3.jpeg',
    desktopImage: './images/popup/proj3.jpeg',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Fourth Project',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita sit iste facere nemo. Repellendus nihil asperiores nesciunt incidunt id doloremque sit tenetur, dolores consequuntur consequatur debitis praesentium omnis vero, numquam natus eaque magni nam rem autem voluptas. Incidunt, deserunt!.<br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    mobileImage: './images/popup/proj4.jpeg',
    desktopImage: './images/popup/proj4.jpeg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Fifth Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    mobileImage: './images/popup/proj2-mobile.jpg',
    desktopImage: './images/popup/proj2-desktop.jpg',
    technologies: ['React', 'JavaScript', 'Tailwind'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Sixth Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    mobileImage: './images/popup/proj6.jpeg',
    desktopImage: './images/popup/proj6.jpeg',
    technologies: ['HTML', 'CSS', 'Ruby', 'Rspec'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Seventh Project',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita sit iste facere nemo. Repellendus nihil asperiores nesciunt incidunt id doloremque sit tenetur, dolores consequuntur consequatur debitis praesentium omnis vero, numquam natus eaque magni nam rem autem voluptas. Incidunt, deserunt!<br>.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    mobileImage: './images/popup/proj7.jpeg',
    desktopImage: './images/popup/proj7.jpeg',
    technologies: ['React', 'Express'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
];

[...seeProjectBtns].forEach((btn) => {
  btn.addEventListener('click', () => {
    const projectId = btn.dataset.id;
    const project = projects[projectId];
    const popupMarkup = `
      <div class="popup">
        <div class="title">
          <h2>${project.name}</h2>
          <div class="close-popup">
            <img src="./images/cancel.svg" alt="Cancel" />
          </div>
        </div>
        <ul class="languages technologies">
        ${project.technologies
    .map((tech) => `<li>${tech}</li>`)
    .join('')}
          
        </ul>
        <div class="content">
          <div class="popup-image">
            <picture>
              <source
                media="(min-width: 768px)"
                srcset="${project.desktopImage}"
              />
              <img
                src="${project.mobileImage}"
                alt="Works ilustration"
              />
            </picture>
          </div>
          <div class="project-text">
            <p>
              ${project.description}
            </p>
            <div class="buttons">
              <a href="${project.liveLink}">
                <button type="button">
                  See live
                  <span
                    ><img
                      src="./images/popup/link.svg"
                      alt="Live project link"
                  /></span>
                </button>
              </a>
              <a href="${project.liveLink}">
                <button type="button">
                  See live
                  <span
                    ><img
                      src="./images/popup/github.svg"
                      alt="Project code link"
                  /></span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>`;
    backgroundBlur.insertAdjacentHTML('afterend', popupMarkup);
    backgroundBlur.classList.add('show-popup');
    backgroundBlur.style.display = 'unset';

    document.body.classList.add('menu-open');
    closePopup = document.querySelector('.close-popup');
    popup = document.querySelector('.popup');

    [closePopup, backgroundBlur].forEach((el) => {
      el.addEventListener('click', () => {
        backgroundBlur.style.display = 'none';
        popup.remove();
        document.body.classList.remove('menu-open');
      });
    });
  });
});
