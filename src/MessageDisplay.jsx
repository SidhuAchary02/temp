/**
 * A simple React component that displays a message.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.message - The message to display.
 * @returns {JSX.Element} A React component displaying the message.
 */
const MessageDisplay = ({ message }) => {
  return <div className="p-4 border rounded-md shadow-md bg-white">{message}</div>;
};

export default MessageDisplay;
