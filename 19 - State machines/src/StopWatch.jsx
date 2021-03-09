import React, { useState, useRef } from "react";
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import formatTime from "./formatTime";
import "./StopWatch.css";

function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalID = useRef();
  const [machine, send] = useMachine(
    Machine({
      initial: "idle",
      states: {
        idle: {
          on: {
            START: "running",
          },
          entry: () => {
            setTime(0);
            clearInterval(intervalID.current);
          },
        },
        running: {
          on: {
            PAUSE: "paused",
          },
          entry: () => {
            intervalID.current = setInterval(() => {
              setTime((t) => t + 1);
            }, 100);
          },
        },
        paused: {
          on: {
            RESET: "idle",
            START: "running",
          },
          entry: () => {
            clearInterval(intervalID.current);
          },
        },
      },
    })
  );

  return (
    <div className="StopWatch">
      <div className="display">{formatTime(time)}</div>

      <div className="controls">
        {machine.nextEvents.includes("START") && (
          <button type="button" onClick={() => send("START")}>
            Start
          </button>
        )}

        {machine.nextEvents.includes("PAUSE") && (
          <button type="button" onClick={() => send("PAUSE")}>
            Pause
          </button>
        )}

        {machine.nextEvents.includes("RESET") && (
          <button type="button" onClick={() => send("RESET")}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default StopWatch;
