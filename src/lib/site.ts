import { formatPhone, telHref, smsHref } from "./phone";

/** The ONE place Ally's number is written. Digits only — every visible
 *  string and every href is derived from this constant. */
const PHONE_DIGITS = "8622632675";

/* Roofing is the vertical where the photo IS the estimate: a picture of the
   stain, the missing shingle or the torn flashing tells us more than five
   minutes on the phone. So the text branch asks for one by name. */
export const SMS_BODY =
  "Ally — snapping you a photo of my roof. What level is this?";

export const site = {
  phone: formatPhone(PHONE_DIGITS),
  telHref: telHref(PHONE_DIGITS),
  smsHref: smsHref(PHONE_DIGITS, SMS_BODY),
  smsBody: SMS_BODY,
  phoneDigits: PHONE_DIGITS,
};
