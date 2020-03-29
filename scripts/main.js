const changeNavBar = () => {
  const navBar = document.querySelector('.nav-container');
  const skills = document.getElementById('skills-header');
  const home = document.getElementById('home-header');
  const projects = document.getElementById('projects-header');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos) {
      navBar.classList.add('scroll');
    } else {
      navBar.classList.remove('scroll');
    }
    console.log(scrollPos); 
    console.log(navBar.classList);

    if (scrollPos < 740) {
      home.classList.add('nav-selected');
      skills.classList.remove('nav-selected');
      projects.classList.remove('nav-selected');
    } else if (scrollPos >= 740 && scrollPos <= 1400) {
      skills.classList.add('nav-selected');
      home.classList.remove('nav-selected');
      projects.classList.remove('nav-selected');
    } else {
      projects.classList.add('nav-selected');
      skills.classList.remove('nav-selected');
      home.classList.remove('nav-selected');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  changeNavBar();
});
