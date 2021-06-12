import { ProfileForm } from 'components/forms/profile-form';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const CreateProfile = () => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);
  return (
    <div className='create-profile'>
      <div className={`create-profile__header ${mode}`}>
        <h2>Create Profile</h2>
      </div>
      <div className='create-profile__main'>
        <ProfileForm />
      </div>
    </div>
  );
};
