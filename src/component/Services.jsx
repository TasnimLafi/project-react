import React,{useState} from 'react'
import Navbar from './Navbar'
import TravelTheWorld from './TravelTheWorld'
import { VscSearch } from 'react-icons/vsc'
import HotelCard from './HotelCard'
import HotelModal from './HotelModal'
import CommentModal from './CommentModal'


const Services = ({setsearch,search}) => {
    const [activeButton, setActiveButton] = useState(null);
    const [filter, setfilter] = useState("")

    const countries = [
      'All','Tunisia', 'France', 'Egypt', 'Italy', 'Qatar', 'Morroco', 'Brazil', 'Britain', 'Canada'
    ];
  
    const handleClick = (country) => {
      setActiveButton(country);
      setfilter(country);
    };
    const hotels=[
        {
            image:["https://res.cloudinary.com/grand-luxury/image/upload/w_1920/remote_glh/original/111663-root-exteriors-gardens.jpg","https://static01.nyt.com/images/2016/06/05/travel/06UPDATE2/06UPDATE2-superJumbo.jpg","https://as2.ftcdn.net/v2/jpg/04/11/46/41/1000_F_411464133_Wea3HZvf5ViQ98cYfFYmYpcqs3WCNUPj.jpg","https://cdn.onemileatatime.com/wp-content/uploads/2021/10/Ritz-Paris-73.jpeg?width=375&auto_optimize=low&quality=75&height=220&aspect_ratio=75%3A44"],
            name:"Hôtel ritz paris",
            rating:"4.6★",
            country:"France All",
            price:"1111$/person",
            room_img:["https://media.cntraveler.com/photos/58efee5fc8adcd6948bb8c17/16:9/w_2560%2Cc_limit/Bedroom-RitzParis-France-VincentLeroux.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/22/6a/prestige-suite-windsor.jpg?w=700&h=-1&s=1","https://images.trvl-media.com/lodging/1000000/30000/22000/21972/338e2d69.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"]
        },
        {
            image:["https://media-cdn.tripadvisor.com/media/photo-s/2c/21/9e/68/exterior-view.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/164048892.jpg?k=24a9a41e27db58dbd8f263568b7d0e0247aed71dfc653b79f06ccff8f0018bf1&o=&hp=1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-XSTr9909q2jr3jv528y7YnAWv0eRzcMaQ&s"],
            name:"Hotel Aston La Scala/Nice",
            rating:"3.9★",
            country:"France All",
            price:"11111$/person",
            room_img:["https://hotel-aston.com/wp-content/uploads/2021/04/chambre-confort-hotel-aston1-1024x683.jpg","https://hotelnice.fr/system/images/000/019/682/33616153-big.jpg?1483608356","https://hotelnice.fr/system/images/000/019/683/23324567-big.jpg?1483608357"]
        },
        {
            image:["https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/77/2018/03/30163302/mgallery-lyon-carlton-news-1500x690.jpg","https://media.dayuse.com/hotels/8046/662203bceba374b97e52308e49bfcd38-hotel-carlton-lyon-by-mgallery.jpg?frz-w=3840&frz-fit=cover","https://hotelsalyon.com/system/images/000/004/533/33898905-big.jpg?1470910154"],
            name:"Hotel Carlton Lyon",
            rating:"4.5★",
            country:"France All",
            price:"11111$/person",
            room_img:["https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/77/2018/03/30100105/mgallery-lyon-carlton-chambre-generique1.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/8d/25/ef/cozy-room-double-bed--v13841392.jpg?w=700&h=-1&s=1","https://media.dayuse.com/hotels/8046/61703061f90e10e60d08d86945db3dc5-hotel-carlton-lyon-by-mgallery.jpg?frz-w=3840&frz-fit=cover"]
        },
        {
          image:["https://images.trvl-media.com/lodging/84000000/83990000/83983200/83983115/ea46e14c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill","https://cf.bstatic.com/xdata/images/hotel/max1024x768/516930402.jpg?k=36f6ac41d5e8cb6679f64171b3834f736828a8eeb024d9aa30ecfc2c1a8b6a86&o=&hp=1","https://1045851857.rsc.cdn77.org/photos/21188/Royal%20Tulip%20Korbous%203.jpg"],
          name:"Royal Tulip Korbous Bay Thalasso and Springs",
          rating:"3.8★",
          country:"Tunisia All",
          price:"176$/person",
          room_img:["https://media.iceportal.com/148514/photos/73465816_XL.jpg","https://www.resabo.com/cr.fwk/images/hotels/Hotel-8776-20220706-103729.jpg","https://image.resabooking.com/images/hotel/Royal_Tulip_Korbous_Bay_Thalasso_&_SPRINGS_7.jpg"]
      },
      {
        image:["https://www.labadira.com/wp-content/uploads/2020/06/slider3.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/75881056.jpg?k=5ae83fc38270b09384307c99fd41d7e497b79c73e54d7c2538f011d18c011d3d&o=&hp=1","https://www.labadira.com/wp-content/uploads/2021/03/Restaurant-Adra-2-principale.jpg"],
        name:"La Badira Hammamet",
        rating:"4.4★",
        country:"Tunisia All",
        price:"255$/person",
        room_img:["https://www.resabo.com/cr.fwk/images/hotels/Hotel-3987-20240108-121417.jpg","https://www.labadira.com/wp-content/uploads/2020/07/Suite-Nour-Chambre-mer.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/18/ef/d5/suite-wallis-salon.jpg?w=700&h=-1&s=1"]
    },
    {
      image:["https://myhotel.tn/public/images/image/ananatara10_0.62377800-1694615347.webp","https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/brandpage/destinations/properties/anantara_sahara_tozeur_resortroyal_villa_terrace.jpg","https://www.resabo.com/cr.fwk/images/hotels/Hotel-7075-20220929-111718.jpg"],
      name:"Anantara Sahara Tozeur Resort and Villas",
      rating:"4.6★",
      country:"Tunisia All",
      price:"300$/person",
      room_img:["https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-tozeur-resort/accommodation/room-category/anantara_tozeur_deluxe_sahara_view_room_984x532.jpg","https://www.tnbooking.tn/images/hotels/251/1601019214.webp","https://www.tnbooking.tn/images/hotels/251/1601018198.webp"]
  },
  {
    image:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/94190040.jpg?k=ef1c7c9927dbc4c9bb8ade64114c12302c1490a01530fec267460efffb8fdf47&o=&hp=1","https://cdn.audleytravel.com/1928/1376/79/1336750-pool-four-seasons-hotel-cairo-at-nile-plaza.jpg","https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-0,0000-3840,0000-2160,0000/publish/content/dam/fourseasons/images/web/CAI/CAI_463_3840x2160.jpg"],
    name:"Anantara Sahara Tozeur Resort and Villas",
    rating:"4.7★",
    country:"Egypt All",
    price:"1 435$/person",
    room_img:["https://www.abercrombiekent.co.uk/-/media/abercrombieandkent/images/accommodation/north-africa-and-middle-east/egypt/four-seasons-nile-plaza-premier-room.jpg?la=en&hash=80498829BDEE17039ED39C2BB37D200A5A9A95DE","https://imageio.forbes.com/specials-images/imageserve/62e75070e1d3006a60b0c774/In-room-breakfast-with-a-view/960x0.jpg?height=474&width=711&fit=bounds","https://cdn.audleytravel.com/1050/749/79/1336747-bella-restaurant-the-four-seasons-hotel-cairo-at-nile-plaza.webp"]
},
{
  image:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/59/db/9a/adrere-amellal-desert.jpg?w=700&h=-1&s=1","https://www.adrereamellal.com/adrere/wp-content/uploads/2019/12/Adrere-amellal-siwa-lake-spa.jpg","https://adrere-amellal-siwa-oasis-eg-1.albooked.com/data/Photos/OriginalPhoto/7128/712802/712802776/Adrere-Amellal-Hotel-Siwa-Oasis-Exterior.JPEG"],
  name:"Adrère Amellal in Siwa Oasis",
  rating:"4.3★",
  country:"Egypt All",
  price:"505$/person",
  room_img:["https://adrere-amellal-siwa-oasis-eg-1.albooked.com/data/Photos/OriginalPhoto/7128/712802/712802632/Adrere-Amellal-Hotel-Siwa-Oasis-Exterior.JPEG","https://lh6.googleusercontent.com/proxy/sgXRNbrU6qpsycAzMazeZALefcdsvIc8lVvrUy9CbTVtXFIufjJhADgwqhjeIy9W7evQMB9UpARqEk2JagJQtq1GrzDfJf8aKDLTMQGf6SPNWhpTvE7z805BjWrMY-jhmXeLKvMIJT497fmzBuAUAbC6D86hEIx8lQ","https://images.squarespace-cdn.com/content/v1/52c9f4ebe4b02c7007cdd86a/1634649271910-20XRKS5P4F452N379GA2/ShaliLodge-Nina+Wessel+11.jpg"]
},
{
  image:["https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/7c/b1/19/al-tarfa-swimming-pool.jpg?w=600&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/7d/60/01/al-tarfa-lodge-pool-terrace.jpg?w=700&h=-1&s=1","https://c.regencyholidays.com/blog/blog/content/images/2022/07/Al-Tarfa-Desert-Sanctuary-Lodge---Spa.webp"],
  name:"Steam Ship Sudan",
  rating:"4.7★",
  country:"Egypt All",
  price:"988$/person",
  room_img:["https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/7c/b1/1a/room.jpg?w=600&h=-1&s=1","https://protourstravel.com/wp-content/uploads/2022/11/Western-Desert-Al-Tarfa-Lodge-1-1-929x450.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/7c/b1/1b/sahara-suite.jpg?w=600&h=-1&s=1"]
},{
  image:["https://romecavalieri.com/wp-content/uploads/2016/03/Party-in-Planetarium-Suite-Rooftop-Terrace-e1469603819575.jpg","https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill,w_1920,h_1080,q_70,f_auto,g_auto/Imagery/Property%20Photography/Waldorf%20Astoria/R/ROMHIWA/Penthouse%20Suite%20Rooftop%20Terrace-2.jpg","https://images.trvl-media.com/lodging/1000000/20000/15000/14941/f7903677.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"],
  name:"Rome Cavalieri A Waldorf Astoria Hotel ",
  rating:"4.7★",
  country:"Italy All",
  price:"935$/person",
  room_img:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTtqCOGYkkK_Gm8MeoG57v7iu1pLFKspkxw&s","https://romeexcellence.com/wp-content/uploads/2022/12/Petronius-Suite_Entrance.jpg","https://res.cloudinary.com/lastminute/image/upload/q_auto/v1444382566/Corner_Suite_Living_Room_bsbpuz.jpg"]
},{
  image:["https://venetosecrets.com/wp-content/uploads/2022/08/DSCF9392.jpg","https://www.orizzonteitalia.com/media/partners/Luxury-hotel-venezia-hotel-danieli.jpg","https://y.cdrst.com/foto/hotel-sf/4300/granderesp/hotel-danieli-a-luxury-collection-hotel-venice-general-12065cc4.jpg"],
  name:"Hotel Danieli A Luxury Collection Hotel",
  rating:"4.5★",
  country:"Italy All",
  price:"4 935$/person",
  room_img:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/426549822.jpg?k=2da54791980a2ae0d416483e9d1b3eed0023a3f86fea2ca83405f78db2b062de&o=&hp=1","https://www.hoteldanieli.com/alt/img-opt/~70.1530.0,0000-72,7500-1400,0000-787,5000/publish/content/dam/danieli/images/web/19_Deluxe_Lagoon_View_Room_1400x933.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/426511834.jpg?k=a6d8640867b4d5e086a4dfeed6a029fc0690e02b5372b460c17befaf6a5dd182&o=&hp=1"]
  },{
    image:["https://www.travelandleisure.com/thmb/29uR41-NskYbR9fzmjIWBffjmeg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TheNedDoha_Exterior_NightV2-0a333101b43f4324864d6a7a52ecd858.jpg","https://hospitalitydesign.com/wp-content/uploads/2023/01/The-Ned-Doha-Malibu-Kitchen-Restaurant.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/408949086.jpg?k=93fbeac7dea3c5d34567296898f488c01e88dfd0258b63faf26d431c13b9cab7&o=&hp=1"],
    name:"The Ned Doha ",
    rating:"4.6★",
    country:"Qatar All",
    price:"569$/person",
    room_img:["https://res.cloudinary.com/soho-house/image/upload/w_1450,h_1000/t_dc_base/sitecore-prod/ned/theneddoha_cornichesuite_bedroom_seaview1.jpg?q=75&w=2560","https://newindoha.com/wp-content/uploads/2023/01/20230129_164605-scaled.jpg","https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1236690/PSX_20221013_205909-e1665725850416-916x515.jpg"]
  },{
    image:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/2c/44/17/pool-exterior-day.jpg?w=700&h=-1&s=1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Unlrt6emt06Hoc-0Z5f1GxMPHOLmxn0SNQ&s","https://www.doha-hotels.net/data/Pics/OriginalPhoto/14168/1416894/1416894603/pic-doha-5.JPEG"],
    name:"The Chedi Katara Hotel and Resort",
    rating:"4.8★",
    country:"Qatar All",
    price:"1 935$/person",
    room_img:["https://static-new.lhw.com/HotelImages/Final/LW6273/lw6273_155882940_790x490.jpg","https://cdn-img.readytotrip.com/t/1024x768/content/f1/d7/f1d715e97185e24dc93b79e5dcb5d4d18c75838b.jpeg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/1f/06/89/the-chedi-katara-hotel.jpg?w=700&h=-1&s=1"]
  },{
    image:["https://www.ahstatic.com/photos/b4t9_ho_00_p_1024x768.jpg","https://media.cntraveler.com/photos/636e986e32eef6866509140c/16:9/w_2560,c_limit/Banyan%20Tree%20Doha%20-%20Lobby.jpg","https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1097867/Vertigo-916x516.jpg"],
    name:"Banyan Tree Doha",
    rating:"4.9★",
    country:"Qatar All",
    price:"7 935$/person",
    room_img:["https://media.cntraveler.com/photos/636e985f6b04ae53c818df84/16:9/w_2560%2Cc_limit/Banyan%2520Tree%2520Doha%2520-%2520Serenity%2520Club%2520Suites%25201.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/294561360.jpg?k=c36731427fa4bf687feb1fc050f96ecc7e71655344bae5ac6981953c2571c4c4&o=&hp=1","https://www.hospitalitynet.org/picture/xxl_153123853.jpg?t=1613379929"]
  },{
    image:["https://www.topjour.com/wp-content/uploads/2018/07/Hotel-Savoy-Marrakech-Piscine-le-soir-820x420.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/a2/f8/05/restaurant.jpg?w=500&h=-1&s=1","https://www.kayak.fr/rimg/himg/be/56/53/ice-2417499-102947925-589196.jpg?width=1366&height=768&crop=true"],
    name:"Savoy Le Grand Hotel Marrakech",
    rating:"4.2★",
    country:"Morroco All",
    price:"505$/person",
    room_img:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/288985996.jpg?k=4fe70003b959746bf8bfa0145d7d1b1ba90776d78b4e653c57e4e3728d2b5363&o=&hp=1","https://images.trvl-media.com/lodging/13000000/12440000/12430700/12430665/53f950ff.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://savoy-le-grand-hotel.marrakeshotels.com/data/Pics/OriginalPhoto/11810/1181066/1181066785/pic-savoy-le-grand-hotel-marrakesh-76.JPEG"]
  },{
    image:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/297161464.jpg?k=99445107b63f802d46aecae25a91dc2841014ca7dbe094f9f505f459ed00e8c3&o=&hp=1","https://carter.eu/wp-content/uploads/2023/11/Marina-Bay-Sands-Singapur-basen.jpg","https://pix10.agoda.net/hotelImages/10603/-1/6b2ad0a4232e0a390652a138d9813761.jpg?ca=18&ce=1&s=702x392"],
    name:"Marina Bay Hotel",
    rating:"4.4★",
    country:"Morroco All",
    price:"335$/person",
    room_img:["https://www.marinabaysands.com/content/dam/marinabaysands/hotel/sands-premier-suite/sands-premier-suite-1920x1080.png","https://www.marinabaysands.com/content/dam/marinabaysands/homepage/SandsPremierSuites_GardenView_02_LR.jpg","https://vulcanpost.com/wp-content/uploads/2023/07/marina-bay-sands-renovated-suite-review-006.jpg"]
  },{
    image:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/474623541.jpg?k=7aeb5990424f713d3eaa4a146df42337d05da335d3dccef46abbe8ea3975d513&o=&hp=1","https://images3.bovpg.net/fw/back/fr/media/1/1/6/6/4/166473.jpg","https://www.kayak.fr/rimg/himg/a9/44/bf/ice-2308941-103084786-913235.jpg?width=1366&height=768&crop=true"],
    name:"Hyatt Place Taghazout Bay",
    rating:"4.4★",
    country:"Morroco All",
    price:"335$/person",
    room_img:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/424857985.jpg?k=bf6b709c8433fa65822463a6e432f48aceb65039ce5bbdf3eb4e972ae0f864ee&o=&hp=1","https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/05/08/1317/Hyatt-Place-Taghazout-P034-King-Room.jpg/Hyatt-Place-Taghazout-P034-King-Room.16x9.jpg?imwidth=1280","https://images2.bovpg.net/r/media/1/4/8/1/7/481753.jpg"]
  },{
    image:["https://www.andbeyond.com/wp-content/uploads/sites/5/Belmond-Hotel-Das-Cataratas-with-Iguaza-Falls.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/22695238.jpg?k=5872eaeef0cb0d5b24d4e3a6627bff75bd23d6f043793f82523ea6b497a4786b&o=&hp=1","https://media.cntraveler.com/photos/61d2c12de3510d58a6d680e6/16:9/w_2560,c_limit/Belmond-Hotel-das-Cataratas-3.jpg"],
    name:"Belmond Hotel das Cataratas ",
    rating:"4.9★",
    country:"Brazil All",
    price:"1 235$/person",
    room_img:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/175127603.jpg?k=e37942a84524fe2e194239facb0fcec72ccd83bfab5ca6efe1f9044b5b09e455&o=&hp=1","https://secure.s.forbestravelguide.com/img/properties/belmond-hotel-das-cataratas/belmond-hotel-das-cataratas-guestroom.jpg","https://cdn.kiwicollection.com/media/room_images/PR001836/xl/001836-noble-suite1.jpg"]
  },{
    image:["https://www.oetkercollection.com/media/42386/meu-projeto-2.jpg?anchor=center&mode=crop&quality=85&width=1000&height=500&rnd=133154133310000000","https://cf.bstatic.com/xdata/images/hotel/max1024x768/101329427.jpg?k=93c5344336b4e55cab5e0bc8f8a208474b83514358cca7628929430af82cd757&o=&hp=1","https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1326477.jpg"],
    name:"Palácio Tangará  ",
    rating:"4.8★",
    country:"Brazil All",
    price:"1 835$/person",
    room_img:["https://www.thehotelguru.com/_images/13/01/13017dd725a5069da6472e4c1daa63e1/palacio-tangara-s1180x560.jpg","https://www.oetkercollection.com/media/22491/palacio-tangara-sao-paulo-room-junior-suite.jpg?anchor=center&mode=crop&quality=85&width=680&height=460&rnd=132576131100000000","https://www.oetkercollection.com/media/20328/palacio-tangara-sao-paulo-room-deluxe-junior-suite-4.jpg?anchor=center&mode=crop&quality=85&width=680&height=460&rnd=132576078070000000"]
  },{
    image:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/489279067.jpg?k=9f48e1a6c57e4f5105577536cab2e0b03022cdf2d768430bcf4dc4ad5e8b6ad7&o=&hp=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/71/61/67/hotel-fasano-rio-de-janeiro.jpg?w=700&h=-1&s=1","https://www.kayak.fr/rimg/himg/ff/c7/52/expediav2-158856-84f8d7-410496.jpg?width=968&height=607&crop=true"],
    name:"Fasano Rio de Janeiro ",
    rating:"4.7★",
    country:"Brazil All",
    price:"1 735$/person",
    room_img:["https://images.trvl-media.com/lodging/2000000/1550000/1542100/1542064/8cbc59b0.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill","https://cf.bstatic.com/xdata/images/hotel/max1024x768/489294322.jpg?k=d4789d2ce4cae6ff90dc36440289a72257e54bff13d25da4d64d6121abc244bc&o=&hp=1","https://www.theluxevoyager.com/wp-content/uploads/2019/03/Fasano-Rio-de-Janeiro-Superior-internal-view-971x546.jpg"]
  },{
    image:["https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2023/05/Lime-Wood-in-the-summer-Credit-Jake-Eastham-scaled.jpg","https://images.mrandmrssmith.com/images/828x552/5054848-lime-wood-hampshire-united-kingdom.jpg","https://fromthepoolside.com/wp-content/uploads/2022/06/lime-wood-hotel-review-10.jpg"],
    name:"Lime Wood Hotel ",
    rating:"4.7★",
    country:"Britain All",
    price:"2 335$/person",
    room_img:["https://www.sleepermagazine.com/wp-content/uploads/2021/06/lime-wood.jpg","https://d3e7bfg0h5jt4g.mrandmrssmith.com/images/480x327/2893152-lime-wood-hampshire-united-kingdom.jpg","https://www.thereviewmag.co.uk/wp-content/uploads/2017/01/Limewood-bedroom-2-871x580.jpeg"]
  },{
    image:["https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/oxfordshire-buckinghamshire-berkshire/places/cliveden/library/built-heritage-history-and-collections/parterre-cliveden-1558583.jpg","https://www.johansens.com/wp-content/uploads/2016/05/England-Cliveden-House-115-e1711051802253.jpg","https://www.theluxuryspaedit.com/wp-content/uploads/formidable/6/17_July_Cliveden_Spa-40.jpg"],
    name:"Cliveden House, Berkshire",
    rating:"4.6★",
    country:"Britain All",
    price:"1 735$/person",
    room_img:["https://secure.s.forbestravelguide.com/img/properties/cliveden-house/Cliveden-House-Lady-Astor-bedroom.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/72405357.jpg?k=4c4cd04ff82fc649eb4dcabd3e7248e7f982ae22c9c87ca8d35e338428c682ea&o=&hp=1","https://www.clivedenhouse.co.uk/media/urxp0wrk/queen-charlotte-cliveden-house-1.png?anchor=center&mode=crop&quality=70&width=730&height=444&rnd=132875961996630000"]
  },{
    image:["https://dev.muddystilettos.co.uk/wp-content/uploads/2024/03/1-5.jpg","https://i.dailymail.co.uk/i/pix/2013/01/04/article-2257264-16C071F5000005DC-255_634x412.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/179686565.jpg?k=1d92c06e228256140ac0dafe942e89e1575ae566f8667f5a234eaaed9b3ff601&o=&hp=1"],
    name:"Pennyhill Park, Surrey ",
    rating:"4.6★",
    country:"Britain All",
    price:"1 335$/person",
    room_img:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/99/71/64/the-granary-suite-bedroom.jpg?w=700&h=-1&s=1","https://www.exclusive.co.uk/media/17892/pennyhill-157-edit-lingfield-low.jpg?anchor=center&mode=crop&width=1000&rnd=132520822710000000","https://cf.bstatic.com/xdata/images/hotel/max1024x768/92998217.jpg?k=9927d4b24fd0070bcdbf0aa393a31fd2ec345892b34a47a3d31dc375b2fe2f8a&o=&hp=1"]
  },
  {
    image:["https://images.adsttc.com/media/images/645a/8085/1424/c46d/a9a4/8508/large_jpg/ace-hotel-toronto-shim-sutcliffe-architects_1.jpg?1683652764","https://hospitalitydesign.com/wp-content/uploads/2022/07/Ace-Hotel-Toronto-%E2%80%94-Lobby-5-%E2%80%94-William-Jess-Laird-%E2%80%94-July-2022.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/425141755.jpg?k=40a65e157b35fa93add31c9eb3aa82abe625dd346f502075c1701565c17a2931&o=&hp=1"],
    name:"Ace Hotel Toronto ",
    rating:"4.4★",
    country:"Canada All",
    price:"888$/person",
    room_img:["https://www.ccwinc.com/userContent/projects/64925EE0-9B2E-9AB6-4852-87EF1DD4B434/finals/DSC_0557%20-%20web.jpg","https://nuvomagazine.com/wp-content/uploads/2022/08/Ace-Hotel-Toronto-%E2%80%94-Ace-Suite-2-%E2%80%94-William-Jess-Laird-%E2%80%94-July-2022-scaled.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlgx3r-b04PUajMilcQwnPod1lusGJnXVvw&s"]
  },
  {
    image:["https://banfflakelouise.bynder.com/m/b1e860e9fd3add0/2000x1080_jpg-2021_FairmontBanffSprings_Winter_Accommodation.jpg","https://ski-i.com/images/pub/img/image_gallery/accommodation/116/16168944__original.27310.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/380159202.jpg?k=8b22f6fd41a6191e70c3cfca23096e4e395f99070b98c0fc85fcdc5be31cdc65&o=&hp=1"],
    name:"Fairmont Banff Springs ",
    rating:"4.7★",
    country:"Canada All",
    price:"2 135$/person",
    room_img:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b5/7e/a4/fairmont-banff-springs.jpg?w=700&h=-1&s=1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DDD7Ae3XBpXwhfcUPY44cUBRRxgJVLpBS0-BISzyku-EM_CwdPMt0L__-aevoZiL6uo&usqp=CAU","https://www.ahstatic.com/photos/a550_ro_00_p_1024x768.jpg"]
  },
  {
    image:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/2e/8b/45/hotel-exterior.jpg?w=700&h=-1&s=1","https://media.lmpm.website/uploads/sites/2/2021/09/Four-Seasons-exterior2.jpeg","https://images.trvl-media.com/lodging/2000000/1030000/1029900/1029834/ab0cfa6b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"],
    name:"Four Seasons Resort Whistler",
    rating:"4.7★",
    country:"Canada All",
    price:"4 335$/person",
    room_img:["https://images.trvl-media.com/lodging/2000000/1030000/1029900/1029834/9405b31a.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill","https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1400194.jpg","https://www.hotelscombined.ca/rimg/himg/77/86/31/leonardo-420548-163251453-525401.jpg?width=1366&height=768&crop=true"]
  },
    ]
    const filteredhotels=hotels.filter(el=>el.name.toUpperCase().includes(search.toUpperCase()))
  return (
    <div className='services'>
    <VscSearch className='search-icon'/>
    <input onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='Destination,hotel,...'/>
    <div className="buttons">
    <div className="button-group">
      {countries.map((country) => (
        <button
          key={country}
          className={`toggle-button ${activeButton === country ? 'active' : ''}`}
          onClick={() => handleClick(country)}
        >
          {country}
        </button>
      ))}
      {console.log(filter)}
    </div>
    </div>
    <div className="list">
    {activeButton==null?hotels.filter(el=>el.name.toUpperCase().includes(search.toUpperCase())).map(el=><HotelCard el={el}/>):activeButton=="All"?hotels.filter(el=>el.country.includes(activeButton) && el.name.toUpperCase().includes(search.toUpperCase())).map(el=><HotelCard el={el}/>):activeButton==filter?hotels.filter(el=>el.country.includes(activeButton) && el.name.toUpperCase().includes(search.toUpperCase())).map(el=><HotelCard el={el}/>):null}
    </div>
    </div>
  )
}

export default Services
