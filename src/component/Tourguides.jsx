import React from 'react';
import Slider from 'react-slick';
import TourguideCard from './TourguideCard';

const Tourguides = () => {
    const tourguide = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFlG8O2xeXzVQ5T2IlqpE9ahofoeAqWB_Cg&s",
            name: "Linda Meadows",
            location: "Paris, France",
            email: "linda.meadows@email.com",
            phone: "+33 1 23 45 67 89",
            info: "Experience: Tour Guide, Paris Art and History Tours Paris, France 2013 - Present Conducted guided tours of the Louvre, Musée d'Orsay, and various historic neighborhoods. Developed educational materials and interactive tour experiences. Achieved high customer satisfaction and repeat business. Certifications: Certified Tour Guide of Paris (Paris Tourism Authority) Art History Degree (University of Paris) Skills: Multilingual (English, French, Italian) In-depth knowledge of art history and cultural landmarks Strong communication and presentation skills Additional Info: Member of the French Association of Tour Guides Advanced training in museum curation and historical preservation"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDbkBdQ9-AhWI1EKLihKsQFHxwBTPaltuHg&s",
            name: "John Smith",
            location: "Bigcity, USA",
            email: "jhonsmith@example.com",
            phone: "(555) 987-6543",
            info: "Education: Bachelor of Science in Tourism Management Bigcity University, Bigcity, USA Graduated: May 2017 Skills Expert in leading large and small group tours In-depth knowledge of local culture, history, and geography Proficient in French and Mandarin Exceptional storytelling and presentation skills Strong leadership and problem-solving abilities Experience Lead Tour Guide Bigcity Tours, Bigcity, USA June 2018 - Present Conducted city tours for groups of up to 30 people Developed and customized tour itineraries based on client interests Trained and supervised new tour guides Received excellent customer feedback and high tour ratings Tour Guide Adventure Trails, Bigcity, USA June 2017 - May 2018 Led hiking and adventure tours Provided safety briefings and ensured participant safety Certifications Certified Tour Guide by the National Tour Guide Association"
        },
        {
            img: "https://pbs.twimg.com/profile_images/1643711706374307842/gAFmRrlo_400x400.jpg",
            name: "Sarah Green",
            location: "Greenfield, USA",
            email: "sarah.green@example.com",
            phone: "(555) 321-6548",
            info: "Sarah Green holds a Bachelor of Science in Environmental Science from Greenfield University and has been a Nature and Wildlife Tour Guide at Greenfield Nature Tours since July 2016. She leads nature walks and wildlife tours in national parks and reserves, educating visitors on local ecosystems and conservation efforts. Fluent in English and German, Sarah has extensive knowledge of local flora and fauna, strong observational skills, and is certified as a Wilderness First Responder and an Interpretive Guide by the National Association for Interpretation."
        },
        {
            img: "https://pbs.twimg.com/profile_images/1556752627869683712/Mbht8XgK_400x400.jpg",
            name: "Michael Brown",
            location: "Heritageville, USA",
            email: "michael.brown@example.com",
            phone: "(555) 654-7890",
            info: "Michael Brown, with a Master of Arts in Art History from Heritageville University, has been a Cultural Tour Guide at Heritageville Art Museum since August 2015. He conducts guided tours focusing on art, history, and architecture, develops specialized tours for various audience groups, and collaborates with curators for accurate and engaging information. Proficient in Italian and Japanese, Michael has strong research and storytelling skills, excellent interpersonal abilities, and has published 'Exploring Renaissance Art: A Guide for Visitors' in the Heritageville Art Journal in 2019."
        },
        {
            img: "https://thumbs.dreamstime.com/z/woman-portrait-selfie-nature-travel-relax-hiking-against-city-background-face-girl-fitness-influencer-live-270034099.jpg",
            name: "Jane Doe",
            location: "Anytown, USA",
            email: "jane.doe@example.com",
            phone: "(555) 123-4567",
            info: "Jane Doe, a recent graduate with a Bachelor of Arts in History from Anytown University, is an enthusiastic and friendly individual seeking an entry-level tour guide position. With strong communication and public speaking abilities, Jane has gained experience as a Volunteer Tour Guide at Anytown Historical Society, where she assisted in conducting tours, provided engaging historical information, and ensured a positive visitor experience. Fluent in English and Spanish, Jane is also CPR and First Aid certified, making her well-prepared to handle any situation that may arise during tours."
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='tourguide-box'>
            <h1 className='tour-title'>We hire the best tour guides for you</h1>
            <Slider {...settings} className='slide-bg'>
                {tourguide.map(el => <TourguideCard el={el} />)}
            </Slider>
        </div>
    );
};

export default Tourguides;
