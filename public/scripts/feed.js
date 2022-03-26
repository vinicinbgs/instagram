const feedContainer = document.querySelector('.feed');

const feedTemplate = (profileImg, profileName, img) => {
    return `<article class="card">
        <header class="card__header">
            <a href="#" class="card__header__profile">
                <img src="${profileImg}"
                    alt="">
                <span>${profileName}</span>
            </a>
            <button class="card__header__toolbox">
                <i class="fas fa-ellipsis-h"></i>
            </button>
        </header>
        <figure class="card__body__figure">
            <img src="${img}"
                alt="">
        </figure>
        <nav class="card__body__controls">
            <button class="control"><i class="far fa-heart"></i></button>
            <button class="control"><i class="far fa-comment"></i></button>
            <button class="control"><i class="far fa-bookmark"></i></button>
        </nav>
        <div class="card__post">
            <strong>${profileName}</strong> ${words(1)}
        </div>
        <div class="card__comments">
            <img src="img/me.jpg"
                alt="">
            <span class="card__comments__feedback">curtido por <strong>theweeknd</strong> e outras <strong>200
                    pessoas</strong></span>
        </div>
    </article>`
}