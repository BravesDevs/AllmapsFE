import { DefaultLinkModel, DefaultNodeModel, DiagramModel } from "@projectstorm/react-diagrams"
import { APIDataDTO } from "../types/api.dto"
export const createModel = (model: DiagramModel, data: APIDataDTO[]): DiagramModel => {

    data.forEach((item: APIDataDTO, index: number) => {
        const node = new DefaultNodeModel({
            name: item.title,
            color: item.color,
        });
        node.setPosition(index * 180, 150);

        item.attributes.forEach((attribute: string) => {
            node.addInPort(attribute);
        });


        const port = node.addOutPort((index + 1).toString());

        if (index > 0) {
            const prevNode = model.getNodes()[index - 1] as DefaultNodeModel;
            const prevPort = Object.values(prevNode.getPorts())[0];
            const link = new DefaultLinkModel();
            link.setSourcePort(prevPort);
            link.setTargetPort(port);
            model.addLink(link);
        }
        model.addNode(node);
    });

    return model

}