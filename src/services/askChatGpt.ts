import type { GptRequest, GptResponse } from '@/models/chatTypes';

export async function askChatGpt(question: string): Promise<GptResponse> {
  const requestData: GptRequest = { question };
  let errorMessage: string = '';
  try {
    const response = await fetch( import.meta.env.VITE_ASK_CHAT_GPT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    });

    if (response.ok) {
      const apiResponse: string = await response.text();
      const successResponse: GptResponse = {
        answer: apiResponse,
        error: {
          isError: false,
          errorMessage: ''
        }
      };
      return successResponse;
    } else {
      errorMessage = `Error fetching data. Status: ${response.status}`;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    errorMessage = `Error fetching data. Status: ${error}`;
  }

  const invalidResponse: GptResponse = {
    answer: '',
    error: {
      isError: true,
      errorMessage: errorMessage
    }
  };
  return invalidResponse;
};


// export async function askChatGpt(question: string): Promise<GptResponse> {
//   // Simulate a 5-second delay (5000 milliseconds) using native setTimeout
//   await new Promise(resolve => setTimeout(resolve, 5000));

//   // Array of random phrases
//   const phrases: string[] = [
//     'The quick brown fox jumps over the lazy dog.',
//     'Coding is fun and challenging at the same time.',
//     'Technology is constantly evolving.',
//     'Keep calm and code on!',
//     'A journey of a thousand miles begins with a single step.',
//   ];

//   // Select a random phrase
//   const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

//   // Split the phrase into sentences
//   const sentences = randomPhrase.split('.');

//   // Take the first two sentences (or less if there are fewer than two)
//   const result = sentences.slice(0, 2).join('.');

//    const response: GptResponse = {
//     answer: result,
//     error: {
//       isError: false,
//       errorMessage: ''
//     }
//   };

//   return response;
// };


