export const playAudio = async (buffer, context) => {
  try {
    const sourceNode = context.createBufferSource();
    sourceNode.buffer = buffer;
    sourceNode.connect(context.destination);
    sourceNode.start(0);
  } catch (error) {
    console.error("Error loading or decoding audio:", error);
  }
};
