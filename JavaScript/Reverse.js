import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (inputSentence) => {
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log('Reversed sentence:', reversedSentence);
  rl.close();
});

function reverseWordsInSentence(sentence) {
    
    const words = sentence.split(' ');

    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });

    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }
  
  
  