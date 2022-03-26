const storyContainer = document.querySelector('.stories__container');

const storyTemplate = (profileImg, profileName) => {
    return `<a class="stories__item">
                 <div class="stories__item--active">
                     <img src="${profileImg}"
                         class="stories__item__img">
                 </div>
                 <p class="stories__item__label">${profileName}</p>
             </a>`;
 } 