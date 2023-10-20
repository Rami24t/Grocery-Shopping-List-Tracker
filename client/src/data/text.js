import randomQuote from "./randomQuote";

const LANGUAGES = ["English", "Deutsch", "العربيّة"];

export const headerText = {
  TITLES: [
    "Grocery Shopping List",
    "Einkaufsliste",
    "قَاْئِمَةُ التَّسَوُّق الإلكِتْرُونِيَّة",
  ],
  SUBTITLES: [randomQuote[0], randomQuote[1], randomQuote[2]],
  DARK_ON: ["Theme is now dark", "Dunkler Modus an", "الوضع الدّاكن"],
  DARK_OFF: ["Theme is now bright", "Heller Modus an", "الوضع السّاطع"],
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
  LABEL: [
    "Toggle dark/light modes",
    "Wechseln Sie zwischen hell und dunkel",
    "تبديل الوضع الدّاكن والسّاطع",
  ],
};

export const soundButtonText = {
  TITLE_ON: ["Mute", "Ton Aus", "كتم الصّوت"],
  TITLE_OFF: ["Unmute", "Ton An", "إلغاء كتم الصّوت"],
  LABEL: ["Mute/Unmute", "Ton An/Aus", "كتم الصّوت/إلغاء كتم الصّوت"],
};

export const listText = {
  TITLE: [
    "Click to show/hide items",
    "Klicken Sie, um Elemente anzuzeigen/auszublenden",
    "انقر لإظهار/إخفاء العناصر",
  ],
  LABEL: [
    "Show/Hide items",
    "Elemente anzeigen/ausblenden",
    "إظهار/إخفاء العناصر",
  ],
};

export const listsText = {
  EMPTY_TITLE: ["Empty list!", "Leere Liste!", "قَاْئِمَةُ فَارِغَة!"],
  EMPTY_TEXT: [
    "Add some items to your list.",
    "Fügen Sie einige Elemente zu Ihrer Liste hinzu.",
    "أضف بعض العناصر إلى قائمتك.",
  ],
  NEEDS_TITLE: ["Need", "Brauche", "أحتاج"],
  HAVES_TITLE: ["Have", "Habe", "لدي"],
};
