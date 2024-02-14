export interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isTyping?: boolean;
  isBot?: boolean;
}