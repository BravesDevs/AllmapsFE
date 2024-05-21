import reactLogo from './assets/image.png';
import enterIcon from './assets/enter.png';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel
} from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import { Footer } from './components/footer/Footer';

export const App = () => {
  const [data, setData] = useState<any[]>([]);
  const [model, setModel] = useState<DiagramModel | null>(null);
  const engine = useRef(createEngine());
  const canvasRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [level, setLevel] = useState("Beginner");

  useEffect(() => {
    if (triggerSearch) {
      axios.post('http://localhost:3000/api/proc/gen', {
        text: searchText,
        level: level,
      })
        .then((response) => {
          if (Array.isArray(response.data)) {
            setData(response.data);
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
      // Create a new diagram model
      const newModel = new DiagramModel();

      // Create nodes and links from data
      data.forEach((item, index) => {
        const node = new DefaultNodeModel({
          name: item.title,
          color: 'rgb(0,192,255)',
        });
        node.setPosition(index * 180, 150);
        const port = node.addOutPort((index + 1).toString());

        // Create a link between this node and the previous node, if any
        if (index > 0) {
          const prevNode = newModel.getNodes()[index - 1] as DefaultNodeModel;
          const prevPort = Object.values(prevNode.getPorts())[0];
          const link = new DefaultLinkModel();
          link.setSourcePort(prevPort);
          link.setTargetPort(port);
          newModel.addLink(link);
        }

        newModel.addNode(node);
      });

      // Update the model
      setModel(newModel);
      engine.current.setModel(newModel);
      // newModel.setLocked(true);
    }
  }, [data]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Key pressed:", event.key);
    if (event.key === 'Enter' && searchText.length > 0) {
      setTriggerSearch(true);
    }
    else {
      setData([]);
    }
  };

  return (
    <>
      <div className="bg-white text-black font-sans min-h-screen flex flex-col">
        <header className="flex items-center p-6 bg-gray-100 shadow-md">
          <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden">
            <img className="logo object-cover" src={reactLogo} alt="logo" />
          </div>
          <div className="flex-1 ml-6">
            <input
              type="text"
              placeholder="I want to learn ..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          {/* Drop down for level of difficulty. Beginner, Intermediate or Advanced */}
          <div className="ml-6">
            <select
              className="px-4 py-2 rounded-md border border-gray-300 bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setLevel(e.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </header>

        <main className="flex-grow p-6">
          <div ref={canvasRef} className="w-full h-96 bg-white rounded-md shadow-md overflow-hidden">
            {data.length > 0 && <CanvasWidget className="w-full h-full" engine={engine.current} />}
            {/* Add Loader */}

            {triggerSearch && (
              <div className="text-gray-400 flex items-center justify-center w-full h-full">
                <Segment>
                  <Dimmer active>
                    <Loader size='massive'>Loading</Loader>
                  </Dimmer>
                </Segment>              </div>
            )}

            {data.length === 0 && (
              <div className="text-gray-400 flex items-center justify-center w-full h-full">
                <p>Search Skill and hit</p>
                <img src={enterIcon} alt="Enter Icon" />
              </div>
            )}
          </div>
        </main >

        <Footer />

      </div >
    </>
  );




}

export default App;
