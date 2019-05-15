import { COMMON } from '../definitions';

const commonInit = () => ({
  type: COMMON.INIT
});

const commonLangChange = (lang) => ({
  type: COMMON.LANG_CHANGE,
  lang: lang
});

const showModal = () => ({
  type: COMMON.MODAL_OPEN
})
const hideModal = () => ({
  type: COMMON.MODAL_HIDE
});

export {
  commonInit,
  commonLangChange,
  showModal,
  hideModal
};
