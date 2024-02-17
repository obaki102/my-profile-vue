export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  isTyping?: boolean;
  isError?: boolean;
  errorMessage: string;
  isBot?: boolean;
}