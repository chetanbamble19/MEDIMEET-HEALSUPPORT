'use client';
import React, { useRef, useState } from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

export default function VideoCallUI() {
  const roomName1 = `medimeet-room-123`;
  const roomName2 = `medimeet-room-123`; // same room for both windows or different if needed

  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f0f0f0',
        padding: 0,
        margin: 0,
      }}
    >
      {/* Button to toggle fullscreen */}
      <button
        onClick={toggleFullscreen}
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 1000,
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
        }}
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>

      {/* First Jitsi window */}
      <div
        style={{
          flex: 1,
          height: '100vh',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          borderRadius: 0,
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        <JitsiMeeting
          domain="meet.jit.si"
          roomName={roomName1}
          configOverwrite={{
            startWithAudioMuted: false,
            startWithVideoMuted: false,
            prejoinPageEnabled: false,
          }}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
            SHOW_JITSI_WATERMARK: false,
            TOOLBAR_BUTTONS: ['fullscreen', 'microphone', 'camera', 'chat', 'hangup'],
          }}
          userInfo={{ displayName: 'User 1' }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.border = '0px';
            iframeRef.style.width = '100%';
            iframeRef.style.height = '100%';
          }}
        />
      </div>

      {/* Second Jitsi window */}
      <div
        style={{
          flex: 1,
          height: '100vh',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          borderRadius: 0,
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        <JitsiMeeting
          domain="meet.jit.si"
          roomName={roomName2}
          configOverwrite={{
            startWithAudioMuted: false,
            startWithVideoMuted: false,
            prejoinPageEnabled: false,
          }}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
            SHOW_JITSI_WATERMARK: false,
            TOOLBAR_BUTTONS: ['fullscreen', 'microphone', 'camera', 'chat', 'hangup'],
          }}
          userInfo={{ displayName: 'User 2' }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.border = '0px';
            iframeRef.style.width = '100%';
            iframeRef.style.height = '100%';
          }}
        />
      </div>
    </div>
  );
}
