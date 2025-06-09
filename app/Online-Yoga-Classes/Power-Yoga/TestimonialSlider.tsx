"use client";

import React, { useState, useEffect } from "react";

type TimeZoneKey = "IST" | "PST" | "EST" | "GMT" | "CET" | "JST";

interface TimeZone {
  label: string;
  offset: number;
  currency: string;
  exchangeRateToUSD?: number; // only for non-USD currencies
}

const timeZones: Record<TimeZoneKey, TimeZone> = {
  IST: { label: "India (IST)", offset: 5.5, currency: "INR", exchangeRateToUSD: 83 },
  PST: { label: "US Pacific (PST)", offset: -8, currency: "USD" },
  EST: { label: "US Eastern (EST)", offset: -5, currency: "USD" },
  GMT: { label: "Greenwich Mean Time (GMT)", offset: 0, currency: "USD" },
  CET: { label: "Central Europe (CET)", offset: 1, currency: "EUR", exchangeRateToUSD: 0.92 },
  JST: { label: "Japan (JST)", offset: 9, currency: "JPY", exchangeRateToUSD: 156 },
};

function convertISTToTarget(
  istHour: number,
  istMin: number,
  targetOffset: number
): string {
  const IST_OFFSET = 5.5;
  const utcDate = new Date();
  utcDate.setUTCHours(istHour - IST_OFFSET, istMin, 0, 0);
  const localDate = new Date(utcDate.getTime() + targetOffset * 3600000);
  return localDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

const StickyCourseCard: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<TimeZoneKey>("IST");
  const [morningTime, setMorningTime] = useState("");
  const [eveningTime, setEveningTime] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [price, setPrice] = useState(250);

  useEffect(() => {
    const { offset, currency, exchangeRateToUSD } = timeZones[selectedZone];

    // Fixed IST base times (6:00–7:30 and 18:00–19:30)
    setMorningTime(
      `${convertISTToTarget(6, 0, offset)} – ${convertISTToTarget(7, 30, offset)}`
    );
    setEveningTime(
      `${convertISTToTarget(18, 0, offset)} – ${convertISTToTarget(19, 30, offset)}`
    );

    setCurrency(currency);

    if (currency === "USD") {
      setPrice(250);
    } else if (exchangeRateToUSD) {
      setPrice(Math.round(250 * exchangeRateToUSD));
    }
  }, [selectedZone]);

  return (
    <div className="w-full flex justify-center lg:justify-end">
      <div className="bg-gradient-to-br from-[#4377b2] to-[#365a92] border border-gray-300 shadow-lg rounded-2xl p-6 space-y-4 w-full max-w-md text-white">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-center">
          Online Power Yoga Class
        </h2>

        <div className="border-t border-b border-white/30 py-3 text-sm space-y-2">
          <p className="font-semibold">Class Highlights:</p>
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
          <p className="text-sm font-medium mb-1">Discounted Class Fees:</p>
          <p className="text-2xl font-bold">
            {currency} {price}
          </p>
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
