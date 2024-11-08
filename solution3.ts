{

const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.toUpperCase().split(" ");
    const targetWord = word.toUpperCase();

    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === targetWord) {
            count++;
        }
    }

    return count;
};

const sentence = "The typeScript is great. i love typeScript";
const word = "typescript";

const result = countWordOccurrences(sentence, word);

console.log(result);


}