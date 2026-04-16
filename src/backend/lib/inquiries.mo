import List "mo:core/List";
import Time "mo:core/Time";
import InquiriesTypes "../types/inquiries";

module {
  type ContactInquiry = InquiriesTypes.ContactInquiry;
  type CateringInquiry = InquiriesTypes.CateringInquiry;

  public func submitContact(
    contacts : List.List<ContactInquiry>,
    id : Nat,
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
  ) {
    let inquiry : ContactInquiry = {
      id;
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    contacts.add(inquiry);
  };

  public func getAllContacts(contacts : List.List<ContactInquiry>) : [ContactInquiry] {
    contacts.toArray();
  };

  public func submitCatering(
    caterings : List.List<CateringInquiry>,
    id : Nat,
    name : Text,
    email : Text,
    phone : Text,
    eventDate : Text,
    guestCount : Nat,
    message : Text,
  ) {
    let inquiry : CateringInquiry = {
      id;
      name;
      email;
      phone;
      eventDate;
      guestCount;
      message;
      timestamp = Time.now();
    };
    caterings.add(inquiry);
  };

  public func getAllCaterings(caterings : List.List<CateringInquiry>) : [CateringInquiry] {
    caterings.toArray();
  };
};
