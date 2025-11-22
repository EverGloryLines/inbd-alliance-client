export interface OfficeInfo {
  city: string;
  address: string;
  cell: string;
  imgSrc: string; // <-- Added this property
}

export interface Offices {
  name: string;
  code: string;
  imgSrc: string;
  offices: OfficeInfo[];
}

export const officeData: Offices[] = [
  {
    name: "India",
    code: "IN",
    imgSrc: "/offices/india-map.svg",
    offices: [
      {
        city: "Kolkata",
        address:
          "Neelam Apt, 1st Floor, J.B.B. Park Street, Kolkata 700016, West Bengal, India",
        cell: "+91 987 532 0566",
        imgSrc: "/offices/kolkata-office.jpg", // <-- Added image
      },
      {
        city: "Delhi",
        address:
          "401, 4th Floor, MG Road, DLF Phase-2, Sector 25, Gurugram 122002, Haryana, India",
        cell: "+91 971 520 8469",
        imgSrc: "/offices/delhi-office.webp", // <-- Added image
      },
      {
        city: "Nagpur",
        address:
          "2nd Floor, Plot No. 21/3, Outer Ring Road, Vihirgaon, Tal Umred, Nagpur 441204, India",
        cell: "+91 870 060 1613",
        imgSrc: "/offices/nagpur-office.jpg", // <-- Added image
      },
    ],
  },
  {
    name: "Bangladesh",
    code: "BD",
    imgSrc: "/offices/bd-map.svg",
    offices: [
      {
        city: "Dhaka",
        address: "7a , 22 kemal, ataturk tower, Kemal Ataturk Ave, Dhaka 1213",
        cell: "+880 180 697 2734",
        imgSrc: "/offices/dhaka-office.jpg", // <-- Added image
      },
      {
        city: "Chittagong",
        address:
          "Tower 71, 22nd Floor, Agrabad C/A, Chattogram 4100, Bangladesh",
        cell: "+880 1710 435544",
        imgSrc: "/offices/chittagong-office.jpg", // <-- Added image
      },
      {
        city: "Khulna",
        address: "Sikder Tower, 6th Floor, 6B KDA, Khulna 9100, Bangladesh",
        cell: "+880 1908 477352",
        imgSrc: "/offices/khulna-office.webp", // <-- Added image
      },
    ],
  },
  {
    name: "UAE",
    code: "AE",
    imgSrc: "/offices/uae-map.svg",
    offices: [
      {
        city: "Dubai",
        address:
          "Suite 4B, Dubai Creek Tower, Riggat Al Buteen, Deira, Dubai, UAE",
        cell: "+971 4 566 7050",
        imgSrc: "/offices/dubai-office.jpg", // <-- Added image
      },
    ],
  },
];
