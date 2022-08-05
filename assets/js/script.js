class mobileNavbar{
    constructor(mobileNavbar, navList,navLinks){
        this.mobileNavbar = document.querySelector(mobileNavbar);
        this.navList=document.querySelector(navList);
        this.navLinks=document.querySelectorAll(navLinks);
        this.activeClass='active';

        this.handleClick=this.handleClick.bind(this);
    }
    animeteLinks(){
        this.navLinks.forEach((link,index)=>{
            link.style.animation
            ? (link.style.animation="")
            : (link.style.animation=`navLinkFade 0.5s ease forwards 0.3s`);
        });
    }
    handleClick(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileNavbar.classList.toggle(this.activeClass);
        this.animeteLinks();

    }

    addClickEvent(){
        this.mobileNavbar.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileNavbar){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileMenu = new mobileNavbar( 
    ".mobile-navbar",
    ".nav-list",
    ".nav-list li"
);

mobileMenu.init();
   


/*Cronometro*/ 

const segundos = 1000
const minutos = segundos * 60
const horas = minutos * 60
const dias = horas * 24

const casamentoData = new Date('2023-04-29 19:00:00')

function diffcasamentoData () {
    const diaHoje = new Date().getTime()
    return casamentoData.getTime() - diaHoje
}

function setContagemRegressiva (element, value) {
    document.querySelector(`.${element}`).innerHTML = value
}

function zeroEsquerda (numero) {
    return String(numero).padStart(2, '0')
}

function diffDias (diff) {
    return Math.floor(diff / dias)
}

function diffHoras (diff) {
    const round = Math.floor(diff % dias / horas)
    return zeroEsquerda(round)
}

function diffMinutos (diff) {
    const round =  Math.floor(diff % horas / minutos)
    return zeroEsquerda(round)
}

function diffSegundos (diff) {
    const round =  Math.floor(diff % minutos / segundos)
    return zeroEsquerda(round)
}

function contagemRegressiva () {
    const diff = diffcasamentoData()

    setContagemRegressiva('dias', diffDias(diff))
    setContagemRegressiva('horas', diffHoras(diff))
    setContagemRegressiva('minutos', diffMinutos(diff))
    setContagemRegressiva('segundos', diffSegundos(diff))
}

window.load = setInterval(contagemRegressiva, 1000)


