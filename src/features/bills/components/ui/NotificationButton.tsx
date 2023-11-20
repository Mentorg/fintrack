import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function NotificationButton() {
  return (
    <>
      <Switch {...label} defaultChecked color="secondary" />
    </>
  );
}