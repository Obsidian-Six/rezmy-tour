import PackCard from "./card";

export const pack = [
  {
    id: 1,
    rating: 4,
    link: "packone",
    img: "https://storage.googleapis.com/a1aa/image/ebNaUVVjFent5hUWT8vuppFa_Zl8q_zOTINs2w2Z9cc.jpg",
    day: 4,
    night: 5,
    name: "Gorgeous Dubai ",
    price: "555",
    indPrice: "44,444",
    section: "per person on DBL/TWIN sharing basis ",
    location: "Dubai",
    details: [
      "Dubai Marina Dhow cruise.",
      "Dubai Half-day city tour.",
      "Dubai VAT included.",
      "Dubai frame with entrance ticket.",
      "04 Nights hotel accommodation in Park Regis Kris Kinn hotel or similar category hotel.",
      "Daily continental buffet breakfast at the hotel restaurant.",
      "Dubai Airport Arrival & Departure with PVT transfers (T1,T2&T3)",
      "Burj Khalifa with 124th floor non prime tickets.",
      "Dubai Desert safari with BBQ dinner.",
      "All tours are with entrance ticket and sharing transfers (SIC) (Except Dubai Airport Transfers)",
    ],
  },
  {
    id: 2,
    rating: 5,
    link: "packtwo",
    img: "https://storage.googleapis.com/a1aa/image/pvcSyeqKcElkQjzOB14QrpGVe2iwmK-BUYwQBkL0ZKM.jpg",
    day: 5,
    night: 6,
    name: "Stunning Dubai",
    price: "999",
    indPrice: "80,888",
    section: "per person on DBL/TWIN sharing basis ",
    location: "Dubai",
    details: [
      "Abu Dhabi Full day city tour",
      "Dubai Marina Dhow cruise.",
      "Dubai Half-day city tour.",
      "Sheikh Zayed grand Mosque",
      "Fountain show",
      "Dubai Airport Arrival & Departure with PVT transfers (T1,T2&T3)",
      "Daily continental buffet breakfast at the hotel restaurant.",
      "Burj Khalifa with 124th floor non prime tickets.",
      "05 Nights hotel accommodation in Movenpick hotel Bur Dubai or similar category hotel.",
      "Dubai Desert safari with BBQ dinner.",
      "Dubai frame with entrance ticket.",
      "Museum of the future",
      "Global Village & Miracle garden ",
      "Access to any one park on Yas Island. 9Ferrari world Abu Dhabi/ Yas Waterworld/ Warner Bros World/ Sea world)",
      "Dubai VAT included.",
      "All tours are with entrance ticket and sharing transfers (SIC) (Except Dubai Airport Transfers)",
    ],
  },
  {
    id: 3,
    rating: 4,
    link: "packthree",
    img: "https://storage.googleapis.com/a1aa/image/gan8fi4IYMfVjXxAtP8yh510-y9mRMJUJ0TJl-mHKq4.jpg",
    day: 6,
    night: 7,
    name: "Stunning Dubai and Fantastic Abu Dhabi ",
    price: "1333",
    indPrice: "1,15,111",
    section: "per person on DBL/TWIN sharing basis ",
    location: "Dubai and Abu Dhabi",
    details: [
      "02 Hour yacht tour with private transfers",
      "Madame Tussaudss with private transfers ",
      "Dubai Dolphin show with private transfers",
      "Dubai Desert safari with BBQ dinner.",
      "Global Village & Miracle garden with private transfers",
      "Burj Khalifa with 124th floor non prime tickets.",
      "Fountain show",
      "Dubai frame with entrance ticket.",
      "05 Nights hotel accommodation in Avani Deira hotel or similar category hotel in Dubai.",
      "01 Night hotel accommodation in W hotel or Similar 5* category hotel in Abu Dhabi.",
      "Daily continental buffet breakfast at the hotel restaurant.",
      "Dubai Airport Arrival & Departure with PVT transfers (T1,T2&T3)",
      "Inter hotel transfers on PVT basis ",
      "Dubai Half Day city tour on Sharing basis ",
      "Museum of the future with private transfers basis ",
      "Dubai desert safari with BBQ dinner on sharing basis",
      "Abu Dhabi Full day city tour with BAPS temple and Sheikh Zayed grand Mosque",
      "Access to any one park on Yas Island. 9Ferrari world Abu Dhabi/ Yas Waterworld/ Warner Bros World/ Sea world)",
      "Dubai VAT included.",
      "All tours are with entrance ticket and sharing transfers (SIC) (Except Dubai Airport Transfers)",
    ],
  },
];

const Packages = () => {
  return (
    <div className="max-w-6xl mx-auto md:my-10 max-md:my-8 grid md:grid-cols-3 sm:grid-cols-2 max-md:px-4  gap-6">
      {pack.map((ele, i) => (
        <PackCard ele={ele} key={i} />
      ))}
    </div>
  );
};

export default Packages;
