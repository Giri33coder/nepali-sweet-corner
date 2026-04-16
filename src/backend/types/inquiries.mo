import Common "common";

module {
  public type ContactInquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Common.Timestamp;
  };

  public type CateringInquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    eventDate : Text;
    guestCount : Nat;
    message : Text;
    timestamp : Common.Timestamp;
  };
};
