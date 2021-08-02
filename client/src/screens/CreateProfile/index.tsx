import React from 'react';
import { DashHeader } from 'components/common/DashHeader';
import { CreateProfileSteps } from 'components/create-profile/Steps';
import { ProfileForm } from 'components/create-profile/index';

export const CreateProfile = () => {
  const [step, setStep] = React.useState(0);

  return (
    <div className='create-profile'>
      <DashHeader title='Create Your Profile' />
      <div className='create-profile__main'>
        <CreateProfileSteps step={step} />
        <ProfileForm step={step} setStep={setStep} />
      </div>
    </div>
  );
};
