"use client";

import React, { useState, useEffect } from "react";

// Time zone options
type TimeZoneKey = "IST" | "PST" | "EST" | "GMT" | "CET" | "JST";

interface TimeZone {
  label: string;
  offset: number;
}

const timeZones: Record<TimeZoneKey, TimeZone> = {
  IST: { label: "India (IST)", offset: 5.5 },
  PST: { label: "US Pacific (PST)", offset: -8 },
  EST: { label: "US Eastern (EST)", offset: -5 },
  GMT: { label: "Greenwich Mean Time (GMT)", offset: 0 },
  CET: { label: "Central Europe (CET)", offset: 1 },
  JST: { label: "Japan (JST)", offset: 9 },
};

// Convert IST time to another timezone
function convertTime(istHour: number, istMin: number, targetOffset: number): string {
  const IST_OFFSET = 5.5;
  const date = new Date();
  date.setUTCHours(istHour - IST_OFFSET, istMin, 0, 0); // IST to UTC
  const localDate = new Date(date.getTime() + targetOffset * 3600000); // UTC to local
  return localDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
}

const StickyCourseCard: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<TimeZoneKey>("IST");
  const [morningTime, setMorningTime] = useState("");
  const [eveningTime, setEveningTime] = useState("");

  useEffect(() => {
    const offset = timeZones[selectedZone].offset;
    setMorningTime(`${convertTime(6, 0, offset)} – ${convertTime(7, 30, offset)}`);
    setEveningTime(`${convertTime(18, 0, offset)} – ${convertTime(19, 30, offset)}`);
  }, [selectedZone]);

  return (
    <div className="hidden lg:flex justify-end sticky top-24 h-fit w-full pr-8">
      <div className="bg-gradient-to-br from-[#4377b2] to-[#365a92] border border-gray-300 shadow-lg rounded-2xl p-6 space-y-4 w-80 text-white">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-center">
          25 Hrs Online Yoga Anatomy For Safety
        </h2>

        <div className="border-t border-b border-white/30 py-3 text-sm space-y-2">
          <p className="font-semibold">Course Highlights:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Starting 1st of every month</li>
            <li>Ends 15th of every month</li>
            <li>15 Days Program</li>
            <li>Daily 3 hrs</li>

            <li>
              <div className="flex flex-col">
                <label className="mb-1">Choose Timezone:</label>
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value as TimeZoneKey)}
                  className="text-black px-2 py-1 rounded"
                >
                  {Object.entries(timeZones).map(([key, tz]) => (
                    <option key={key} value={key}>
                      {tz.label}
                    </option>
                  ))}
                </select>
              </div>
            </li>

            <li>Morning Session: {morningTime}</li>
            <li>Evening Session: {eveningTime}</li>
            <li>Instructed in English</li>
            <li>Weekly Sunday Off</li>
            <li>Most Recommended Teacher</li>
            <li>Accredited by Yoga Alliance</li>
          </ul>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          <p className="text-sm font-medium mb-1">Discounted Course Fees:</p>
          <p className="text-2xl font-bold">USD 250</p>
          <p className="text-xs text-white/80">(Included All Tax)</p>
        </div>

        <button className="bg-white hover:bg-gray-200 text-[#4377b2] px-5 py-2.5 rounded-full font-medium flex items-center justify-center space-x-2 text-sm w-full transition duration-200">
          <span>BOOK YOUR SEAT NOW</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default StickyCourseCard;
