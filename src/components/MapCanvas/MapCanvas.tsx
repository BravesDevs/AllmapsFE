import { CanvasEngine, CanvasWidget } from "@projectstorm/react-diagrams";
import { Dimmer } from "semantic-ui-react";
import enterIcon from '../../assets/enter.png';
import { Loader } from "../UIComponents/Spinner/Spinner";

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
            {triggerSearch && data.length == 0 && (
                <div className="text-gray-400 flex items-center justify-center w-full h-full">
                    <Dimmer active>
                        <Loader message={"Generating map...."} />
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