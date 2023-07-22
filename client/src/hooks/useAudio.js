import { useState, useEffect, useRef } from "react";

const useAudio = (src) => {
  const [reversedBuffer, setReversedBuffer] = useState(null);
  const cachedBuffersRef = useRef({});

  useEffect(() => {
    const fetchAndDecodeBuffer = async () => {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (cachedBuffersRef.current[src]) {
          return cachedBuffersRef.current[src];
        }

        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();
        const decodedData = await audioContext.decodeAudioData(arrayBuffer);

        const numChannels = decodedData.numberOfChannels;
        const numSamples = decodedData.length;
        const reversedBuffer = audioContext.createBuffer(
          numChannels,
          numSamples,
          decodedData.sampleRate
        );

        for (let channel = 0; channel < numChannels; channel++) {
          const inputData = decodedData.getChannelData(channel);
          const reversedData = reversedBuffer.getChannelData(channel);

          for (let i = 0; i < numSamples; i++) {
            reversedData[i] = inputData[numSamples - 1 - i];
          }
        }

        cachedBuffersRef.current[src] = reversedBuffer;
        setReversedBuffer(reversedBuffer);
        return reversedBuffer;
      } catch (error) {
        console.error("Error loading or decoding audio:", error);
        return null;
      }
    };

    fetchAndDecodeBuffer();
  }, [src]);

  return { reversedBuffer };
};

export default useAudio;
