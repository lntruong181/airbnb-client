import Button from '@/components/Button';
import zaloService from '@/services/zalo.service';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DemoZalo = () => {
  const location = useLocation();
  const formData = new URLSearchParams(location.search);
  formData.delete('state');
  formData.append('app_id', '3971526071644904828');
  formData.append('grant_type', 'authorization_code');

  const handleLoginZalo = async () => {
    const zaloAuthURL =
      'https://oauth.zaloapp.com/v4/permission?app_id=3971526071644904828&redirect_uri=http://localhost:3000/demo&state=test';

    window.location.href = zaloAuthURL;
    return null;
  };

  const getUserAccessToken = async () => {
    if (formData.get('code')) {
      return zaloService.signIn(formData);
    }
  };

  useEffect(() => {
    getUserAccessToken();
  });

  const handleChat = async () => {
    await zaloService.sendMessage();
  };

  const handleGetFollowers = async () => {
    await zaloService.getFollowers();
  };
  return (
    <div>
      <Button onClick={handleLoginZalo}>Get token</Button>
      <Button onClick={handleChat}>Chat</Button>
      <Button onClick={handleGetFollowers}>Get Followers</Button>
    </div>
  );
};
export default DemoZalo;
