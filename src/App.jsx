import data from "./data.json"
import "./index.css";
import { Hero } from "./componentstoapp/Hero"
import { Skills } from "./componentstoapp/Skills";
import { Projects} from "./componentstoapp/Projects";
import { Contact } from "./componentstoapp/Contact";

export const App = () => {
  
  return (
    <div className="App">
      <Hero />
      <Skills skills={data.skills}/>
      <Projects />
      <Contact />
    </div>
  );
};
