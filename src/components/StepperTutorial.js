import { makeStyles } from '@material-ui/core';
import React, { Component, useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  stepper:{
    background: "#c7ecee"
  },
  content:{
    padding:'30px',
    width: '100%',
    height: '200px',
    background: '#dff9fb'
  },
  button:{
    padding: '30px',
    width: '100%',
    height: '30px',
    background: '#c7ecee'
  }
});

const StepperHooks = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0); // 0으로 초기화
  const steps = ['스텝1', '스텝2', '스텝3'];
  const getStepContent = stepNumber => {
    switch (stepNumber) {
      case 0:
        return '로그인 하세요';
      case 1:
        return '상품을 장바구니에 담으세요';
      case 2:
        return '경품 응모를 하세요';
      default:
        return '알 수 없는 동작입니다';
    }
  }
  const handleNext = () => {
    setActiveStep(preActiveStep => preActiveStep + 1);
  }
  const handleBack = () => {
    setActiveStep(preActiveStep => preActiveStep - 1);
  }
  const handleReset = () => {
    setActiveStep(0);
  }

  return(
    <div>
      <Stepper className={classes.stepper} activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );

}

export default StepperHooks;
