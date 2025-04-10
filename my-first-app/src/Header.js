import './App.css';


function Header (){
    return(
        <h1>
            {/* <!-- Header Section --> */}
        <header id="logo">
            <i class="fa fa-user fa-lg" aria-hidden="true" ></i>
            <span class="header-info"> Sakshi Patil</span> 
            <i class="fa fa-phone-square fa-lg" aria-hidden="true" ></i>  
            <span class="header-info">8237 3156 82  </span>  
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
            <span class="header-info">sakshipatil9868@gmail.com </span> 
            <i class="fa fa-download fa-lg" aria-hidden="true"></i>
            <a href="assets/resume.pdf" download id="resume"><span id="resume-text">RESUME</span>  </a>  
        </header></h1>
    );
}
export default Header;

