export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  isTyping?: boolean;
  isBot?: boolean;
}