import { ref } from 'vue';
import type { GptRequest } from '@/models/gptRequest';
// export async function askChatGpt(question: string): Promise<string> {
//   const responseData = ref<string>('');
//   const requestData = ref<GptRequest>({} as GptRequest);
//   requestData.value.question = question;
//   try {
//     const response = await fetch('https://obaki-webapi.onrender.com/ask-chatgpt-bot', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestData.value)
//     });
//     if (response.ok) {
//       const apiResponse: string = await response.text();
//       responseData.value = apiResponse;
//     } else {
//       console.error(`Error fetching data. Status: ${response.status}`);
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }

//   return responseData.value;
// };


export async function askChatGpt(question: string): Promise<string> {
  // Simulate a 5-second delay (5000 milliseconds) using native setTimeout
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Array of random phrases
  const phrases: string[] = [
    'The quick brown fox jumps over the lazy dog.',
    'Coding is fun and challenging at the same time.',
    'Technology is constantly evolving.',
    'Keep calm and code on!',
    'A journey of a thousand miles begins with a single step.',
  ];

  // Select a random phrase
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  // Split the phrase into sentences
  const sentences = randomPhrase.split('.');

  // Take the first two sentences (or less if there are fewer than two)
  const result = sentences.slice(0, 2).join('.');

  return result;
};


