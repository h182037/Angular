export class Game {
    id: number;
    name: string;
    description: string;
    ratings: number[];
    score: number;
    url: string;
}

function toString(): string{
    return this.score;
}