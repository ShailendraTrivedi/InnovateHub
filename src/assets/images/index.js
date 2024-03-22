import Wix from "./wix.png";
import Shopify from "./shopify.png";
import MailChimp from "./mailchimp.png";
import Paypal from "./paypal.png";
import Disney from "./disney.png";
import Intercom from "./intercom.png";
import Google from "./google.png";
import Evernote from "./evernote.png";
import Microsoft from "./microsoft.png";
import Invision from "./invision.png";
// Import other brand images here

export default function GetBrandImage(key) {
  switch (key) {
    case "Wix":
      return Wix;
    case "Shopify":
      return Shopify;
    case "MailChimp":
      return MailChimp;
    case "Paypal":
      return Paypal;
    case "Disney":
      return Disney;
    case "Intercom":
      return Intercom;
    case "Google":
      return Google;
    case "Evernote":
      return Evernote;
    case "Microsoft":
      return Microsoft;
    case "Invision":
      return Invision;

    default:
      return;
  }
}

export { default as UserPic } from "./user.jpg";
export { default as InnovateHub } from "./innovatehub.png";
