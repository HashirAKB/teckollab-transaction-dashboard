import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const sampleData = [{
  trackingId: "#20462",
  product: "MacBook Pro",
  productImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format",
  customer: "Matt Dickerson",
  date: new Date("2024-03-15"),
  amount: 1299.99,
  paymentMode: "Credit Card",
  status: "Delivered"
},
{
  trackingId: "#18933",
  product: "iPhone 15 Pro",
  productImage: "https://images.unsplash.com/photo-1696851851371-63588f2c4f9d?w=500&auto=format",
  customer: "Sarah Wilson",
  date: new Date("2024-03-14"),
  amount: 999.99,
  paymentMode: "PayPal",
  status: "Process"
},
{
  trackingId: "#19855",
  product: "AirPods Pro",
  productImage: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format",
  customer: "James Rodriguez",
  date: new Date("2024-03-13"),
  amount: 249.99,
  paymentMode: "Transfer Bank",
  status: "Delivered"
},
{
  trackingId: "#21044",
  product: "iPad Air",
  productImage: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format",
  customer: "Emma Thompson",
  date: new Date("2024-03-12"),
  amount: 599.99,
  paymentMode: "Credit Card",
  status: "Cancelled"
},
{
  trackingId: "#20188",
  product: "Samsung Galaxy S24",
  productImage: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format",
  customer: "Michael Chen",
  date: new Date("2024-03-11"),
  amount: 899.99,
  paymentMode: "Google Pay",
  status: "Process"
},
{
  trackingId: "#19477",
  product: "Sony WH-1000XM4",
  productImage: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format",
  customer: "Lisa Parker",
  date: new Date("2024-03-10"),
  amount: 349.99,
  paymentMode: "Apple Pay",
  status: "Delivered"
},
{
  trackingId: "#20899",
  product: "Nintendo Switch OLED",
  productImage: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&auto=format",
  customer: "David Kim",
  date: new Date("2024-03-09"),
  amount: 299.99,
  paymentMode: "PayPal",
  status: "Process"
},
{
  trackingId: "#21233",
  product: "Dell XPS 13",
  productImage: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format",
  customer: "Rachel Green",
  date: new Date("2024-03-08"),
  amount: 1199.99,
  paymentMode: "Credit Card",
  status: "Delivered"
},
{
  trackingId: "#19666",
  product: "Apple Watch Series 9",
  productImage: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&auto=format",
  customer: "Tom Anderson",
  date: new Date("2024-03-07"),
  amount: 399.99,
  paymentMode: "Transfer Bank",
  status: "Process"
},
{
  trackingId: "#20755",
  product: "LG OLED TV",
  productImage: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format",
  customer: "Jessica Martinez",
  date: new Date("2024-03-06"),
  amount: 1499.99,
  paymentMode: "Financing",
  status: "Process"
},{
  trackingId: "#21377",
  product: "Bose QuietComfort",
  productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
  customer: "Kevin White",
  date: new Date("2024-03-05"),
  amount: 279.99,
  paymentMode: "Credit Card",
  status: "Delivered"
},
{
  trackingId: "#19288",
  product: "Canon EOS R6",
  productImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format",
  customer: "Anna Lee",
  date: new Date("2024-03-04"),
  amount: 2499.99,
  paymentMode: "PayPal",
  status: "Process"
},
{
  trackingId: "#20644",
  product: "Microsoft Surface",
  productImage: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format",
  customer: "Chris Brown",
  date: new Date("2024-03-03"),
  amount: 999.99,
  paymentMode: "Transfer Bank",
  status: "Delivered"
},
{
  trackingId: "#21088",
  product: "PlayStation 5",
  productImage: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format",
  customer: "Maria Garcia",
  date: new Date("2024-03-02"),
  amount: 499.99,
  paymentMode: "Cash on Delivery",
  status: "Cancelled"
},
{
  trackingId: "#19799",
  product: "Dyson V15",
  productImage: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&auto=format",
  customer: "Paul Wilson",
  date: new Date("2024-03-01"),
  amount: 699.99,
  paymentMode: "Credit Card",
  status: "Delivered"
},
{
  trackingId: "#20533",
  product: "iPad Pro",
  productImage: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=500&auto=format",
  customer: "Sophie Taylor",
  date: new Date("2024-02-29"),
  amount: 799.99,
  paymentMode: "Apple Pay",
  status: "Process"
},
{
  trackingId: "#21455",
  product: "GoPro Hero 11",
  productImage: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=500&auto=format",
  customer: "Ryan Johnson",
  date: new Date("2024-02-28"),
  amount: 399.99,
  paymentMode: "PayPal",
  status: "Delivered"
},
{
  trackingId: "#19544",
  product: "Kindle Paperwhite",
  productImage: "https://images.unsplash.com/photo-1597437243114-b56325b0e78b?w=500&auto=format",
  customer: "Emily Davis",
  date: new Date("2024-02-27"),
  amount: 139.99,
  paymentMode: "Amazon Pay",
  status: "Delivered"
},
{
  trackingId: "#20822",
  product: "Samsung Frame TV",
  productImage: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format",
  customer: "Daniel Lee",
  date: new Date("2024-02-26"),
  amount: 1299.99,
  paymentMode: "Financing",
  status: "Process"
},
{
  trackingId: "#21199",
  product: "MacBook Air",
  productImage: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format",
  customer: "Laura Miller",
  date: new Date("2024-02-25"),
  amount: 999.99,
  paymentMode: "Credit Card",
  status: "Delivered"
},
{
  trackingId: "#19633",
  product: "Xbox Series X",
  productImage: "https://images.unsplash.com/photo-1621259182978-fbf433fd6eb7?w=500&auto=format",
  customer: "Alex Turner",
  date: new Date("2024-02-24"),
  amount: 499.99,
  paymentMode: "Transfer Bank",
  status: "Process"
},
{
  trackingId: "#20711",
  product: "DJI Mini 3",
  productImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&auto=format",
  customer: "Nina Patel",
  date: new Date("2024-02-23"),
  amount: 469.99,
  paymentMode: "PayPal",
  status: "Delivered"
},
{
  trackingId: "#21344",
  product: "Sonos Arc",
  productImage: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format",
  customer: "Mark Wilson",
  date: new Date("2024-02-22"),
  amount: 899.99,
  paymentMode: "Credit Card",
  status: "Process"
},
{
  trackingId: "#19922",
  product: "Apple Magic Keyboard",
  productImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format",
  customer: "Helen Zhang",
  date: new Date("2024-02-21"),
  amount: 299.99,
  paymentMode: "Apple Pay",
  status: "Delivered"
},
{
  trackingId: "#20577",
  product: "Ring Doorbell Pro",
  productImage: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format",
  customer: "Steve Rogers",
  date: new Date("2024-02-20"),
  amount: 169.99,
  paymentMode: "Amazon Pay",
  status: "Process"
},
{
  trackingId: "#21466",
  product: "Beats Studio Pro",
  productImage: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format",
  customer: "Diana Prince",
  date: new Date("2024-02-19"),
  amount: 349.99,
  paymentMode: "Credit Card",
  status: "Delivered"
},
{
  trackingId: "#19755",
  product: "Logitech MX Master",
  productImage: "https://images.unsplash.com/photo-1585770536735-27993a080586?w=500&auto=format",
  customer: "Bruce Wayne",
  date: new Date("2024-02-18"),
  amount: 99.99,
  paymentMode: "PayPal",
  status: "Process"
},
{
  trackingId: "#20844",
  product: "Google Pixel 8",
  productImage: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format",
  customer: "Clark Kent",
  date: new Date("2024-02-17"),
  amount: 699.99,
  paymentMode: "Google Pay",
  status: "Delivered"
},
{
  trackingId: "#21022",
  product: "Meta Quest 3",
  productImage: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&auto=format",
  customer: "Peter Parker",
  date: new Date("2024-02-16"),
  amount: 499.99,
  paymentMode: "Credit Card",
  status: "Process"
},
{
  trackingId: "#19866",
  product: "Razer Blade 15",
  productImage: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=500&auto=format",
  customer: "Tony Stark",
  date: new Date("2024-02-15"),
  amount: 1999.99,
  paymentMode: "Transfer Bank",
  status: "Delivered"
},{
  trackingId: "#20198",
  product: "Samsung Galaxy Tab S9",
  productImage: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=500&auto=format",
  customer: "Natasha Romanoff",
  date: new Date("2024-02-14"),
  amount: 849.99,
  paymentMode: "Credit Card",
  status: "Process"
},
{
  trackingId: "#21567",
  product: "ASUS ROG Gaming Laptop",
  productImage: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format",
  customer: "Thor Odinson",
  date: new Date("2024-02-13"),
  amount: 1799.99,
  paymentMode: "PayPal",
  status: "Delivered"
},
{
  trackingId: "#19433",
  product: "Samsung 49\" Odyssey G9",
  productImage: "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?w=500&auto=format",
  customer: "Stephen Strange",
  date: new Date("2024-02-12"),
  amount: 1299.99,
  paymentMode: "Financing",
  status: "Process"
},
{
  trackingId: "#20788",
  product: "Logitech G Pro X",
  productImage: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format",
  customer: "Wanda Maximoff",
  date: new Date("2024-02-11"),
  amount: 129.99,
  paymentMode: "Amazon Pay",
  status: "Delivered"
},
{
  trackingId: "#21123",
  product: "Apple HomePod Mini",
  productImage: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format",
  customer: "Scott Lang",
  date: new Date("2024-02-10"),
  amount: 99.99,
  paymentMode: "Apple Pay",
  status: "Process"
},
{
  trackingId: "#19677",
  product: "Elgato Stream Deck",
  productImage: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format",
  customer: "Carol Danvers",
  date: new Date("2024-02-09"),
  amount: 149.99,
  paymentMode: "Credit Card",
  status: "Delivered"
},
{
  trackingId: "#20934",
  product: "Keychron K3",
  productImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format",
  customer: "Sam Wilson",
  date: new Date("2024-02-08"),
  amount: 84.99,
  paymentMode: "PayPal",
  status: "Cancelled"
},
{
  trackingId: "#21299",
  product: "Philips Hue Starter Kit",
  productImage: "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?w=500&auto=format",
  customer: "Bucky Barnes",
  date: new Date("2024-02-07"),
  amount: 199.99,
  paymentMode: "Google Pay",
  status: "Delivered"
},
{
  trackingId: "#19544",
  product: "Rode NT-USB Mini",
  productImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&auto=format",
  customer: "T'Challa",
  date: new Date("2024-02-06"),
  amount: 99.99,
  paymentMode: "Transfer Bank",
  status: "Process"
},
{
  trackingId: "#20677",
  product: "Samsung T7 SSD 1TB",
  productImage: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format",
  customer: "Shuri",
  date: new Date("2024-02-05"),
  amount: 119.99,
  paymentMode: "Credit Card",
  status: "Delivered"
},
{
  trackingId: "#21433",
  product: "LG 27\" 4K Monitor",
  productImage: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format",
  customer: "Peter Quill",
  date: new Date("2024-02-04"),
  amount: 499.99,
  paymentMode: "PayPal",
  status: "Process"
},
{
  trackingId: "#19888",
  product: "Corsair K95 RGB",
  productImage: "https://images.unsplash.com/photo-1595225476474-87563907198a?w=500&auto=format",
  customer: "Gamora",
  date: new Date("2024-02-03"),
  amount: 199.99,
  paymentMode: "Amazon Pay",
  status: "Delivered"
},
{
  trackingId: "#20544",
  product: "Razer DeathAdder V3",
  productImage: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format",
  customer: "Drax",
  date: new Date("2024-02-02"),
  amount: 69.99,
  paymentMode: "Credit Card",
  status: "Process"
},
{
  trackingId: "#21099",
  product: "Blue Yeti X",
  productImage: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format",
  customer: "Rocket Raccoon",
  date: new Date("2024-02-01"),
  amount: 169.99,
  paymentMode: "Transfer Bank",
  status: "Delivered"
},
{
  trackingId: "#19766",
  product: "Jabra Elite 85t",
  productImage: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format",
  customer: "Groot",
  date: new Date("2024-01-31"),
  amount: 229.99,
  paymentMode: "PayPal",
  status: "Cancelled"
},
{
  trackingId: "#20855",
  product: "Sony A7 IV",
  productImage: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=500&auto=format",
  customer: "Nebula",
  date: new Date("2024-01-30"),
  amount: 2499.99,
  paymentMode: "Financing",
  status: "Process"
},
{
  trackingId: "#21277",
  product: "Lenovo ThinkPad X1",
  productImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format",
  customer: "Mantis",
  date: new Date("2024-01-29"),
  amount: 1399.99,
  paymentMode: "Credit Card",
  status: "Delivered"
},
{
  trackingId: "#19433",
  product: "Apple AirPods Max",
  productImage: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format",
  customer: "Vision",
  date: new Date("2024-01-28"),
  amount: 549.99,
  paymentMode: "Apple Pay",
  status: "Process"
},
{
  trackingId: "#20699",
  product: "Nvidia RTX 4090",
  productImage: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format",
  customer: "Jane Foster",
  date: new Date("2024-01-27"),
  amount: 1599.99,
  paymentMode: "PayPal",
  status: "Delivered"
},
{
  trackingId: "#21144",
  product: "Samsung 990 Pro 2TB",
  productImage: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format",
  customer: "Okoye",
  date: new Date("2024-01-26"),
  amount: 219.99,
  paymentMode: "Transfer Bank",
  status: "Process"
},{
  trackingId: "#20423",
  product: "Alienware 34\" Monitor",
  productImage: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format",
  customer: "Nick Fury",
  date: new Date("2024-01-25"),
  amount: 999.99,
  paymentMode: "Credit Card",
  status: "Delivered"
},
{
  trackingId: "#21588",
  product: "Elgato Facecam",
  productImage: "https://images.unsplash.com/photo-1587476353771-b8df0253a2e5?w=500&auto=format",
  customer: "Maria Hill",
  date: new Date("2024-01-24"),
  amount: 199.99,
  paymentMode: "PayPal",
  status: "Process"
},
{
  trackingId: "#19654",
  product: "ASUS ZenBook Pro",
  productImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format",
  customer: "Phil Coulson",
  date: new Date("2024-01-23"),
  amount: 1499.99,
  paymentMode: "Financing",
  status: "Delivered"
},
{
  trackingId: "#20876",
  product: "DJI Air 3",
  productImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&auto=format",
  customer: "Peggy Carter",
  date: new Date("2024-01-22"),
  amount: 1099.99,
  paymentMode: "Transfer Bank",
  status: "Process"
},
{
  trackingId: "#21232",
  product: "Garmin Fenix 7",
  productImage: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format",
  customer: "Howard Stark",
  date: new Date("2024-01-21"),
  amount: 699.99,
  paymentMode: "Credit Card",
  status: "Cancelled"
},
{
  trackingId: "#19789",
  product: "LG C3 OLED 65\"",
  productImage: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format",
  customer: "Edwin Jarvis",
  date: new Date("2024-01-20"),
  amount: 2499.99,
  paymentMode: "Financing",
  status: "Delivered"
},
{
  trackingId: "#20543",
  product: "Sennheiser HD 660S",
  productImage: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format",
  customer: "Happy Hogan",
  date: new Date("2024-01-19"),
  amount: 499.99,
  paymentMode: "PayPal",
  status: "Process"
},
{
  trackingId: "#21345",
  product: "Apple Studio Display",
  productImage: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=500&auto=format",
  customer: "May Parker",
  date: new Date("2024-01-18"),
  amount: 1599.99,
  paymentMode: "Apple Pay",
  status: "Delivered"
},
{
  trackingId: "#19876",
  product: "Rode PSA1+",
  productImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&auto=format",
  customer: "Matt Murdock",
  date: new Date("2024-01-17"),
  amount: 129.99,
  paymentMode: "Credit Card",
  status: "Process"
},
{
  trackingId: "#20654",
  product: "Stream Deck XL",
  productImage: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format",
  customer: "Foggy Nelson",
  date: new Date("2024-01-16"),
  amount: 249.99,
  paymentMode: "Amazon Pay",
  status: "Delivered"
},
{
  trackingId: "#21432",
  product: "Intel Core i9-14900K",
  productImage: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&auto=format",
  customer: "Karen Page",
  date: new Date("2024-01-15"),
  amount: 589.99,
  paymentMode: "Transfer Bank",
  status: "Process"
},
{
  trackingId: "#19943",
  product: "Corsair H150i Elite",
  productImage: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format",
  customer: "Frank Castle",
  date: new Date("2024-01-14"),
  amount: 189.99,
  paymentMode: "PayPal",
  status: "Delivered"
},
{
  trackingId: "#20787",
  product: "Logitech Brio 4K",
  productImage: "https://images.unsplash.com/photo-1587476353771-b8df0253a2e5?w=500&auto=format",
  customer: "Jessica Jones",
  date: new Date("2024-01-13"),
  amount: 199.99,
  paymentMode: "Credit Card",
  status: "Cancelled"
},
{
  trackingId: "#21565",
  product: "Samsung Odyssey OLED G8",
  productImage: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=500&auto=format",
  customer: "Luke Cage",
  date: new Date("2024-01-12"),
  amount: 1299.99,
  paymentMode: "Financing",
  status: "Process"
},
{
  trackingId: "#19898",
  product: "Zhiyun Crane 3S",
  productImage: "https://images.unsplash.com/photo-1589872275000-436731194ccd?w=500&auto=format",
  customer: "Danny Rand",
  date: new Date("2024-01-11"),
  amount: 749.99,
  paymentMode: "PayPal",
  status: "Delivered"
},
{
  trackingId: "#20632",
  product: "CalDigit TS4",
  productImage: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format",
  customer: "Colleen Wing",
  date: new Date("2024-01-10"),
  amount: 399.99,
  paymentMode: "Credit Card",
  status: "Process"
},
{
  trackingId: "#21478",
  product: "Shure SM7B",
  productImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&auto=format",
  customer: "Misty Knight",
  date: new Date("2024-01-09"),
  amount: 399.99,
  paymentMode: "Amazon Pay",
  status: "Delivered"
},
{
  trackingId: "#19765",
  product: "M2 Mac Mini",
  productImage: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format",
  customer: "Claire Temple",
  date: new Date("2024-01-08"),
  amount: 799.99,
  paymentMode: "Apple Pay",
  status: "Process"
},
{
  trackingId: "#20897",
  product: "Steam Deck OLED",
  productImage: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&auto=format",
  customer: "Elektra Natchios",
  date: new Date("2024-01-07"),
  amount: 549.99,
  paymentMode: "PayPal",
  status: "Delivered"
},
{
  trackingId: "#21234",
  product: "ASUS ROG Swift PG27UQX",
  productImage: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format",
  customer: "Wilson Fisk",
  date: new Date("2024-01-06"),
  amount: 2999.99,
  paymentMode: "Financing",
  status: "Process"
}];

async function main() {
  console.log('Start seeding...');
  await prisma.transaction.deleteMany({});
  await prisma.$executeRaw`DBCC CHECKIDENT ('transactions', RESEED, 0);`;
  
  for (const data of sampleData) {
    try {
    const transaction = await prisma.transaction.create({
      data: {
        trackingId: data.trackingId,
        product: data.product,
        productImage: data.productImage,
        customer: data.customer,
        date: data.date,
        // Convert number to Prisma Decimal
        amount: new Prisma.Decimal(data.amount),
        paymentMode: data.paymentMode,
        status: data.status,
      }
    });
    console.log(`Created transaction with id: ${transaction.id}`);
  } catch (error) {
      console.error(`Error creating transaction ${data.trackingId}:`, error);
  }
  console.log('Seeding finished.');
}
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });