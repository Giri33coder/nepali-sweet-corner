import List "mo:core/List";
import SweetsLib "../lib/sweets";
import SweetsTypes "../types/sweets";

mixin (sweets : List.List<SweetsTypes.Sweet>) {

  public query func getAllSweets() : async [SweetsTypes.Sweet] {
    SweetsLib.getAll(sweets);
  };

  public query func getSweetById(id : Nat) : async ?SweetsTypes.Sweet {
    SweetsLib.getById(sweets, id);
  };

  public query func getSweetsByCategory(category : SweetsTypes.Category) : async [SweetsTypes.Sweet] {
    SweetsLib.getByCategory(sweets, category);
  };

};
