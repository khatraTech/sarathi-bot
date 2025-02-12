# 🤖 Sarathi Bot

A highly customizable React chatbot component that seamlessly integrates into any web application. Sarathi (meaning "charioteer" or "guide" in Sanskrit) provides a modern, user-friendly chat interface with extensive customization options.

![NPM Version](https://img.shields.io/npm/v/sarathi-bot)
![License](https://img.shields.io/npm/l/sarathi-bot)
![React Version](https://img.shields.io/badge/react-%3E%3D16.8.0-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-%5E4.5.0-blue.svg)
![Bundle Size](https://img.shields.io/bundlephobia/min/sarathi-bot)

## ✨ Features

- 🎨 Fully customizable theme and styling
- 📱 Responsive and mobile-friendly
- 🔧 Configurable API endpoints
- 💬 Minimizable chat window
- 🎯 Flexible positioning
- 🌟 Smooth animations and transitions
- 📝 TypeScript support
- 🔒 Secure external links
- 🎭 Custom branding support

## 📦 Installation

```bash
# Using npm
npm install sarathi-bot

# Using yarn
yarn add sarathi-bot

# Using pnpm
pnpm add sarathi-bot
```

## 🚀 Quick Start

```jsx
import { ChatBot } from 'sarathi-bot';

function App() {
  return (
    <ChatBot
      companyName="Your Company"
      theme={{
        primary: '#2c3e50',
        secondary: '#f5f7fa',
        text: '#ffffff',
        background: '#ffffff'
      }}
      apiConfig={{
        host: 'your-api-host',
        port: '8000',
        protocol: 'http'
      }}
      initialMessage="Hello! How can I help you today?"
    />
  );
}
```

## 🛠️ Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `companyName` | string | Your company name to display in the chat header |
| `theme` | ThemeConfig | Color configuration for the chat interface |
| `apiConfig` | ApiConfig | Configuration for the chat API endpoint |

### Optional Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `logo` | string | URL to your company logo | undefined |
| `position` | PositionConfig | Position of the chat window | `{ bottom: '20px', right: '20px' }` |
| `initialMessage` | string | First message shown to users | undefined |
| `placeholder` | string | Placeholder text for input field | "Type your message..." |

### Theme Configuration

```typescript
interface ThemeConfig {
  primary: string;    // Primary color for headers and buttons
  secondary: string;  // Secondary color for backgrounds
  text: string;      // Text color for primary elements
  background: string; // Main background color
}
```

### Position Configuration

```typescript
interface PositionConfig {
  bottom?: string;  // Distance from bottom
  right?: string;   // Distance from right
  left?: string;    // Distance from left
  top?: string;     // Distance from top
}
```

### API Configuration

```typescript
interface ApiConfig {
  host: string;     // API host address
  port: string;     // API port
  protocol: string; // HTTP protocol (http/https)
}
```

## 💡 Examples

### Basic Usage

```jsx
import { ChatBot } from 'sarathi-bot';

function App() {
  return (
    <ChatBot
      companyName="Tech Solutions"
      theme={{
        primary: '#2c3e50',
        secondary: '#f5f7fa',
        text: '#ffffff',
        background: '#ffffff'
      }}
      apiConfig={{
        host: 'api.example.com',
        port: '8000',
        protocol: 'https'
      }}
    />
  );
}
```

### Custom Positioning

```jsx
<ChatBot
  companyName="Tech Solutions"
  position={{
    bottom: '40px',
    left: '20px' // Position on the left instead of right
  }}
  theme={{
    primary: '#3498db',
    secondary: '#ecf0f1',
    text: '#ffffff',
    background: '#ffffff'
  }}
  apiConfig={{...}}
/>
```

### With Company Logo

```jsx
<ChatBot
  companyName="Tech Solutions"
  logo="/path/to/your/logo.png"
  theme={{
    primary: '#9b59b6',
    secondary: '#f5f5f5',
    text: '#ffffff',
    background: '#ffffff'
  }}
  apiConfig={{...}}
  initialMessage="👋 Welcome! How can I assist you today?"
/>
```

## 🔌 API Integration

The chatbot expects your API endpoint to accept POST requests with the following structure:

```typescript
// Request
{
  query: string; // The user's message
}

// Expected Response
{
  response: string; // The bot's response message
}
```

Example API implementation:

```javascript
app.post('/chat', (req, res) => {
  const { query } = req.body;
  // Process the query and generate response
  res.json({ response: 'Your bot response here' });
});
```

## 🎨 Styling Guide

The chatbot comes with a default theme but can be fully customized. Here are some theme examples:

### Professional Theme
```javascript
{
  primary: '#2c3e50',
  secondary: '#f5f7fa',
  text: '#ffffff',
  background: '#ffffff'
}
```

### Friendly Theme
```javascript
{
  primary: '#3498db',
  secondary: '#ecf0f1',
  text: '#ffffff',
  background: '#ffffff'
}
```

### Modern Theme
```javascript
{
  primary: '#9b59b6',
  secondary: '#f5f5f5',
  text: '#ffffff',
  background: '#ffffff'
}
```

## 🚧 Troubleshooting

Common issues and solutions:

1. **Chat window not appearing**
   - Check if the component is properly imported
   - Verify z-index conflicts with other elements

2. **API connection issues**
   - Verify API configuration
   - Check CORS settings on your server
   - Ensure API endpoint is accessible

3. **Styling conflicts**
   - The chatbot uses scoped styles to prevent conflicts
   - Adjust z-index if needed
   - Use position props to adjust placement

## 📱 Mobile Responsiveness

The chatbot is mobile-friendly by default. On smaller screens:
- Maintains functionality and appearance
- Adjusts size appropriately
- Remains easily minimizable
- Preserves all features

## 🔒 Security

- All external links open in new tabs with security attributes
- API calls can be made over HTTPS
- No storage of sensitive data
- Proper error handling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT © [Khatra Tech](https://github.com/khatraTech)

## 👥 Author

**Khatra Tech**
- Website: [https://khatratech.com](https://khatratech.com)
- GitHub: [@khatraTech](https://github.com/khatraTech)
- Email: contact@khatratech.com

## 💪 Support

For support, email support@khatratech.com or create an issue in the GitHub repository.

---
Built with ❤️ by [Khatra Tech](https://khatratech.com)