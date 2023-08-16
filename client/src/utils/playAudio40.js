export const playAudio40 = async (buffer, context) => {
  try {
    const sourceNode = context.createBufferSource();
    sourceNode.buffer = buffer;
    
    const gainNode = context.createGain();
    gainNode.gain.value = 0.4; // Set volume to 40%
    
    sourceNode.connect(gainNode); // Connect sourceNode to gainNode
    gainNode.connect(context.destination); // Connect gainNode to destination
    
    sourceNode.playbackRate.value = 1.9; // Set playback rate
    
    sourceNode.start(0);
  } catch (error) {
    console.error("Error loading or decoding audio:", error);
  }
};