export function startTimer(duration: number, display: HTMLElement | null): void {
  let timer = duration,
    days: number,
    hours: number,
    minutes: number,
    seconds: number;

  if (!display) return;

  // Убеждаемся, что элементы внутри display найдены
  const daysElement = display.querySelector<HTMLElement>('#days');
  const hoursElement = display.querySelector<HTMLElement>('#hours');
  const minutesElement = display.querySelector<HTMLElement>('#minutes');
  const secondsElement = display.querySelector<HTMLElement>('#seconds');

  setInterval(() => {
    days = Math.floor(timer / (24 * 60 * 60));
    hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
    minutes = Math.floor((timer % (60 * 60)) / 60);
    seconds = Math.floor(timer % 60);

    if (daysElement) daysElement.textContent = days < 10 ? '0' + days : days.toString();
    if (hoursElement) hoursElement.textContent = hours < 10 ? '0' + hours : hours.toString();
    if (minutesElement) minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes.toString();
    if (secondsElement) secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds.toString();
    if (--timer < 0) {
      timer = 0;
    }
  }, 1000);
}
