const CardContent = ({ messageContent, createdAtMessage }) => (
  <div>
    <span className="text-18-regular leading-7 tracking-[-0.01em] text-gray-600 flex-1 overflow-auto line-clamp-4 whitespace-normal break-words">
      {messageContent}
    </span>
    <p className="text-12-regular leading-4.5 tracking-[-0.005em] text-gray-400 absolute bottom-6 left-6">
      {createdAtMessage}
    </p>
  </div>
);

export default CardContent;
