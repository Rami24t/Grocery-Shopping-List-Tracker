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

export const filterInputText = {
  TITLE: ["Filter Items", "Filtern Sie Elemente", "تصفية العناصر"],
  INFO_FILTER_CLEARED: [
    "Filter cleared",
    "Filter gelöscht",
    "تمّ مسح التّصفية",
  ],
  INFO_FOCUSED: ["Start typing to filter items", "Tippen Sie zum Filtern", "ابدأ الكتابة لتصفية العناصر"],
  INFO_TYPING: ["Typing", "Tippen", "كتابة"],
  PLACEHOLDER: [
    "Start typing to filter {items} items ...",
    "Tippen, um {items} Elemente zu filtern ...",
    "... ابدأ بالكتابة لتصفية {items} عنصر",
  ],
};  

export const listText = {
  TITLE: [
    "Click to show/hide items",
    "Klicken Sie, um Elemente anzuzeigen/auszublenden",
    "إضغط لإظهار/إخفاء العناصر",
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
  NEEDS_TITLE: ["Need", "Brauche", " أحتاج "],
  HAVES_TITLE: ["Have", "Habe", "لدي"],
};

export const itemNameText = {
  TITLE: ["Item Name", "Artikelname", "اسم العنصر"],
  INFO_EDIT_CANCELLED: [
    "Edit cancelled",
    "Bearbeitung abgebrochen",
    "تمّ إلغاء التّعديل",
  ],
  INFO_EDITING: [
    "Editing",
    "Bearbeiten",
    "تعديل",
  ],
  INFO_ITEM_UPDATED: [
    "Item updated",
    "Artikel aktualisiert",
    "تمّ تحديث العنصر",
  ],
  PLACEHOLDER: ["Enter item name", "Geben Sie den Artikelnamen ein", "أدخل اسم العنصر"],
};

export const checkboxText = {
  TITLE_NEEDED: ["Click to check", "Klicken Sie zum Umschalten", "إضغط للتبديل"],
  TITLE_NOT_NEEDED: ["Click to uncheck", "Klicken Sie zum Umschalten", "إضغط للتبديل"],
};

export const mainHeaderText = {
  TITLE: ["Items in List", "Artikel in Liste", "عناصر القائمة"],
};

export const resetButtonText = {
  TITLE_CLEAR: ["Clear Items", "Elemente löschen", "مسح العناصر"],
  TITLE_RESET: ["Reset Items", "Elemente zurücksetzen", "إعادة تعيين العناصر"],
  TEXT_CLEAR: ["Clear", "Löschen", "مسح"],
  TEXT_RESET: ["Reset", "Zurücksetzen", "إعادة"],
};

export const addItemsButtonText = {
  INFO_OPEN: ["Adding form is now open", "Hinzufügen Formular ist jetzt geöffnet", "تمّ فتح نموذج الإضافة"],
  INFO_CLOSED: ["Adding form is now closed", "Hinzufügen Formular ist jetzt geschlossen", "تمّ إغلاق نموذج الإضافة"],
  TITLE_OPEN: ['Open "Add" Form', "Öffnen Sie das Hinzufügen Formular", "فتح نموذج الإضافة"],
  TITLE_CLOSED: ['Close "Add" Form', "Schließen Sie das Hinzufügen Formular", "إغلاق نموذج الإضافة"],
  LABEL: ["Open/Close the 'Add Items' form", "Öffnen/Schließen Sie das Hinzufügen Formular", "فتح/إغلاق نموذج الإضافة"],
  TEXT: ["Add ", "Hinzufügen ", "إضافة "],
};

export const addItemsText = {
  TITLE: ["Add Item", "Element hinzufügen", "إضافة عنصر"],
  BUTTON_TITLE: ["Add", "Hinzufügen", "أضف"],
  PLACEHOLDER: ["New item name", "Neuer Artikelname", "اسم العنصر الجديد"],
  INFO_FOCUSED: ["Type the name of the item you want to add", "Geben Sie den Namen ein", "أدخل اسم العنصر الذي تريد إضافته"],
  INFO_CANCELLED: ["Add cancelled", "Hinzufügen abgebrochen", "تمّ إلغاء الإضافة"],
  INFO_TYPING: ["Typing...", "Tippen...", "..كتابة..."],
};

export const editButtonText = {
  TITLE: ["Click to edit this item", "Klicken Sie, um dieses Element zu bearbeiten", "إضغط لتعديل هذا العنصر"],
  LABEL: ["Edit", "Bearbeiten", "تعديل"],
};

export const deleteButtonText = {
  TITLE: ["Click to delete this item", "Klicken Sie, um dieses Element zu löschen", "احذف هذا العنصر"],
};