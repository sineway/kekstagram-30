const fitsLength = (text, maxLength) => text.length <= maxLength;

const isPalindrome = (sequence) => {
  const text = String(sequence).replaceAll(' ', '').toLowerCase();
  const reversedText = text.split('').reverse().join('');
  return text === reversedText;
};

void (fitsLength, isPalindrome);

