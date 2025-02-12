import { ChatBotProps } from '../types';

export const generateStyles = (props: ChatBotProps) => ({
  chatBox: {
    position: 'fixed' as const,
    bottom: props.position?.bottom || '20px',
    right: props.position?.right || '20px',
    left: props.position?.left,
    top: props.position?.top,
    width: '380px',
    borderRadius: '12px',
    background: props.theme.background,
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'hidden',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    zIndex: 9999,
  },

  header: {
    background: props.theme.primary,
    color: props.theme.text,
    padding: '15px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    height: '24px',
    marginRight: '10px',
  },

  messagesContainer: {
    height: '400px',
    overflowY: 'auto' as const,
    padding: '20px',
    background: props.theme.secondary,
    scrollBehavior: 'smooth' as const,
  },

  message: {
    marginBottom: '15px',
    maxWidth: '80%',
    wordWrap: 'break-word' as const,
    animation: 'fadeIn 0.3s ease-out',
  },

  userMessage: {
    marginLeft: 'auto',
    background: props.theme.primary,
    color: props.theme.text,
    padding: '10px 15px',
    borderRadius: '15px 15px 0 15px',
  },

  botMessage: {
    marginRight: 'auto',
    background: props.theme.background,
    color: '#2c3e50',
    padding: '10px 15px',
    borderRadius: '15px 15px 15px 0',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },

  inputContainer: {
    display: 'flex',
    padding: '15px',
    background: props.theme.background,
    borderTop: `1px solid ${props.theme.secondary}`,
  },

  input: {
    flexGrow: 1,
    padding: '10px',
    border: `1px solid ${props.theme.secondary}`,
    borderRadius: '20px',
    marginRight: '10px',
    outline: 'none',
  },

  sendButton: {
    background: props.theme.primary,
    color: props.theme.text,
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
  },

  footer: {
    padding: '8px 15px',
    borderTop: `1px solid ${props.theme.secondary}`,
    background: props.theme.background,
    fontSize: '12px',
    textAlign: 'center' as const,
    color: '#666',
  },

  poweredByLink: {
    color: props.theme.primary,
    textDecoration: 'none',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'opacity 0.3s ease',
  },
});
