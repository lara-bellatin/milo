import { differenceInCalendarDays, format } from "date-fns";

export const capitalize = ({ word }) => {
  const firstLetter = word.substring(0, 1);
  const restOfWord = word.substring(1).toLowerCase();

  return `${firstLetter}${restOfWord}`;
};

export function capitalCase(input: string, options: { delimiter?: string } = {}) {
  const { delimiter } = options;
  return input
    .split(delimiter ?? " ")
    .map((word) => capitalize({ word }))
    .join(" ")
    .trim();
}

export const dateFieldInput = (e) => {
  const splitKey = "-";
  var input = e.target.value;

  if (/\D\/$/.test(input)) {
    input = input.substr(0, input.length - 3);
  }

  var values = input.split("-").map(function (v) {
    return v.replace(/\D/g, "");
  });

  if (values[0]) values[0] = checkValue(values[0], 12);
  if (values[1]) values[1] = checkValue(values[1], 31);

  var output = values.map(function (v, i) {
    return v.length == 2 && i < 2 ? v + splitKey : v;
  });

  e.target.value = output.join("").substr(0, 14);
};


export const stateFieldInput = (e) => {
  const { value } = e.target;
  const transformedValue = value.toUpperCase().substring(0, 2);

  e.target.value = transformedValue;
};

function checkValue(str, max) {
  if (str.charAt(0) !== "0" || str == "00") {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? "0" + num : num.toString();
  }
  return str;
}

/**
 * Generates random hex color from string
 */
export function stringToUniqueColor(str: string) {
  if (!str) {
    return "#455a64";
  }

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }

  return colour;
}

export function isValidEmail(toEmail: string) {
  if (!toEmail) {
    return true;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(toEmail);
}

const DateFormat = {
  DEFAULT: "LLL dd, yyyy",
  FULL: "MMMM dd, yyyy",
};

export function humanReadableDate(ISODate: string, formatMethod?: keyof typeof DateFormat) {
  if (!ISODate) return null;

  let d;

  if (/^\d+$/.test(ISODate)) {
    d = new Date(parseInt(ISODate));
  } else {
    d = new Date(Date.parse(ISODate));
  }

  const difference = differenceInCalendarDays(new Date(), d);

  if (difference === 0) return "Today";
  else if (difference === 1) return "Yesterday";
  return format(d, formatMethod ? DateFormat[formatMethod] : DateFormat.DEFAULT);
}

let debounceTimeout;
export const debounce = (waitTime, runFunc) => {
  const local = () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => runFunc(), waitTime);
  };

  return local();
};

export function addDays(date: Date, days): Date {
  const result = date;
  result.setDate(result.getDate() + days);
  return result;
}

export const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export const removeUrlsFromString = ({ value }: { value: string }) => {
  const parsedString = (value || "").replace(
    /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g,
    "",
  );
  return parsedString;
};

function dec2hex(dec) {
  return dec.toString(16).padStart(2, "0");
}

export function generateRandomId() {
  var arr = new Uint8Array(10);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join("");
}

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};
