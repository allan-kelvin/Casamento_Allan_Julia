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
   




