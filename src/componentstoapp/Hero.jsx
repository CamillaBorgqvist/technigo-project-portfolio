export const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-text">
                <h3>Frontend Developer</h3>
                <h1>Camilla Borgqvist</h1>
                <p>I’m a newly graduated Frontend developer from Technigo Webdeveloper Bootcamp 2025, excited to keep on developing my skills in Frontend. <br /> <br />
                    
                    As a person I'm always eager to grow and learn new things, evolving both personally and professionally. 
                    In my work, I’m driven by finding smart, effective ways to improve processes and deliver the best possible 
                    service to customers. <br /> <br />
                    
                    I enjoy planning and working in a structured way, while also being creative with a sharp eye for details.
                    In my previous roles as a Systems Specialist and Site Manager, I’ve been responsible for broad, cross-functional areas, 
                    which has given me the ability to see the bigger picture and identify solutions that support overarching goals.
                </p>
                <div className="logo-container">
                    <a href="https://github.com/CamillaBorgqvist" target="_blank" className="logo">
                        <img src="/logo-github.svg" alt="Github logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/camilla-borgqvist-99270b52/" target="_blank" className="logo">
                        <img src="/logo-linkedin.svg" alt="Linkedin logo"/>
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <img src="/profilbild.jpg" />
            </div>
        </div>
    );
};
