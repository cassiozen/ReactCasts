import React, { useState, useRef, useReducer, useEffect } from "react";
import formatTime from "./formatTime";
import "./StopWatch.css";

type MachineStateConfig = {
  effect: () => void | (() => void);
  on: {
    [key: string]: string;
  };
};

type MachineConfig = {
  initial: string;
  states: {
    [key: string]: MachineStateConfig;
  };
};

type keyOfObject<Obj> = Obj extends { [key: string]: string }
  ? keyof Obj
  : never;

function useMachine<Config extends MachineConfig>(config: Config) {
  type State = keyof Config["states"];
  type Event = keyOfObject<Config["states"][keyof Config["states"]]["on"]>;

  type MachineState = {
    current: State;
    nextEvents: Event[];
  };

  const initialState: MachineState = {
    current: config.initial,
    nextEvents: Object.keys(config.states[config.initial].on) as Event[],
  };

  const [machineState, send] = useReducer(
    (state: MachineState, event: Event) => {
      const currentStateNode = config.states[state.current as string];
      const nextState = currentStateNode.on[event as any];

      if (!nextState) return state;

      return {
        current: nextState,
        nextEvents: Object.keys(config.states[nextState].on) as Event[],
      };
    },
    initialState
  );

  useEffect(() => {
    return config.states[machineState.current as string]?.effect?.();
  }, [machineState.current]);

  return [machineState, send] as [MachineState, React.Dispatch<Event>];
}

function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalID = useRef<number>();
  const [currentMachine, send] = useMachine({
    initial: "idle",
    states: {
      idle: {
        on: { START: "running" },
        effect: () => {
          setTime(0);
          if (intervalID.current) clearInterval(intervalID.current);
          return () => console.log("leaving idle");
        },
      },
      running: {
        on: { PAUSE: "paused" },
        effect: () => {
          intervalID.current = setInterval(() => {
            setTime((t) => t + 100);
          }, 100);
        },
      },
      paused: {
        on: {
          RESET: "idle",
          START: "running",
        },
        effect: () => {
          clearInterval(intervalID.current);
        },
      },
    },
  });

  return (
    <div className="StopWatch">
      <div className="display">{formatTime(time)}</div>

      <div className="controls">
        {currentMachine.nextEvents.includes("START") && (
          <button type="button" onClick={() => send("START")}>
            Start
          </button>
        )}
        {currentMachine.nextEvents.includes("PAUSE") && (
          <button type="button" onClick={() => send("PAUSE")}>
            Pause
          </button>
        )}
        {currentMachine.nextEvents.includes("RESET") && (
          <button type="button" onClick={() => send("RESET")}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default StopWatch;
