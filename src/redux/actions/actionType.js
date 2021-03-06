import { ActionType } from 'redux-promise-middleware';

export const actionType = {
  ui: {
    setLanguage:                  'UI_SETLANGUAGE',
    showCamera:                   'UI_SHOWCAMERA',
    setProfilePhoto:              'UI_SETPROFILEPHOTO',
  },
  page: {
    pageSearchSetUserWord:        'PAGESEARCH_SETUSERWORD',
    pageSearchSetError:           'PAGESEARCH_SETERROR',
    pageSearchSetLoading:         'PAGESEARCH_SETLOADING',
    pageSearchShowCamera:         'PAGESEARCH_SHOWCAMERA',
    pageSearchSetState:           'PAGESEARCH_SETSTATE',

    pageFavLoadListPending:       `PAGEFAV_LOADLIST${ActionType.Pending}`,
    pageFavLoadListFulfilled:     `PAGEFAV_LOADLIST${ActionType.Fulfilled}`,
    pageFavLoadListRejected:      `PAGEFAV_LOADLIST${ActionType.Rejected}`,

    pageFavDetailSetError:        'PAGEFAVDETAIL_SETERROR',
    pageFavDetailSetLoading:      'PAGEFAVDETAIL_SETLOADING',
    pageFavDetailSetState:        'PAGEFAVDETAIL_SETSTATE',

    pageLoginSetEmail:            'PAGELOGIN_SETEMAIL',
    pageLoginSetPassword:         'PAGELOGIN_SETPASSWORD',
    pageLoginSetError:            'PAGELOGIN_SETERROR',

    pageLoginAuthPending:         `PAGELOGIN_AUTH${ActionType.Pending}`,
    pageLoginAuthFulfilled:       `PAGELOGIN_AUTH${ActionType.Fulfilled}`,
    pageLoginAuthRejected:        `PAGELOGIN_AUTH${ActionType.Rejected}`,

    pageLoginSignUpPending:       `PAGELOGIN_SIGNUP${ActionType.Pending}`,
    pageLoginSignUpFulfilled:     `PAGELOGIN_SIGNUP${ActionType.Fulfilled}`,
    pageLoginSignUpRejected:      `PAGELOGIN_SIGNUP${ActionType.Rejected}`,

    pageLoginLogoutPending:       `PAGELOGIN_LOGOUT${ActionType.Pending}`,
    pageLoginLogoutFulfilled:     `PAGELOGIN_LOGOUT${ActionType.Fulfilled}`,
    pageLoginLogoutRejected:      `PAGELOGIN_LOGOUT${ActionType.Rejected}`,

    pageLoginForgetPwdPending:    `PAGELOGIN_FORGETPWD${ActionType.Pending}`,
    pageLoginForgetPwdFulfilled:  `PAGELOGIN_FORGETPWD${ActionType.Fulfilled}`,
    pageLoginForgetPwdRejected:   `PAGELOGIN_FORGETPWD${ActionType.Rejected}`,
  },
  session: {
    sessionSetAuthenticated:      'SESSION_SETAUTHENTICATED'
  }
}