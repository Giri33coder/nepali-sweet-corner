module {
  public type Category = {
    #Sandesh;
    #Rasgulla;
    #Barfi;
    #Laddoo;
    #MishtiDoi;
    #Chamcham;
  };

  public type Sweet = {
    id : Nat;
    name : Text;
    category : Category;
    description : Text;
    price : Text;
    ingredients : [Text];
    occasions : [Text];
    imagePlaceholder : Text;
  };
};
