"use client";

import { useEffect, useRef } from "react";

export default function VideoCallPage() {
  const jitsiContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const domain = "meet.jit.si";
    const roomName = `DermatologyRoom-${Math.floor(Math.random() * 100000)}`;
    const options = {
      roomName: roomName,
      parentNode: jitsiContainerRef.current,
      width: "100%",
      height: "100%",
    };

    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      new window.JitsiMeetExternalAPI(domain, options);
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-screen h-screen bg-black">
      <div ref={jitsiContainerRef} className="w-full h-full" />
    </div>
  );
}
