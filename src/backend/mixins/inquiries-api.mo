import List "mo:core/List";
import InquiriesLib "../lib/inquiries";
import InquiriesTypes "../types/inquiries";

mixin (
  contacts : List.List<InquiriesTypes.ContactInquiry>,
  caterings : List.List<InquiriesTypes.CateringInquiry>,
) {

  public shared func submitContactInquiry(
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
  ) : async Nat {
    let id = contacts.size() + 1;
    InquiriesLib.submitContact(contacts, id, name, email, phone, message);
    id;
  };

  public query func getAllContactInquiries() : async [InquiriesTypes.ContactInquiry] {
    InquiriesLib.getAllContacts(contacts);
  };

  public shared func submitCateringInquiry(
    name : Text,
    email : Text,
    phone : Text,
    eventDate : Text,
    guestCount : Nat,
    message : Text,
  ) : async Nat {
    let id = caterings.size() + 1;
    InquiriesLib.submitCatering(caterings, id, name, email, phone, eventDate, guestCount, message);
    id;
  };

  public query func getAllCateringInquiries() : async [InquiriesTypes.CateringInquiry] {
    InquiriesLib.getAllCaterings(caterings);
  };

};
