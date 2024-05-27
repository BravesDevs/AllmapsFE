import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class APIDataDTO {
    id: string;
    title: string;
    color: string;
    attributes: string[];
    constructor(id: string, title: string, color: string, attributes: string[]) {
        this.id = id;
        this.title = title;
        this.color = color;
        this.attributes = attributes;
    }
}
