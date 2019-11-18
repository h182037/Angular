export class Game {
    id: number;
    name: string;
    description: string;
    ratings: number[];
    score: number;
}

function toString(): string{
    return this.score;
}