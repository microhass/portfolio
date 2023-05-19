const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu ul li');
const backgroundBlur = document.querySelector('.background');

let popup;
let closePopup;
let seeProjectBtns;

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
    summary:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    mobileImage: './images/works-illustration.svg',
    desktopImage: './images/desktop/works-illustration.svg',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },

  {
    name: 'Second Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    summary:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    mobileImage: './images/popup/proj2-mobile.jpg',
    desktopImage: './images/popup/proj2-desktop.jpg',
    previewImage: './images/desktop/project-1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Third Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita sit iste facere nemo. Repellendus nihil deserunt!",
    summary:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    mobileImage: './images/popup/proj3.jpeg',
    desktopImage: './images/popup/proj3.jpeg',
    previewImage: './images/desktop/project-2.svg',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Fourth Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    summary:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    mobileImage: './images/popup/proj4.jpeg',
    desktopImage: './images/popup/proj4.jpeg',
    previewImage: './images/desktop/project-3.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Fifth Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    summary:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    mobileImage: './images/popup/proj2-mobile.jpg',
    desktopImage: './images/popup/proj2-desktop.jpg',
    previewImage: './images/desktop/project-1.svg',
    technologies: ['React', 'JavaScript', 'Tailwind'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Sixth Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    summary:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    mobileImage: './images/popup/proj6.jpeg',
    desktopImage: './images/popup/proj6.jpeg',
    previewImage: './images/desktop/project-2.svg',
    technologies: ['HTML', 'CSS', 'Ruby', 'Rspec'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
  {
    name: 'Seventh Project',
    description:
      "Lorem ipsum dolor sit amet consectetur omnis vero, numquam natus eaque magni nam rem autem voluptas. Incidunt, deserunt!<br>.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    summary:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    mobileImage: './images/popup/proj7.jpeg',
    desktopImage: './images/popup/proj7.jpeg',
    previewImage: './images/desktop/project-3.svg',
    technologies: ['React', 'Express'],
    liveLink: 'https://google.com',
    sourceLink: 'https://github.com',
  },
];

const firstProjectMarkup = `
  <div class="first-project project">
    <div class="project-image">
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="${projects[0].desktopImage}"
        />
        <img
          src="${projects[0].mobileImage}"
          alt="Works ilustration"
        />
      </picture>
    </div>
    <div class="project-text">
      <h3>Multi-Post Stories</h3>
      <p>
        ${projects[0].summary}
      </p>
      <ul class="languages">
        <li>CSS</li>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Ruby</li>
      </ul>
      <button class="see-project" data-id="0" type="button">
        See project
      </button>
    </div>
  </div>`;

const projectsMarkup = projects
  .map((project, index) => (index === 0
    ? ''
    : `<div class="project other-projects">
    <div class="project-image">
      <img
        src="${project.previewImage}"
        alt="Works ilustration"
        class="project-image"
      />
    </div>
    <div class="project-text">
      <h3>${project.name}</h3>
      <p>
        ${project.summary}
      </p>
      <ul class="languages">
        ${project.technologies
      .map((tech) => `<li>${tech}</li>`)
      .join('')}
      </ul>
      <button class="see-project" data-id="${index}" type="button">
        See project
      </button>
    </div>
  </div>`))
  .join('');

document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.querySelector('.projects');
  const otherProjsContainer = projectsContainer.querySelector('.others');
  projectsContainer.insertAdjacentHTML(
    'afterbegin',
    firstProjectMarkup,
  );

  otherProjsContainer.innerHTML = projectsMarkup;

  seeProjectBtns = document.querySelectorAll('.see-project');

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
});

const form = document.querySelector('form');
const emailInput = document.querySelector('input[type=email]');
const errorText = document.querySelector('.form-footer span');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userEmail = emailInput.value;
  if (userEmail === userEmail.toLowerCase()) return form.submit();
  emailInput.style.border = '1px solid red';
  errorText.textContent = 'Please ensure the email is in lower case!';
  setTimeout(() => {
    emailInput.style.border = 'unset';
    emailInput.style.borderBottom = '1px solid #DBD8D7';
    errorText.textContent = '';
  }, 5000);
  return null;
});

const nameInput = document.querySelector('input[type=text]');
const infoInput = document.querySelector('textarea');

let formValue = {};

const storeValues = (value) => {
  localStorage.setItem('formValue', JSON.stringify(value));
};

const updateTypedValues = () => {
  formValue = {
    name: nameInput.value,
    email: emailInput.value,
    info: infoInput.value,
  };

  storeValues(formValue);
};

form.addEventListener('input', () => {
  updateTypedValues();
});


window.addEventListener('load', () => {
  formValue = JSON.parse(localStorage.getItem('formValue'));
  const inputs = {
    nameInput,
    emailInput,
    infoInput,
  };
  if (!formValue || Object.keys(formValue).length < 1) return;
  Object.keys(formValue).forEach((key) => {
    inputs[${key}Input].value = formValue[key];
  });
});





