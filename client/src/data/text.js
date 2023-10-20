import randomQuote from "./randomQuote";

const LANGUAGES = ["English", "Deutsch", "العربيّة"];

export const headerText = {
  TITLES: [
    "Grocery Shopping List",
    "Einkaufsliste",
    "قَاْئِمَةُ التَّسَوُّق الإلكِتْرُونِيَّة",
  ],
  SUBTITLES: [randomQuote[0], randomQuote[1], randomQuote[2]],
  DARK_ON: [
    "Theme is now dark",
    "Dunkler Modus an",
    "الوضع الدّاكن قيد التّشغيل",
  ],
  DARK_OFF: [
    "Theme is now bright",
    "Heller Modus an",
    "الوضع السّاطع قيد التّشغيل",
  ],
  SOUND_ON: ["Sound is now on", "Ton an", "إلغاء كتم الصّوت"],
  SOUND_OFF: ["Sound is now muted", "Ton aus", "كتم الصّوت"],
};

export const arrowToText = {
  TO_TOP: ["Back To Top", "Zurück Nach Oben", "إلى فوق"],
  TO_BOTTOM: ["Go To Bottom", "Nach Unten", "إلى تحت"],
};

export const darkModeButtonText = {
  TITLE_DARK: ["To Bright Mode", "Zum Helleren Modus", "إلى الوضع السّاطع"],
  TITLE_LIGHT: ["To Dark Mode", "Zum Dunkleren Modus", "إلى الوضع الدّاكن"],
  LABEL: ["Toggle dark/light modes", "Wechseln Sie zwischen hell und dunkel", "تبديل الوضع الدّاكن والسّاطع"],
};