
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
  
function App() {
  function handleClick(){
        console.log("Mohd Sahil");
    }

  return (
    <div>
      <Header/> 
      <main>
        <section id='core-concepts'>
          
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title= {CORE_CONCEPTS[0].title} description= {CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept title= {CORE_CONCEPTS[1].title} description= {CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            {/* or */}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            <CoreConcept concept = {CORE_CONCEPTS[0]} />

            
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleClick}>Components</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
          </menu>
           content
        </section>
      </main>
    </div>
  );
}

export default App;
