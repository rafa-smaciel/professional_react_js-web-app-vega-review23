import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as S from "./styles";
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs-backend-webgl';
import TeachableMachineComponent from './TeachableMachineComponent';

export const ObjectDetection = () => {
  const webcamRef = useRef();
  const canvasRef = useRef();
  const [detectionMode, setDetectionMode] = useState('coco-ssd');

  const loadModelAndDetectObjects = async () => {
    if (detectionMode === 'coco-ssd') {
      try {
        await tf.backend('webgl');
        const model = await cocossd.load();
        detectObjects(model);
      } catch (error) {
        console.error('Erro ao carregar o modelo:', error);
      }
    }
  };

  const detectObjects = async (model) => {
    if (detectionMode === 'coco-ssd' && webcamRef.current && canvasRef.current) {
      const video = webcamRef.current.video;

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const predictions = await model.detect(video);
        renderPredictions(predictions);
        requestAnimationFrame(() => {
          detectObjects(model);
        });
      } else {
        setTimeout(() => {
          detectObjects(model);
        }, 50);
      }
    }
  };

  const renderPredictions = (predictions) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.canvas.width = webcamRef.current.video.videoWidth;
    ctx.canvas.height = webcamRef.current.video.videoHeight;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    predictions.forEach((prediction) => {
      const [x, y, width, height] = prediction['bbox'];
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.8)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);

      ctx.font = '18px Arial';
      ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
      const labelText = `${prediction['class']} ${(prediction['score'] * 100).toFixed(2)}%`;
      ctx.fillText(labelText, x, y - 5);
    });
  };

  useEffect(() => {
    loadModelAndDetectObjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detectionMode]);

  return (
    <S.Container>
      <S.StyledTitle>Detecção de Objetos</S.StyledTitle>
      <S.VideoCanvasWrapper>
        {detectionMode === 'coco-ssd' ? (
          <>
            <Webcam
              ref={webcamRef}
              width="600"
              height="400"
              mirrored={false}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: 'environment' }}
            />
            <S.StyledCanvas ref={canvasRef} />
          </>
        ) : (
          <TeachableMachineComponent />
        )}
      </S.VideoCanvasWrapper>
      <S.SelectorWrapper>
        <label>
          Modo de Detecção:
          <select onChange={e => setDetectionMode(e.target.value)}>
            <option value="coco-ssd">COCO-SSD</option>
            <option value="teachable-machine">Teachable Machine</option>
          </select>
        </label>
      </S.SelectorWrapper>
    </S.Container>
  );
}
