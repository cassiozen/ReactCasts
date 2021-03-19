export default function formatTime(time) {
  const mins = Math.floor(time / 60000);
  const secs = Math.floor(time / 1000) % 60;
  const ms = Math.floor((time / 100) % 10);

  if (secs < 10) return `${mins}:0${secs}.${ms}`;

  return `${mins}:${secs}.${ms}`;
}
