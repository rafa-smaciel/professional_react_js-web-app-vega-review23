import React, { useEffect } from 'react';

const TeachableMachineComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.innerHTML = `
      let classifier;
      let imageModelURL = './my_model/';
      let video;
      let flippedVideo;
      let label = "";

      function preload() {
        classifier = ml5.imageClassifier(imageModelURL + 'model.json');
      }

      function setup() {
        createCanvas(320, 260);
        video = createCapture(VIDEO);
        video.size(320, 240);
        video.hide();
        flippedVideo = ml5.flipImage(video);
        classifyVideo();
      }

      function draw() {
        background(0);
        image(flippedVideo, 0, 0);
        fill(255);
        textSize(16);
        textAlign(CENTER);
        text(label, width / 2, height - 4);
      }

      function classifyVideo() {
        flippedVideo = ml5.flipImage(video);
        classifier.classify(flippedVideo, gotResult);
        flippedVideo.remove();
      }

      function gotResult(error, results) {
        if (error) {
          console.error(error);
          return;
        }
        label = results[0].label;
        classifyVideo();
      }
    `;

    document.body.appendChild(script);

    const p5Script = document.createElement('script');
    p5Script.src = "https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js";
    document.body.appendChild(p5Script);

    const p5DomScript = document.createElement('script');
    p5DomScript.src = "https://cdn.jsdelivr.net/npm/p5@latest/lib/addons/p5.dom.min.js";
    document.body.appendChild(p5DomScript);

    const ml5Script = document.createElement('script');
    ml5Script.src = "https://cdn.jsdelivr.net/npm/ml5@latest/dist/ml5.min.js";
    ml5Script.onload = () => window.preload(); // Invoca a função preload após o ml5 ser carregado
    document.body.appendChild(ml5Script);

  }, []);

  return <div>Teachable Machine Image Model - p5.js and ml5.js</div>;
};

export default TeachableMachineComponent;
