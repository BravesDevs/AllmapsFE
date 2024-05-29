import reactLogo from './assets/image.png';
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
    } else {
      setReferences({});
      setData([]);
    }
  };

  return (
    <>
      <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col">
        <header className="flex items-center p-6 bg-gray-800 shadow-md">
          <div className="w-14 h-14 bg-gray-700 rounded-full overflow-hidden">
            <img className="logo object-cover" src={reactLogo} alt="logo" />
          </div>
          <div className="flex-1 ml-6">
            <input
              type="text"
              placeholder="I want to learn ..."
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="ml-6">
            <select
              className="px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setLevel(e.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </header>

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
