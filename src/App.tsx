import './App.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { createModel } from './helpers/functions';
import createEngine, {
  DiagramModel
} from '@projectstorm/react-diagrams';
import { Footer } from './components/Footer/Footer';
import MapCanvas from './components/MapCanvas/MapCanvas';
import References from './components/References/References';
import Navbar from './components/Navbar/Navbar';
import { applicationConfig } from '../configs/appConfig';


export const App = () => {
  const [data, setData] = useState<any[]>([]);
  let [model, setModel] = useState<DiagramModel | null>(null);
  let [references, setReferences] = useState<any>({});
  const engine = useRef(createEngine());
  const canvasRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [level, setLevel] = useState("Beginner");

  useEffect(() => {
    if (triggerSearch) {
      axios.post(applicationConfig.hostUrl + applicationConfig.generateEndpoint, {
        text: searchText,
        level: level,
      })
        .then((response: any) => {
          if (Array.isArray(response.data.roadmap)) {
            setData(response.data.roadmap);
            setReferences(response.data.references);
          } else {
            console.error("Response data is not an array:", response.data);
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setTriggerSearch(false));
    }
  }, [triggerSearch, searchText]);

  useEffect(() => {
    if (canvasRef.current && Array.isArray(data)) {
      model = createModel(new DiagramModel(), data);
      setModel(model);
      engine.current.setModel(model);
    }
  }, [data]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchText.length > 0) {
      setTriggerSearch(true);

    }
    setReferences({});
    setData([]);

  };

  // ...

  return (
    <>
      <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col">
        <Navbar
          searchText={searchText}
          setSearchText={setSearchText}
          handleKeyDown={handleKeyDown}
          setLevel={setLevel}
          level={level}
        />
        <main className="flex-grow p-6">
          <MapCanvas canvasRef={canvasRef} data={data} triggerSearch={triggerSearch} engine={engine.current} />
          <References references={references} triggerSearch={triggerSearch} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
