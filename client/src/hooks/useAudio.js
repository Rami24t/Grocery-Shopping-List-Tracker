import { useState, useEffect, useRef } from "react";

const useAudio = (src) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const [reversedBuffer, setReversedBuffer] = useState(null);
  const cachedBuffersRef = useRef({});

  useEffect(() => {
    const fetchAndDecodeBuffer = async (audioContext, src) => {     
        if (cachedBuffersRef.current[src]) {
          return cachedBuffersRef.current[src];
        }
      
        const arrayBuffer = await fetch(src).then((response) => response.arrayBuffer());
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
      };
  
      if (!cachedBuffersRef.current[src]) {
        fetchAndDecodeBuffer(audioContext, src);
      } else {
        setReversedBuffer(cachedBuffersRef.current[src]);
      }
  
      return () => {
        audioContext.close();
      };
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src]);
  
    return { audioContext, reversedBuffer };
  };
  
  export default useAudio;