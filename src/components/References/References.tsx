import { Key } from 'react';
import './main.css'
// type ReferencesType = {
//     [key: string]: string[];
// };


// Fuckin random light color generator.
const getRandomLighterColor = () => {
    const letters = 'BCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}


const References = ({ references }: any) => {
    const referenceKeys = Object.keys(references);

    return (
        <div className="mt-3.5 w-full h-96 bg-gray-800 rounded-md shadow-md overflow-y-scroll grid grid-cols-3 gap-4 p-4">
            {referenceKeys.length > 0 ? (
                referenceKeys.map((key) => (
                    <div key={key} className="rounded p-3 shadow-md" style={{ backgroundColor: getRandomLighterColor() }}>
                        <h3 className="text-lg font-bold mb-2 text-black">{key}</h3>
                        <ul>
                            {references[key].map((link: string, index: Key) => (
                                <li key={index}>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <div className="col-span-3 flex justify-center items-center h-full">
                    <p className="text-white">No references available</p>
                </div>
            )}
        </div>
    );
};

export default References;