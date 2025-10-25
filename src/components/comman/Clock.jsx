import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        timeZone: "America/Toronto",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const formatted = new Intl.DateTimeFormat("en-GB", options).format(now);
      setTime(formatted.replace(/:/g, ":"));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-white font-semibold text-sm tracking-wider">
      <Globe className="w-6 h-6 text-white" />
      <p className="text-md leading-[1.3] pt-1">{`MONTREAL_${time}`}</p>
    </div>
  );
};

export default Clock;
