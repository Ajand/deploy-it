import { useState } from "react";

const useStepper = ({ steps }) => {
  const [step, setStep] = useState(0);

  const nextEnabled =
    step < steps.length - 1 && steps[step].requirement
      ? steps[step].requirement()
      : true;
  const backEnabled = step > 0;
  const isLastStep = step === steps.length - 1;

  const next = () =>
    setStep((step) => {
      if (nextEnabled) return step + 1;
    });

  const back = () =>
    setStep((step) => {
      if (step > 0) {
        return step - 1;
      }
    });

  const renderStep = () => {
    return steps[step].content;
  };

  return {
    nextEnabled,
    backEnabled,
    isLastStep,
    step,
    next,
    back,
    renderStep,
  };
};

export default useStepper;
