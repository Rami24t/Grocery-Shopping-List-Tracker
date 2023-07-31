import addSFX1 from "./achive-sound-132273.mp3";
import haveSFX from "./beep-6-96243.mp3";
import buttonSFX from "./button-8-88355.mp3";
import addSFX2 from "./button-pressed-38129.mp3";
import buttonClickSFX from "./click-3-44710.mp3";
import buttonClickSFX2 from "./click-button-140881.mp3";
import CompletionSFX from "./click-game-menu-147356.mp3";
import menuOpenSFX from "./clickselect-92098.mp3";
import finishSFX from "./divinity-138419.mp3";
import slideInSFX from "./door-open-107728.mp3";
import emailSFX from "./e-mail-39993.mp3";
import clearSFX from "./error-2-126514.mp3";
import inputErrorSFX from "./error-call-to-attention-129258.mp3";
import wrongFilterSFX2 from "./error-when-entering-the-game-menu-132111.mp3";
import resetOrClearFilterSFX from "./fantasy_ui_button_6-102219.mp3";
import listCloseOpenSFX from "./killswitch-being-turned-on-100591.mp3";
import linkClickSFX from "./light-switch-156813.mp3";
import typeSFX from "./mech-keyboard-02-102918.mp3";
import mouseClickSFX from "./mouse-click-153941.mp3";
import pencilCheckSFX from "./pencil_check_mark_1-88805.mp3";
import resetSFX from "./ping-82822.mp3";
import openListorClearSFX from "./projector-button-push-6258.mp3";
import writingSFX from "./scribbling-68130.mp3";
import addDeniedSFX from "./select_denied_03-45945.mp3";
import slideOutInSFX from "./sliding_wooden_cabinet_door_1-of-2-81503.mp3";
import openCloseAddFormSFX from "./spring-click-sound-95507.mp3";
import switchSFX from "./switch-93378.mp3";
import navLinkClickSFX from "./switch-light-04-82204.mp3";
import deleteSFX from "./toy-button-105724.mp3";
import correctOrAddSFX from "./ui_correct_button2-103167.mp3";
import menuButtonClick from "./ui-click-43196.mp3";
import editClickSFX from "./uiclick4-79818.mp3";
import toBottomTopSFX from "./uisound1-79819.mp3";
import wrongFilterSFX from "./wrong-answer-129254.mp3";

const addSFXAudio1 = new Audio(addSFX1);
addSFXAudio1.volume = 0.5;
const haveSFXAudio = new Audio(haveSFX);
haveSFXAudio.volume = 0.5;
const buttonSFXAudio = new Audio(buttonSFX);
buttonSFXAudio.volume = 0.5;
const addSFXAudio2 = new Audio(addSFX2);
addSFXAudio2.volume = 0.5;
const buttonClickSFXAudio = new Audio(buttonClickSFX);
buttonClickSFXAudio.volume = 0.5;
const buttonClickSFXAudio2 = new Audio(buttonClickSFX2);
buttonClickSFXAudio2.volume = 0.5;
const completionSFXAudio = new Audio(CompletionSFX);
completionSFXAudio.volume = 0.5;
const menuOpenSFXAudio = new Audio(menuOpenSFX);
menuOpenSFXAudio.volume = 0.5;
const finishSFXAudio = new Audio(finishSFX);
finishSFXAudio.volume = 0.5;
const slideInSFXAudio = new Audio(slideInSFX);
slideInSFXAudio.volume = 0.5;
const linkClickSFXAudio = new Audio(linkClickSFX);
linkClickSFXAudio.volume = 0.5;
const listCloseOpenSFXAudio = new Audio(listCloseOpenSFX);
listCloseOpenSFXAudio.volume = 0.5;
const toBottomTopSFXAudio = new Audio(toBottomTopSFX);
toBottomTopSFXAudio.volume = 0.5;
const editClickSFXAudio = new Audio(editClickSFX);
editClickSFXAudio.volume = 0.5;
const menuButtonClickAudio = new Audio(menuButtonClick);
menuButtonClickAudio.volume = 0.5;
const deleteSFXAudio = new Audio(deleteSFX);
deleteSFXAudio.volume = 0.5;
const wrongFilterSFXAudio = new Audio(wrongFilterSFX);
wrongFilterSFXAudio.volume = 0.5;
const wrongFilterSFXAudio2 = new Audio(wrongFilterSFX2);
wrongFilterSFXAudio2.volume = 0.5;
const correctOrAddSFXAudio = new Audio(correctOrAddSFX);
correctOrAddSFXAudio.volume = 0.5;
const openCloseAddFormSFXAudio = new Audio(openCloseAddFormSFX);
openCloseAddFormSFXAudio.volume = 0.5;
const navLinkClickSFXAudio = new Audio(navLinkClickSFX);
navLinkClickSFXAudio.volume = 0.5;
const slideOutInSFXAudio = new Audio(slideOutInSFX);
slideOutInSFXAudio.volume = 0.5;
const clearSFXAudio = new Audio(clearSFX);
clearSFXAudio.volume = 0.5;
const addDeniedSFXAudio = new Audio(addDeniedSFX);
addDeniedSFXAudio.volume = 0.5;
const writingSFXAudio = new Audio(writingSFX);
writingSFXAudio.volume = 0.5;
const openListorClearSFXAudio = new Audio(openListorClearSFX);
openListorClearSFXAudio.volume = 0.5;
const typeSFXAudio = new Audio(typeSFX);
typeSFXAudio.volume = 0.5;
const resetSFXAudio = new Audio(resetSFX);
resetSFXAudio.volume = 0.5;
const pencilCheckSFXAudio = new Audio(pencilCheckSFX);
pencilCheckSFXAudio.volume = 0.5;
const mouseClickSFXAudio = new Audio(mouseClickSFX);
mouseClickSFXAudio.volume = 0.5;
const resetOrClearFilterSFXAudio = new Audio(resetOrClearFilterSFX);
resetOrClearFilterSFXAudio.volume = 0.5;
const inputErrorSFXAudio = new Audio(inputErrorSFX);
inputErrorSFXAudio.volume = 0.5;
const switchSFXAudio = new Audio(switchSFX);
switchSFXAudio.volume = 0.5;
const emailSFXAudio = new Audio(emailSFX);
emailSFXAudio.volume = 0.5;

const playSFXAudio = (...audios) => {
try {
    audios.forEach(audio => {
    audio.currentTime = 0;
    audio.readyState >= 1 && audio.play();
    });
} catch (error) {
    console.log(error);  
}};

export {
  playSFXAudio,
  addSFXAudio1,
  haveSFXAudio,
  buttonSFXAudio,
  addSFXAudio2,
  buttonClickSFXAudio,
  buttonClickSFXAudio2,
  completionSFXAudio,
  menuOpenSFXAudio,
  finishSFXAudio,
  slideInSFXAudio,
  linkClickSFXAudio,
  listCloseOpenSFXAudio,
  toBottomTopSFXAudio,
  editClickSFXAudio,
  menuButtonClickAudio,
  deleteSFXAudio,
  wrongFilterSFXAudio,
  wrongFilterSFXAudio2,
  correctOrAddSFXAudio,
  openCloseAddFormSFX,
  openCloseAddFormSFXAudio,
  navLinkClickSFXAudio,
  slideOutInSFXAudio,
  clearSFXAudio,
  addDeniedSFXAudio,
  writingSFXAudio,
  openListorClearSFXAudio,
  typeSFXAudio,
  resetSFXAudio,
  pencilCheckSFXAudio,
  mouseClickSFXAudio,
  resetOrClearFilterSFXAudio,
  inputErrorSFXAudio,
  switchSFXAudio,
  emailSFXAudio,
};
