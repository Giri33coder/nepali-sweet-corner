import List "mo:core/List";
import SweetsTypes "types/sweets";
import InquiriesTypes "types/inquiries";
import SweetsLib "lib/sweets";
import SweetsMixin "mixins/sweets-api";
import InquiriesMixin "mixins/inquiries-api";

actor {
  let sweets = List.empty<SweetsTypes.Sweet>();
  let contacts = List.empty<InquiriesTypes.ContactInquiry>();
  let caterings = List.empty<InquiriesTypes.CateringInquiry>();

  // Seed sweets on first initialization
  SweetsLib.seed(sweets);

  include SweetsMixin(sweets);
  include InquiriesMixin(contacts, caterings);
};
