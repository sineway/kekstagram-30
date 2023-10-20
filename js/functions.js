const fitsLength = (text, maxLength) => text.length <= maxLength;

const isPalindrome = (sequence) => {
  const text = String(sequence).replaceAll(' ', '').toLowerCase();
  const reversedText = text.split('').reverse().join('');
  return text === reversedText;
};

const parseDigits = (sequence) => {
  const digits = String(sequence).replace(/[^0-9]+/g, '');
  return digits ? Number(digits) : NaN;
};

const parseMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const validateMeetingTime = (workStart, workEnd, meetingStart, meetingDuration) => {
  workStart = parseMinutes(workStart);
  workEnd = parseMinutes(workEnd);
  meetingStart = parseMinutes(meetingStart);
  return (meetingStart >= workStart) && (meetingStart + meetingDuration <= workEnd);
};

void (fitsLength, isPalindrome, parseDigits, parseMinutes, validateMeetingTime);
