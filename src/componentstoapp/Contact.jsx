export const Contact =() => {
    return(
        <div className="contact-container">
            <div className="contact-image">
                <img src="/contactimage.png" />
            </div>
            <div className="contact-text">
                <h1>Contact</h1>
                <p>Camilla Borgqvist</p>
                <p>camilla.borgqvist@hotmail.com</p>
                <div className="logo-container">
                    <a href="https://github.com/CamillaBorgqvist" target="_blank" className="logo">
                        <img src="/logo-github.svg" alt="Github logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/camilla-borgqvist-99270b52/" target="_blank" className="logo">
                        <img src="/logo-linkedin.svg" alt="Linkedin logo"/>
                    </a>
                </div>
            </div>
                 
        </div>
    )
}