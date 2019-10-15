let alleLinks = document.querySelectorAll('nav a');
let deSecties = document.querySelectorAll('section');

const opties = {};

const verwerkDoorsnijding = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entries.target + " Doorsnijdt " + entry.isIntersecting);
    })
}

let observer = new IntersectionObserver(verwerkDoorsnijding, opties)

observer.observe(deSecties[1]);

// functies die de class actief verwijderen uit menu
const verwijderActief = () => {
    alleLinks.forEach( (link) =>{
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

alleLinks.forEach( (link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        maakActief(e.target);
        window.location = e.target.href;
    })
})