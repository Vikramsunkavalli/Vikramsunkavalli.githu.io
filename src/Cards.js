function Cards(){

    let places=[
        {
            
            name:"Kashmir:  For its captivating natural beauty",
            image:"https://cdn-ccnjl.nitrocdn.com/FFlOINYZCUxrEWbcRFzJMkRxycjLZyST/assets/static/optimized/rev-2c547dc/blog/wp-content/uploads/2020/11/kashmir.jpg",
            desc:"One of the most incredible places in India, Kashmir is known for its natural beauty and is thus, rightly called Heaven on Earth. With its picturesque lakes, lush fruit orchards, verdant meadows, pines and deodars forests, all enclosed with mountains of Himalayan and Pir-Panjal ranges – Kashmir seems to have directly made its way right out from a postcard."
        },
        {
            name:"Ladakh: For its unmatched adventure options",
            image:"https://cdn-ccnjl.nitrocdn.com/FFlOINYZCUxrEWbcRFzJMkRxycjLZyST/assets/static/optimized/rev-2c547dc/blog/wp-content/uploads/2020/11/ladakh.jpg",
            desc:"The land of high mountain passes, barren mountains, alpine lakes & meadows, enchanting valleys and ancient colourful Buddhist monasteries, Ladakh is one of the must-visit destinations in India. It is ideal for adventure enthusiasts and nature lovers alike.Ladakh is unlike any place to visit in India. It is here that you can witness some of the world’s highest mountain passes as well as exotic wildlife species in India’s largest national park. This must-visit destination in India is perfect for motorbiking and mountain biking, camping, river rafting, trekking and peak climbing adventures."
        },
        {
            name:"Delhi: For its incredible history and past",
            image:"https://cdn-ccnjl.nitrocdn.com/FFlOINYZCUxrEWbcRFzJMkRxycjLZyST/assets/static/optimized/rev-2c547dc/blog/wp-content/uploads/2020/11/Delhi.jpg",
            desc:"The capital city makes for one of the perfect travel destinations in India. A city of heritage, monuments, teeming with bazaars and mouth-watering street food, high-end malls, and luxury hotels & restaurants; Delhi has something for everyone. So whether you are looking for a heritage walk or a shopping experience or for kids-friendly activities or places for photography or even seek the blessings of god, Delhi will not disappoint."
        },
        {
            name:"Sikkim: For its breathtaking natural vistas and enthralling adventures",
            image:"https://cdn-ccnjl.nitrocdn.com/FFlOINYZCUxrEWbcRFzJMkRxycjLZyST/assets/static/optimized/rev-2c547dc/blog/wp-content/uploads/2020/11/sikkim-tourism.jpg",
            desc:"One of the most beautiful places in India, Sikkim is a glittering gem of the North-East Himalayas. This northeast Indian destination is popular for being home to the world’s third highest mountain, Kanchenjunga (8586 m). Sikkim is one of the best destinations in India to spend a peaceful and laid back holiday as well as enjoy enthralling adventure activities."
        },
        {
            name:"Meghalaya: For its spellbinding natural beauty ",
            image:"https://cdn-ccnjl.nitrocdn.com/FFlOINYZCUxrEWbcRFzJMkRxycjLZyST/assets/static/optimized/rev-2c547dc/blog/wp-content/uploads/2020/11/Meghalaya-Shillong.jpg",
            desc:"Also known as the abode of clouds, Meghalaya is a hidden gem nestled in the lap of pine-covered Khasi and Garo Hills in the Northeastern part of India. One of the most picturesque states of North East India with its innumerable waterfalls, mystic caves, dense forests and sparkling lakes and rivers; Meghalaya is an ideal destination in India for trekkers, cavers/spelunkers and nature lovers."
        },
        {
            name:"Andaman",
            image:"https://www.holidify.com/images/cmsuploads/compressed/15200591704_491338852a_z_20190315163300.jpg",
            desc:"Replete with turquoise blue water beaches and a bit of history, Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India. Port Blair, the capital of this union territory, has a major airport and seaport connected with the rest of the country and with various tourist islands via multiple daily ferries. Havelock and Neil Islands are popular among tourists for their white sandy beaches and excellent diving options."
        },
        {
            name:"Coorg",
            image:"https://www.holidify.com/images/bgImages/COORG.jpg",
            desc:"Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people"
        },
        {
            name:"GOA",
            image:"https://www.holidify.com/images/bgImages/GOA.jpg",
            desc:"Lying on the western coast, Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture. Spread across just 3,702 km, Goa lies in the Konkan region. It is a far cry from the hippie haven or a beach getaway, and one of the only few destinations that is open 24x7. The laid-backness (susegad) of Goa attracts as many international tourists as it does Indians, or even more so."
        },
        {
            name:"Rishikesh",
            image:"https://www.holidify.com/images/compressed/3754.jpg",
            desc:"Located in the foothills of the Himalayas along the convergence of Ganga and Chandrabhaga River, Rishikesh is a small town in the Dehradun district, located close to Haridwar in Uttarakhand.                                     Rishikesh (also called as Hrishikesh) is known for its adventure activities, ancient temples, popular cafes and as the 'Yoga Capital of the World'. Gateway to Garhwal Himalayas, Rishikesh is also a pilgrimage town and one of the holiest places for Hindus."
        },
        {
            name:"OOTY",
            image:"https://www.holidify.com/images/bgImages/OOTY.jpg",
            desc:"Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway.                                       Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone. Popular among couples and honeymooners, Ooty allures its visitors with the panoramic views of the Nilgiri mountains"
        },

        

    ]

        return(
            <div className="container">
                
                <h1 className="title">Places</h1>

                <div className="places">

                    {
                        places.map((place,index)=>{

                            return (
                                <div className="card" key={index}>
                                    <img src={place.image} className="place-img"/>

                                    <div className="padd">
                                    <h2>{place.name}</h2>

                                    <p className="place-desc">
                                        {place.desc}
                                    </p>
                                    </div>   


                                </div>
                            )

                        })
                    }

                </div>

                
            </div>
        )


}

export default Cards;