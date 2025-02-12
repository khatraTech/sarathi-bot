// export interface ChatBotProps {
//   companyName: string;
//   theme: {
//     primary: string;
//     secondary: string;
//     text: string;
//     background: string;
//   };
//   logo?: string;
//   position?: {
//     bottom?: string;
//     right?: string;
//     left?: string;
//     top?: string;
//   };
//   apiConfig: {
//     host: string;
//     port: string;
//     protocol: string;
//   };
//   initialMessage?: string;
//   placeholder?: string;
// }

// export interface Message {
//   sender: 'user' | 'bot';
//   text: string;
//   timestamp: number;
// }

export interface ChatBotProps {
    companyName: string;
    theme: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
    };
    logo?: string;
    position?: {
      bottom?: string;
      right?: string;
      left?: string;
      top?: string;
    };
    apiConfig: {
      host: string;
      port: string;
      protocol: string;
    };
    initialMessage?: string;
    placeholder?: string;
  }
  
  export interface Message {
    sender: 'user' | 'bot';
    text: string;
    timestamp: number;
  }