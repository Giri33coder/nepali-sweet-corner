import List "mo:core/List";
import SweetsTypes "../types/sweets";

module {
  type Sweet = SweetsTypes.Sweet;
  type Category = SweetsTypes.Category;

  public func categoryToText(cat : Category) : Text {
    switch cat {
      case (#Sandesh) "Sandesh";
      case (#Rasgulla) "Rasgulla";
      case (#Barfi) "Barfi";
      case (#Laddoo) "Laddoo";
      case (#MishtiDoi) "Mishti Doi";
      case (#Chamcham) "Chamcham";
    };
  };

  public func seed(sweets : List.List<Sweet>) {
    let items : [Sweet] = [
      // Sandesh (4 items)
      {
        id = 1;
        name = "Nolen Gur Sandesh";
        category = #Sandesh;
        description = "Delicate chenna-based sweet infused with the unique aroma of date palm jaggery, a winter specialty.";
        price = "₹30/pc";
        ingredients = ["Chenna", "Nolen Gur", "Cardamom"];
        occasions = ["Winter Special", "Festivals", "Gifts"];
        imagePlaceholder = "nolen-gur-sandesh";
      },
      {
        id = 2;
        name = "Kheer Kadam";
        category = #Sandesh;
        description = "A layered sandesh ball with a soft rasgulla center coated in rich mawa, a true Bengali delight.";
        price = "₹40/pc";
        ingredients = ["Chenna", "Mawa", "Sugar", "Rasgulla"];
        occasions = ["Pujas", "Weddings", "Celebrations"];
        imagePlaceholder = "kheer-kadam";
      },
      {
        id = 3;
        name = "Kamala Bhog";
        category = #Sandesh;
        description = "Orange-flavored sandesh shaped like an orange slice, vibrant and refreshingly sweet.";
        price = "₹25/pc";
        ingredients = ["Chenna", "Orange Extract", "Sugar", "Saffron"];
        occasions = ["Durga Puja", "Gifts", "Daily Treat"];
        imagePlaceholder = "kamala-bhog";
      },
      {
        id = 4;
        name = "Kalo Jam Sandesh";
        category = #Sandesh;
        description = "Classic sandesh with deep caramelized sugar giving it a rich dark hue and intense sweetness.";
        price = "₹28/pc";
        ingredients = ["Chenna", "Caramelized Sugar", "Cardamom"];
        occasions = ["Weddings", "Festivals", "Pujas"];
        imagePlaceholder = "kalo-jam-sandesh";
      },
      // Rasgulla (3 items)
      {
        id = 5;
        name = "Sponge Rasgulla";
        category = #Rasgulla;
        description = "Pillowy soft chenna balls soaked in light sugar syrup, the iconic Bengali sweet loved across India.";
        price = "₹20/pc";
        ingredients = ["Chenna", "Sugar", "Rose Water"];
        occasions = ["Daily Treat", "Pujas", "Celebrations"];
        imagePlaceholder = "sponge-rasgulla";
      },
      {
        id = 6;
        name = "Rajbhog";
        category = #Rasgulla;
        description = "Large saffron-tinted rasgulla stuffed with dry fruits and soaked in aromatic syrup.";
        price = "₹45/pc";
        ingredients = ["Chenna", "Saffron", "Cashew", "Raisin", "Sugar Syrup"];
        occasions = ["Weddings", "Festivals", "Special Occasions"];
        imagePlaceholder = "rajbhog";
      },
      {
        id = 7;
        name = "Pantua";
        category = #Rasgulla;
        description = "Deep-fried milk solid balls soaked in syrup with a hint of cardamom, similar to gulab jamun.";
        price = "₹22/pc";
        ingredients = ["Khoya", "Chenna", "Sugar Syrup", "Cardamom"];
        occasions = ["Pujas", "Daily Treat", "Festivals"];
        imagePlaceholder = "pantua";
      },
      // Barfi (3 items)
      {
        id = 8;
        name = "Coconut Barfi";
        category = #Barfi;
        description = "Freshly grated coconut cooked with sugar and cardamom, set into melt-in-mouth squares.";
        price = "₹15/pc";
        ingredients = ["Fresh Coconut", "Sugar", "Cardamom", "Ghee"];
        occasions = ["Durga Puja", "Diwali", "Gifts"];
        imagePlaceholder = "coconut-barfi";
      },
      {
        id = 9;
        name = "Kaju Katli";
        category = #Barfi;
        description = "Premium cashew diamond barfi with a silver leaf garnish, the most gifted Indian sweet.";
        price = "₹60/pc";
        ingredients = ["Cashew", "Sugar", "Rose Water", "Silver Leaf"];
        occasions = ["Diwali", "Weddings", "Corporate Gifts"];
        imagePlaceholder = "kaju-katli";
      },
      {
        id = 10;
        name = "Mango Barfi";
        category = #Barfi;
        description = "Seasonal Alphonso mango pulp blended with khoya, set into vibrant golden squares.";
        price = "₹35/pc";
        ingredients = ["Alphonso Mango", "Khoya", "Sugar", "Cardamom"];
        occasions = ["Summer Special", "Festivals", "Gifts"];
        imagePlaceholder = "mango-barfi";
      },
      // Laddoo (3 items)
      {
        id = 11;
        name = "Motichur Laddoo";
        category = #Laddoo;
        description = "Tiny fried besan pearls bound together with sugar syrup into soft, crumbly golden balls.";
        price = "₹30/pc";
        ingredients = ["Besan", "Sugar", "Ghee", "Cardamom", "Pistachio"];
        occasions = ["Weddings", "Pujas", "Prasad"];
        imagePlaceholder = "motichur-laddoo";
      },
      {
        id = 12;
        name = "Boondi Laddoo";
        category = #Laddoo;
        description = "Classic temple-style laddoo made from crisped boondi, ghee, and aromatic spices.";
        price = "₹25/pc";
        ingredients = ["Besan", "Sugar", "Ghee", "Cardamom", "Clove"];
        occasions = ["Prasad", "Durga Puja", "Diwali"];
        imagePlaceholder = "boondi-laddoo";
      },
      {
        id = 13;
        name = "Til Laddoo";
        category = #Laddoo;
        description = "Sesame seeds roasted in jaggery and rolled into earthy, nutty winter laddoos.";
        price = "₹20/pc";
        ingredients = ["Sesame Seeds", "Jaggery", "Coconut", "Cardamom"];
        occasions = ["Makar Sankranti", "Winter Special", "Daily Treat"];
        imagePlaceholder = "til-laddoo";
      },
      // Mishti Doi (2 items)
      {
        id = 14;
        name = "Classic Mishti Doi";
        category = #MishtiDoi;
        description = "Slow-cooked thickened milk fermented with date palm jaggery for a rich caramel sweetness.";
        price = "₹60/cup";
        ingredients = ["Full Fat Milk", "Nolen Gur", "Curd Culture"];
        occasions = ["Daily Treat", "Bengali Meals", "Festivals"];
        imagePlaceholder = "mishti-doi";
      },
      {
        id = 15;
        name = "Aam Doi";
        category = #MishtiDoi;
        description = "Summer special sweet yogurt blended with fresh Alphonso mango for a fruity tropical twist.";
        price = "₹70/cup";
        ingredients = ["Full Fat Milk", "Alphonso Mango", "Sugar", "Curd Culture"];
        occasions = ["Summer Special", "Celebrations", "Dessert"];
        imagePlaceholder = "aam-doi";
      },
      // Chamcham (4 items)
      {
        id = 16;
        name = "White Chamcham";
        category = #Chamcham;
        description = "Elongated chenna sweet coated in khoya and soaked in rose-scented sugar syrup, a Porabarir specialty.";
        price = "₹35/pc";
        ingredients = ["Chenna", "Khoya", "Sugar Syrup", "Rose Water"];
        occasions = ["Weddings", "Festivals", "Gifts"];
        imagePlaceholder = "white-chamcham";
      },
      {
        id = 17;
        name = "Pink Chamcham";
        category = #Chamcham;
        description = "Soft chenna rolls tinted pink with beetroot, coated in coconut and mawa for a festive look.";
        price = "₹38/pc";
        ingredients = ["Chenna", "Mawa", "Coconut", "Beetroot", "Sugar Syrup"];
        occasions = ["Weddings", "Celebrations", "Gifts"];
        imagePlaceholder = "pink-chamcham";
      },
      {
        id = 18;
        name = "Chocolate Chamcham";
        category = #Chamcham;
        description = "Modern fusion chamcham draped in chocolate ganache, bridging Bengali tradition with global taste.";
        price = "₹45/pc";
        ingredients = ["Chenna", "Dark Chocolate", "Cocoa", "Sugar Syrup"];
        occasions = ["Kids Parties", "Gifting", "Modern Celebrations"];
        imagePlaceholder = "chocolate-chamcham";
      },
      {
        id = 19;
        name = "Saffron Chamcham";
        category = #Chamcham;
        description = "Royal chamcham infused with pure Kashmiri saffron and garnished with silver leaf and pistachios.";
        price = "₹55/pc";
        ingredients = ["Chenna", "Saffron", "Pistachio", "Silver Leaf", "Sugar Syrup"];
        occasions = ["Weddings", "Eid", "Special Occasions"];
        imagePlaceholder = "saffron-chamcham";
      },
      {
        id = 20;
        name = "Pista Chamcham";
        category = #Chamcham;
        description = "Chenna rolls coated in finely ground pistachio crumbs with a fragrant cardamom sugar syrup.";
        price = "₹50/pc";
        ingredients = ["Chenna", "Pistachio", "Cardamom", "Sugar Syrup"];
        occasions = ["Eid", "Weddings", "Premium Gifts"];
        imagePlaceholder = "pista-chamcham";
      },
    ];
    for (item in items.vals()) {
      sweets.add(item);
    };
  };

  public func getAll(sweets : List.List<Sweet>) : [Sweet] {
    sweets.toArray();
  };

  public func getById(sweets : List.List<Sweet>, id : Nat) : ?Sweet {
    sweets.find(func(s) { s.id == id });
  };

  public func getByCategory(sweets : List.List<Sweet>, category : Category) : [Sweet] {
    sweets.filter(func(s) {
      switch (s.category, category) {
        case (#Sandesh, #Sandesh) true;
        case (#Rasgulla, #Rasgulla) true;
        case (#Barfi, #Barfi) true;
        case (#Laddoo, #Laddoo) true;
        case (#MishtiDoi, #MishtiDoi) true;
        case (#Chamcham, #Chamcham) true;
        case _ false;
      };
    }).toArray();
  };
};
