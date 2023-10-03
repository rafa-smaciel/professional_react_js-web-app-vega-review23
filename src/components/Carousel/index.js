import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import grafanaImg from '../../assets/grafana.jpeg';
import noderedImg from '../../assets/nodered.jpeg';
import monitorImg from '../../assets/monitor.jpeg';
import mqttImg from '../../assets/mqtt.jpeg';
import sqlbanco from '../../assets/sqlbanco.jpeg';
import vscodeImg from '../../assets/vscode.jpeg';
import sqlserver from '../../assets/sqlserver.jpeg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Grafana',
    imgPath: grafanaImg,
  },
  {
    label: 'nodered',
    imgPath: noderedImg,
  },
  {
    label: 'monitor',
    imgPath: monitorImg,
  },
  {
    label: 'mqttImg',
    imgPath: mqttImg,
  },
  {
    label: 'sqlbanco',
    imgPath: sqlbanco,
  },
  {
    label: 'vscodeImg',
    imgPath: vscodeImg,
  },
  {
    label: 'sqlserver',
    imgPath: sqlserver,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          background: 'transparent',
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{
              '&.Mui-disabled': {
                color: 'gray',
                opacity: .4
              }
            }}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft sx={{ color: 'red' }} />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              '&.Mui-disabled': {
                color: 'gray',
                opacity: .4
              }
            }}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;