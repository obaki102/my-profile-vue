import { ref } from 'vue';
import type { GptRequest } from '@/models/gptRequest';
export async function askChatGpt(question: string): Promise<string> {
  return 'I am a seasoned developer with extensive experience in roles such as Senior Application Developer at IBM and Senior Software Engineer at Accenture. I have expertise in C#, Blazor, Power Platform, Azure, and various other technologies.'
  const responseData = ref<string>('');
  const requestData = ref<GptRequest>({} as GptRequest);
  requestData.value.question = question;
  try {
    const response = await fetch('https://obaki-webapi.onrender.com/ask-chatgpt-bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData.value)
    });
    if (response.ok) {
      const apiResponse: string = await response.text();
      responseData.value = apiResponse;
    } else {
      console.error(`Error fetching data. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return responseData.value;
};


