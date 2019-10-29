let alleLinks = document.querySelectorAll('nav a');
let deSecties = document.querySelectorAll('section');

const opties = {
    // rootMargin: '-150px',
    treshold: 1.0
};

const verwerkDoorsnijding = (entries, observer) => {
    entries.forEach( entry => {
        console.log(entry.target.parentNode.id + " Doorsnijdt " + entry.isIntersecting);
        if (entry.isIntersecting) {
            let link = zoekBijpassendeLink('#' + entry.target.parentNode.id);
            maakActief(link);
        }
    });
}

let observer = new IntersectionObserver(verwerkDoorsnijding, opties);

// observer.observe(deSecties[1]);

deSecties.forEach( sectie => {
    observer.observe(sectie.getElementsByTagName('p')[0]);
})

// functies die de class actief verwijderen uit menu
const verwijderActief = () => {
    alleLinks.forEach((link) => {
        if (link.classList = 'actief') {
            link.classList.remove('actief')
        }
    });
}

// functies die de class actief geven
const maakActief = (elem) => {
    verwijderActief();
    elem.classList.add('actief');
}

alleLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        maakActief(e.target);
        window.location = e.target.href;
    })
})

const zoekBijpassendeLink = (id) => {
    let link = document.querySelector('nav a[href="' + id + '"]');
    return link;
}