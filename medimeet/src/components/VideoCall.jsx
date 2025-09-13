import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const VideoCall = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        zIndex: 9999,
        backgroundColor: '#000', // fallback color
      }}
    >
      <JitsiMeeting
        domain="meet.jit.si"
        roomName="MediMeetRoom123"
        configOverwrite={{
          startWithAudioMuted: false,
          disableModeratorIndicator: false,
          enableEmailInStats: false,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        userInfo={{
          displayName: 'MediMeet User',
        }}
        onApiReady={(externalApi) => {
          console.log('Jitsi API loaded!', externalApi);
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.border = '0px';
          iframeRef.style.width = '100%';
          iframeRef.style.height = '100%';
        }}
      />
    </div>
  );
};

export default VideoCall;
