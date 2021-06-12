import { useHistory } from 'react-router';
import { ChatsBtn } from './ChatsBtn';
import { SettingsLink } from './Link';
import { Modes } from './Modes';
import { Themes } from './Themes';

export const Settings = () => {
  const history = useHistory();
  const redirectToEdit = () => history.push('/dashboard/profile-form');
  const redirectToSignout = () => history.push('/dashboard/signout');
  return (
    <div className='settings'>
      <Themes />
      <Modes />
      <ChatsBtn />
      <SettingsLink
        text='Edit Profile'
        icon='edit'
        cb={() => redirectToEdit()}
      />
      <SettingsLink
        text='Signout'
        icon='logout'
        cb={() => redirectToSignout()}
      />
    </div>
  );
};
