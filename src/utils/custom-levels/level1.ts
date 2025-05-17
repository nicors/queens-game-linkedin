import {
    altoMain,
    anakiwa,
    bittersweet,
    celadon,
    chardonnay,
    lightWisteria,
    saharaSand,
} from "../colors";

const level1 = {
    size: 7,
    colorRegions: [
        ["F", "B", "B", "B", "C", "C", "C"],
        ["F", "F", "F", "B", "D", "D", "C"],
        ["F", "A", "A", "A", "D", "C", "C"],
        ["G", "G", "D", "D", "D", "D", "C"],
        ["G", "G", "G", "G", "G", "D", "G"],
        ["G", "G", "E", "E", "G", "G", "G"],
        ["E", "E", "E", "E", "E", "G", "G"],
    ],
    regionColors: {
        A: lightWisteria,
        B: chardonnay,
        C: anakiwa,
        D: celadon,
        E: altoMain,
        F: bittersweet,
        G: saharaSand,
    },
};

export default level1;
  