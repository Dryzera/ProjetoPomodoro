export default function formattedSecondsRemaining(secondsRemaining: number) {
    const newSeconds = secondsRemaining - 1;

    const minutes = Math.floor(newSeconds / 60);
    const restSeconds = newSeconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(restSeconds).padStart(
        2,
        '0',
    )}`;
}
