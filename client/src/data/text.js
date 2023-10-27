import randomQuote from "./randomQuote";

export const LANGUAGES = ["ENG", "DEU", "عربي"];
// export const LANGUAGES = ["EN", "DE", "العربيّة"];

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
  INFO_FOCUSED: [
    "Start typing to filter items",
    "Tippen Sie zum Filtern",
    "ابدأ الكتابة لتصفية العناصر",
  ],
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
  HAVES_TITLE: ["Have", " Habe ", " لدي "],
};

export const itemNameText = {
  TITLE: ["Item Name", "Artikelname", "إسم العنصر"],
  INFO_EDIT_CANCELLED: [
    "Edit cancelled",
    "Bearbeitung abgebrochen",
    "تمّ إلغاء التّعديل",
  ],
  INFO_EDITING: ["Editing", "Bearbeiten", "تعديل"],
  INFO_ITEM_UPDATED: [
    "Item updated",
    "Artikel aktualisiert",
    "تمّ تحديث العنصر",
  ],
  PLACEHOLDER: [
    "Enter item name",
    "Geben Sie den Artikelnamen ein",
    "أدخل إسم العنصر",
  ],
};

export const checkboxText = {
  TITLE_NEEDED: [
    "Click to check",
    "Klicken Sie zum Umschalten",
    "إضغط للتبديل",
  ],
  TITLE_NOT_NEEDED: [
    "Click to uncheck",
    "Klicken Sie zum Umschalten",
    "إضغط للتبديل",
  ],
};

export const mainHeaderText = {
  TITLE: ["Items in List", "Artikel in Liste", "عناصر القائمة"],
};

export const resetButtonText = {
  TITLE_CLEAR: ["Clear All Items", "Alle Elemente löschen", "إمسح كل العناصر"],
  TITLE_RESET: ["Reset Items", "Elemente zurücksetzen", "إعادة تعيين العناصر"],
  TEXT_CLEAR: ["Clear", "Löschen", "مسح"],
  TEXT_RESET: ["Reset", "Zurücksetzen", "إعادة"],
};

export const addItemsButtonText = {
  INFO_OPEN: [
    "Adding form is now open",
    "Hinzufügen Formular ist jetzt geöffnet",
    "تمّ فتح نموذج الإضافة",
  ],
  INFO_CLOSED: [
    "Adding form is now closed",
    "Hinzufügen Formular ist jetzt geschlossen",
    "تمّ إغلاق نموذج الإضافة",
  ],
  TITLE_OPEN: [
    'Open "Add" Form',
    "Öffnen Sie das Hinzufügen Formular",
    "فتح نموذج الإضافة",
  ],
  TITLE_CLOSED: [
    'Close "Add" Form',
    "Schließen Sie das Hinzufügen Formular",
    "إغلاق نموذج الإضافة",
  ],
  LABEL: [
    "Open/Close the 'Add Items' form",
    "Öffnen/Schließen Sie das Hinzufügen Formular",
    "فتح/إغلاق نموذج الإضافة",
  ],
  TEXT: ["Add ", "Hinzufügen ", "إضافة "],
};

export const addItemsText = {
  TITLE: ["Add Item", "Element hinzufügen", "إضافة عنصر"],
  BUTTON_TITLE: ["Add", "Hinzufügen", "أضف"],
  PLACEHOLDER: ["New item name", "Neuer Artikelname", "إسم العنصر الجديد"],
  INFO_FOCUSED: [
    "Type the name of the item you want to add",
    "Geben Sie den Namen ein",
    "أدخل إسم العنصر الذي تريد إضافته",
  ],
  INFO_CANCELLED: [
    "Add cancelled",
    "Hinzufügen abgebrochen",
    "تمّ إلغاء الإضافة",
  ],
  INFO_TYPING: ["Typing...", "Tippen...", "...كتابة"],
};

export const editButtonText = {
  TITLE: [
    "Click to edit this item",
    "Klicken Sie, um dieses Element zu bearbeiten",
    "إضغط لتعديل هذا العنصر",
  ],
  LABEL: ["Edit", "Bearbeiten", "تعديل"],
};

export const deleteButtonText = {
  TITLE: [
    "Click to delete this item",
    "Klicken Sie, um dieses Element zu löschen",
    "إضغط لحذف هذا العنصر",
  ],
};

export const appText = {
  DOC_TITLE: [
    "🛒📋Gr.Shop.List🧾📱",
    "🛒📋Einkaufsliste🧾📱",
    "🛒📋قَاْئِمَةُ التَّسَوُّق🧾📱",
  ],
  INFO_DELETED: ["deleted", "gelöscht", "حذف"],
  INFO_CHECKED: ["checked", "verschoben", "نقل"],
  INFO_UNCHECKED: ["unchecked", "zurückversetzt", "إعادة"],
  INFO_ALREADY_EXISTS: [
    "already exists!",
    "existiert bereits!",
    "موجود مسبقاً",
  ],
  INFO_ADDED: ["added", "hinzugefügt", "أضيف"],
  INFO_RESET: [
    "List is reset",
    "Liste ist zurückgesetzt",
    "تمّ إعادة تعيين القائمة",
  ],
  INFO_CLEARED: [
    "List cleared",
    "Die Liste ist gelöscht",
    "تمّ مسح القائمة بالكامل",
  ],
  INFO_UNDO_UPDATE: [
    "Undo update",
    "Bearbeitung rückgängig gemacht",
    "تراجع عن التعديل",
  ],
  INFO_UNDO_DELETE: [
    "Undo delete",
    "Löschen rückgängig gemacht",
    "تراجع عن الحذف",
  ],
  INFO_UNDO_CHECK: [
    "Undo check",
    "Checken rückgängig gemacht",
    "تراجع عن النقل",
  ],
  INFO_UNDO_UNCHECK: ["Undo uncheck", "Unchecken rückgängig gemacht", "تراجع"],
  INFO_UNDO_ADD: [
    "Undo add",
    "Hinzufügen rückgängig gemacht",
    "تراجع عن الإضافة",
  ],
  INFO_UNDO_CLEAR: [
    "Undo clear",
    "Löschen aller Listenelemente rückgängig gemacht",
    "تراجع عن المسح الكامل",
  ],
  INFO_UNDO_RESET: [
    "Undo clear and reset",
    "Alle Löschen und Zurücksetzen rückgängig gemacht",
    "تراجع عن المسح والإعادة",
  ],
  ITEM: ["Item", "Das Element", "العنصر"],
};

export const sidenavText = {
  HOME: ["Home", "Startseite", "الصّفحة الرّئيسيّة"],
  ADD_ITEMS: ["Add Items", "Elemente hinzufügen", "إضافة عناصر"],
  SEARCH_LIST: ["Search List", "Liste durchsuchen", "بحث في القائمة"],
  // SETTINGS : ["Settings", "Einstellungen", "إعدادات"],
  EDIT_LIST: ["Edit List", "Liste bearbeiten", "تعديل في القائمة"],
  CONTACT: ["Contact links", "Kontakt Links", "روابط التّواصل"],
  LANGUAGE: ["Language", "Sprache", "تغيير اللّغة"],
};

export const topFooterText = {
  COMPANY_NAME: ["Rami Al-Saadi", "Rami Al-Saadi", "رَامِيْ السَّعْدِيّ"],
  // SUBTEXT: [" 's 🛒 Shopping List", " s 🛒 Einkaufsliste"," قَاْئِمَةُ التَّسَوُّق 🛒"],
  // SUBTEXT: ["Web developer", "Webentwickler", "مبرمج الويب"],
  SUBTEXT: [" 's Web Development", " s Webentwicklung", "برمجة تطبيقات الويب "],
};

export const footerListsText = {
  RESOURCES: ["Resources", "Ressourcen", "مصادر"],
  FOLLOW_ME: ["Follow me", "Folge mir", "تابعني"],
  // LEGAL: ["Legal", "Legal", "قانوني"],
};

export const bottomFooterText = {
  YEAR: ["2023", "2023", "2023"],
  AUTHOR: ["Rami Al-Saadi™", "Rami Al-Saadi™", "Rami Al-Saadi™"],
  RIGHTS: [
    "All Rights Reserved",
    "Alle Rechte vorbehalten",
    "جميع الحقوق محفوظة",
  ],
};

export const iconsText = {
  EMAIL: ["Email me?", "E-Mail an mich?", "أرسل لي بريداً"],
  LINKEDIN: ["LinkedIn profile", "LinkedIn Profil", "حسابي في لينكدإن"],
  // FACEBOOK: ["Facebook page", "Facebook Seite", "صفحتي في فيسبوك"],
  INSTAGRAM: ["Instagram page", "Instagram Seite", "صفحتي في إنستغرام"],
  GITHUB: ["GitHub account", "GitHub Konto", "حسابي في جيت هب"],
  YOUTUBE: ["YouTube channel", "YouTube Kanal", "قناتي في يوتيوب"],
  VISIT_MY: ["Visit my", "Besuchen Sie mein", ""],
};

export const mainText = {
  INFO_NO_MATCHES: [
    "Filter doesn't match any item",
    "Filter passt zu keinem Element",
    "التّصفية لا تطابق أيّ عنصر",
  ],
  INFO_MATCHES: [
    "Showing filtered items",
    "Die treffer werden angezeigt",
    "تمّ عرض العناصر المطابقة",
  ],
};

export const infoWidgetText = {
  HAVES: ["Haves", "Habe", "لدي"],
  NEEDS: ["Needs", "Brauche", "أحتاج"],
  TOTAL: ["Total Items", "Gesamt", "المجموع"],
  PERCENTAGE: [
    "Completion Percentage",
    "Fertigstellungsprozentsatz",
    "النّسبة",
  ],
  WIDGET: [
    "Items Info Widget",
    "Elemente Informations Widget",
    "معلومات العناصر",
  ],
};

export const clearFilterBtnText = {
  INFO: ["Filter cleared", "Filter gelöscht", "تمّ مسح التّصفية"],
  TITLE: ["Clear filter", "Filter löschen", "مسح التّصفية"],
};

export const undoButtonText = {
  TITLE_ENABLED: [
    "Click to undo",
    "Klicken Sie, um rückgängig zu machen",
    "إضغط للتراجع",
  ],
  TITLE_DISABLED: [
    "Nothing to undo",
    "Nichts zum Rückgängigmachen",
    "لا شيء للتراجع عنه",
  ],
};
