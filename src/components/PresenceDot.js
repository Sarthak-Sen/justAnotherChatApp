import React from 'react';
import { Whisper, Tooltip, Badge } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

const getColour = presence => {
  if (!presence) {
    return 'grey';
  }

  switch (presence.state) {
    case 'online':
      return 'green';
    case 'offline':
      return 'red';
    default:
      return 'grey';
  }
};

const getText = presence => {
  if (!presence) {
    return 'Unknown State';
  }

  return presence.state === 'online'
    ? 'Online'
    : `Last Online ${new Date(presence.last_changed).toLocaleDateString()}`;
};

const PresenceDot = ({ uid }) => {
  const presence = usePresence(uid);

  return (
    <Whisper
      placement="top"
      trigger="hover"
      speaker={<Tooltip>{getText(presence)}</Tooltip>}
    >
      <Badge
        className="cursor-pointer"
        style={{ backgroundColor: getColour(presence) }}
      />
    </Whisper>
  );
};

export default PresenceDot;
