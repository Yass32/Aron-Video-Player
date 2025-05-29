import React from 'react';
import { Volume2 } from 'lucide-react';

const SpeakWord = ({ word, color }) => {
      // Function to speak the word using the Web Speech API
      const speak = () => {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US'; // You can change to 'en-GB', 'fr-FR', etc.
      speechSynthesis.speak(utterance);
      };

      return (
      <button
            onClick={speak}
            className={`gap-1 ${color} hover:-translate-y-1 transition duration-300 ease-in-out`}
            aria-label={`Speak ${word}`}
      >
            <Volume2 className="w-5 h-5" />
      </button>
      );
};


export default SpeakWord;

/*
[
      { "id": 1, "start": 4, "end": 16, "text": "Mom looks at the clock. 'Hurry up, Daisy! May will be here soon.' Daisy shakes her head. 'Hurry up, Mom! May will be here soon.' 'Hi! No rules today!'" },
      { "id": 2, "start": 17, "end": 25, "text": "'Morning, you two! I see you're ready for No Rules Day.' May looks at her watch. 'No, we won’t. It’s No Rules Day.'" },
      { "id": 3, "start": 26, "end": 35, "text": "Daisy, May, and George run to the school gate, where Miss Maybe is waiting. 'You three are late, so I had to send the bus for the trip.'" },
      { "id": 4, "start": 36, "end": 50, "text": "'We all remembered No Rules Day but forgot why we come to school on time,' May says unhappily. 'No Legoland. Everyone only had to be on time.' 'Let’s go and wait in the classroom,' Daisy says. They walk to the classroom." },
      { "id": 5, "start": 51, "end": 68, "text": "Miss Maybe talks to the class. 'If you are late again, you may miss something. Now it’s break time—enjoy the playground!' 'No rules today!' says May. 'No rules!' shouts George, climbing up the slide." },
      { "id": 6, "start": 69, "end": 79, "text": "'PEEP!' Miss blows the whistle as hard as she can. 'It’s not funny, George. We should hang our backpacks,' says Daisy." },
      { "id": 7, "start": 80, "end": 89, "text": "Miss Maybe points to the classroom rules poster. 'We have rules so we can all be safe. Now it’s time for our spelling test,' Miss Maybe tells them." },
      { "id": 8, "start": 90, "end": 102, "text": "'Shh, George! I can’t hear Miss Maybe.' George talks and talks. Miss Maybe writes the correct spellings on the whiteboard. 'You can check your tests,' she tells the class." },
      { "id": 9, "start": 103, "end": 112, "text": "'Oh no! I got so many wrong answers. I didn’t hear them,' says Daisy. 'Look! Number two was tall, not ball!' May groans." },
      { "id": 10, "start": 113, "end": 125, "text": "'Yummy, yummy, yummy... This is a great No Rules Day rule! Let’s get our main meal!' Daisy smiles a big smile. 'We can eat dessert first on No Rules Day,' says Daisy." },
      { "id": 11, "start": 126, "end": 139, "text": "A short time later, Daisy, May, and George are not happy. 'I am so full. This is my favorite meal! I can’t eat it!' moans May. 'Dessert first isn’t such a good rule,' says George." },
      { "id": 12, "start": 140, "end": 152, "text": "'I love math games afternoon! Come on, Daisy, let’s play this game.' 'Oh no, some of the cards are missing!' Lots of the math games have parts missing. The class can’t play them." },
      { "id": 13, "start": 153, "end": 164, "text": "'I’m sorry. Put the games in the math cupboard,' says Miss Maybe. She gives George math worksheets to hand out. He is not happy. 'Worksheets, not games...'" },
      { "id": 14, "start": 165, "end": 178, "text": "'Clean up your pencil cases!' calls Miss Maybe. She has their storybook in her hands. Daisy cleans up quickly. 'Oh, it’s the last chapter today! I’ve been waiting for this!'" },
      { "id": 15, "start": 179, "end": 190, "text": "'I can’t hear!' says May. Many students in the class are chatting and playing. 'I want to know how this story ends, and I can’t hear,' Daisy says sadly." },
      { "id": 16, "start": 191, "end": 205, "text": "Miss Maybe looks around the classroom. 'Oh dear, class. Clean-up time! But it’s a big cleanup,' she says. George cleans up the math games. May collects the math worksheets." },
      { "id": 17, "start": 206, "end": 220, "text": "The class and Miss Maybe make a new class rules poster. 'Number five: Be on time. We won’t miss our school trip again,' May reads the rules. 'I like number eight: No more falling over backpacks.'" },
      { "id": 18, "start": 221, "end": 234, "text": "At last, school is finished. Daisy, May, and George get ready to go home. 'Is this my cap? I can’t find a name in it. I can’t find my pencil case. I wish I put my name on it.'" },
      { "id": 19, "start": 235, "end": 255, "text": "Mom brings Daisy a drink. 'How was your day?' she says. 'It was horrible! We missed the school trip, I got my spellings wrong, and my hair is a mess!' Daisy cries. 'So rules are good then?' Mom asks. Daisy nods." }
    ]
*/