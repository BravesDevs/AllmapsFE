import { CanvasEngine, CanvasWidget } from "@projectstorm/react-diagrams";
import { Dimmer, Loader } from "semantic-ui-react";
import enterIcon from '../../assets/enter.png';

type MapCanvasProps = {
    canvasRef: any;
    data: any;
    triggerSearch: any;
    engine: CanvasEngine;
};

const MapCanvas = ({ canvasRef, data, triggerSearch, engine }: MapCanvasProps) => {
    return (
        <div ref={canvasRef} className="w-full h-96 bg-gray-800 rounded-md shadow-md overflow-hidden">
            {data.length > 0 && <CanvasWidget className="w-full h-96" engine={engine} />}
            {triggerSearch && (
                <div className="text-gray-400 flex items-center justify-center w-full h-full">
                    <Dimmer active>
                        <Loader>Loading</Loader>
                    </Dimmer>
                </div>
            )}
            {data.length === 0 && (
                <div className="text-gray-400 flex items-center justify-center w-full h-full">
                    <p>Search Skill and hit</p>
                    <img src={enterIcon} alt="enter" className="w-6 h-6 ml-2 bg-white" />
                </div>
            )}
        </div>
    );
};

export default MapCanvas;