export interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isBot?: boolean;
}