export interface GptRequest {
  question: string
}

export interface GptResponse {
  answer: string
  error: {
    isError: boolean,
    errorMessage: string

  }
}
