import React from 'react'
import shortid from "short-id";
import { useState, useRef, useCallback } from 'react'



import BannerCarousel from './BannerCarousel'
import PostSlider from './Movies/PostSlider'

const Home = () => {
    const [banner, setBanner] = useState([
        {
            title: "Stargate Universe", date: "99% Match 2009-2011 2 Seasons", desc: "Trapped on an Ancient spaceship billions of light-years from home, a group of soldiers and civilians struggle to survive and find their way back to Earth.",
            imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/stargate.6af5cff1.jpg',
            starring: 'Robert Carlyle, Louis Ferreira, Brian J. Smith',
            genre: 'Sci-fi, Fantasy, Drama'
        },
        {
            title: "Stargate Universe", date: "96% Match 2014 PG-13", desc: "With Humanity Teetering on the bring of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
            imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/intertellar.5fc9d0d2.jpg',
            starring: ' Mathew McConaughey,  Anne Hathaway,  Jessica Chastain',
            genre: 'Sci-fi, Fantasy,  Mystery'
        },
        {
            title: "Step Brothers", date: "92% Match 2008 R", desc: "Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.",
            imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/stepbrothers.d6301d7a.jpg',
            starring: ' Will Ferrell,  John C. Reilly,  Mary Steenburgen',
            genre: 'Comedy, Late Night Comedies, Slapstick Comedy'
        },
    ])

    const [post, setPost] = useState([
        {
            category: "Trending Now",
            movies: [
                {
                    id: 1,
                    title: "Interstellar", date: "97% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/is.57a65778.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/ints-poster.1a0d092d.jpg',
                    duration: '2h 49m ',
                    rating: ' 8.6/10',
                    stars: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
                    genre: 'Adventure, Drama, Sci-Fi',
                    desc: ` In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.`

                },
                {
                    id: 2,
                    title: "It's Always Sunny in Philadelphia", date: "100% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/IAS.68cf3055.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/ias-poster.c1b81128.jpg',
                    duration: '13 Seasons',
                    rating: '8.8/10',
                    stars: 'Glenn Howerton, Rob McElhenney, Charlie Day',
                    genre: 'Comedy',
                    desc: `Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald "Mac" McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.`
                }, {
                    id: 3,
                    title: "Marvel's Luke Cage", date: "93% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/LK.51f08f75.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/lk-poster.24e05a5c.jpg',
                    duration: '2 Seasons',
                    rating: '7.5/10',
                    stars: 'Mike Colter, Simone Missick, Theo Rossi',
                    genre: 'Action, Crime, Drama',
                    desc: `This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. "Marvel's Luke Cage" is the third show in the Netflix-original Defenders series.`
                },
                {
                    id: 4,
                    title: "The Office", date: "100% Match", rate: "TV-14",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TO.e7cbf12a.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/to-poster.8346ad89.jpg',
                    duration: '9 Seasons ',
                    rating: '8.8/10',
                    stars: 'Steve Carell, Jenna Fischer, John Krasinski',
                    genre: 'Comedy',
                    desc: `This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.`
                },
                {
                    id: 5,
                    title: "Parks and Recreation", date: "100% Match", rate: "TV-PG",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/PandR.fb91767b.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/par-poster.cfc55cef.jpg',
                    duration: '7 Seasons ',
                    rating: '8.6/10',
                    stars: 'Amy Poehler, Nick Offerman, Chris Pratt',
                    genre: 'Comedy',
                    desc: ` Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.`
                },
                {
                    id: 6,
                    title: "Thor: Ragnarok", date: "98% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TR.29d1f289.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/tr-poster.c6ce807b.jpg',
                    duration: '2h 10m ',
                    rating: '7.9/10',
                    stars: 'Chris Hemsworth, Tom Hiddleston, Cate Blanchett',
                    genre: 'Action, Adventure, Comedy',
                    desc: `Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.`
                },
                {
                    id: 7,
                    title: "Star Wars: Episode VIII: The Last Jedi", date: "98% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TLJ.d5004072.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/tlj-poster.84f1f7b7.jpg',
                    duration: '2h 31m ',
                    rating: '7.3/10',
                    stars: 'Daisy Ridley, John Boyega, Mark Hamill',
                    genre: 'Action, Adventure, Fantasy',
                    desc: ` Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.`
                },
                {
                    id: 8,
                    title: "Dexter", date: "99% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/D.3514d093.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/d-poster.83a8ddf4.jpg',
                    duration: '8 Seasons ',
                    rating: '8.7/10',
                    stars: 'Michael C. Hall, Jennifer Carpenter, David Zayas',
                    genre: 'Crime, Drama, Mystery',
                    desc: `Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his skills. It's a unique brand of justice for which charming Dexter feels a psychological hunger.`
                },

            ]
        },
        {
            category: "Popular on Netflix",
            movies: [
                {
                    id: 1,
                    title: "Dexter", date: "99% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/D.3514d093.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/d-poster.83a8ddf4.jpg',
                    duration: '8 Seasons ',
                    rating: '8.7/10',
                    stars: 'Michael C. Hall, Jennifer Carpenter, David Zayas',
                    genre: 'Crime, Drama, Mystery',
                    desc: `Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his skills. It's a unique brand of justice for which charming Dexter feels a psychological hunger.`
                }, {
                    id: 2,
                    title: "Thor: Ragnarok", date: "98% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TR.29d1f289.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/tr-poster.c6ce807b.jpg',
                    duration: '2h 10m ',
                    rating: '7.9/10',
                    stars: 'Chris Hemsworth, Tom Hiddleston, Cate Blanchett',
                    genre: 'Action, Adventure, Comedy',
                    desc: `Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.`
                }, {
                    id: 3,
                    title: "Star Wars: Episode VIII: The Last Jedi", date: "98% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TLJ.d5004072.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/tlj-poster.84f1f7b7.jpg',
                    duration: '2h 31m ',
                    rating: '7.3/10',
                    stars: 'Daisy Ridley, John Boyega, Mark Hamill',
                    genre: 'Action, Adventure, Fantasy',
                    desc: ` Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.`
                },
                {
                    id: 4,
                    title: "It's Always Sunny in Philadelphia", date: "100% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/IAS.68cf3055.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/ias-poster.c1b81128.jpg',
                    duration: '13 Seasons',
                    rating: '8.8/10',
                    stars: 'Glenn Howerton, Rob McElhenney, Charlie Day',
                    genre: 'Comedy',
                    desc: `Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald "Mac" McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.`
                },
                {
                    id: 5,
                    title: "Interstellar", date: "97% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/is.57a65778.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/ints-poster.1a0d092d.jpg',
                    duration: '2h 49m ',
                    rating: ' 8.6/10',
                    stars: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
                    genre: 'Adventure, Drama, Sci-Fi',
                    desc: ` In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.`

                },
                {
                    id: 6,
                    title: "Marvel's Luke Cage", date: "93% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/LK.51f08f75.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/lk-poster.24e05a5c.jpg',
                    duration: '2 Seasons',
                    rating: '7.5/10',
                    stars: 'Mike Colter, Simone Missick, Theo Rossi',
                    genre: 'Action, Crime, Drama',
                    desc: `This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. "Marvel's Luke Cage" is the third show in the Netflix-original Defenders series.`
                },
                {
                    id: 7,
                    title: "Parks and Recreation", date: "100% Match", rate: "TV-PG",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/PandR.fb91767b.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/par-poster.cfc55cef.jpg',
                    duration: '7 Seasons ',
                    rating: '8.6/10',
                    stars: 'Amy Poehler, Nick Offerman, Chris Pratt',
                    genre: 'Comedy',
                    desc: ` Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.`
                },
                {
                    id: 8,
                    title: "The Office", date: "100% Match", rate: "TV-14",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TO.e7cbf12a.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/to-poster.8346ad89.jpg',
                    duration: '9 Seasons ',
                    rating: '8.8/10',
                    stars: 'Steve Carell, Jenna Fischer, John Krasinski',
                    genre: 'Comedy',
                    desc: `This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.`
                },

            ]
        },
        {
            category: "New Releases",
            movies: [
                {
                    id: 1,
                    title: "Interstellar", date: "97% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/is.57a65778.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/ints-poster.1a0d092d.jpg',
                    duration: '2h 49m ',
                    rating: ' 8.6/10',
                    stars: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
                    genre: 'Adventure, Drama, Sci-Fi',
                    desc: ` In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.`

                },
                {
                    id: 2,
                    title: "It's Always Sunny in Philadelphia", date: "100% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/IAS.68cf3055.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/ias-poster.c1b81128.jpg',
                    duration: '13 Seasons',
                    rating: '8.8/10',
                    stars: 'Glenn Howerton, Rob McElhenney, Charlie Day',
                    genre: 'Comedy',
                    desc: `Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald "Mac" McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.`
                }, {
                    id: 3,
                    title: "Marvel's Luke Cage", date: "93% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/LK.51f08f75.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/lk-poster.24e05a5c.jpg',
                    duration: '2 Seasons',
                    rating: '7.5/10',
                    stars: 'Mike Colter, Simone Missick, Theo Rossi',
                    genre: 'Action, Crime, Drama',
                    desc: `This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. "Marvel's Luke Cage" is the third show in the Netflix-original Defenders series.`
                },
                {
                    id: 4,
                    title: "The Office", date: "100% Match", rate: "TV-14",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TO.e7cbf12a.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/to-poster.8346ad89.jpg',
                    duration: '9 Seasons ',
                    rating: '8.8/10',
                    stars: 'Steve Carell, Jenna Fischer, John Krasinski',
                    genre: 'Comedy',
                    desc: `This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.`
                },
                {
                    id: 5,
                    title: "Parks and Recreation", date: "100% Match", rate: "TV-PG",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/PandR.fb91767b.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/par-poster.cfc55cef.jpg',
                    duration: '7 Seasons ',
                    rating: '8.6/10',
                    stars: 'Amy Poehler, Nick Offerman, Chris Pratt',
                    genre: 'Comedy',
                    desc: ` Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.`
                },
                {
                    id: 6,
                    title: "Thor: Ragnarok", date: "98% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TR.29d1f289.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/tr-poster.c6ce807b.jpg',
                    duration: '2h 10m ',
                    rating: '7.9/10',
                    stars: 'Chris Hemsworth, Tom Hiddleston, Cate Blanchett',
                    genre: 'Action, Adventure, Comedy',
                    desc: `Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.`
                },
                {
                    id: 7,
                    title: "Star Wars: Episode VIII: The Last Jedi", date: "98% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TLJ.d5004072.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/tlj-poster.84f1f7b7.jpg',
                    duration: '2h 31m ',
                    rating: '7.3/10',
                    stars: 'Daisy Ridley, John Boyega, Mark Hamill',
                    genre: 'Action, Adventure, Fantasy',
                    desc: ` Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.`
                },
                {
                    id: 8,
                    title: "Dexter", date: "99% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/D.3514d093.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/d-poster.83a8ddf4.jpg',
                    duration: '8 Seasons ',
                    rating: '8.7/10',
                    stars: 'Michael C. Hall, Jennifer Carpenter, David Zayas',
                    genre: 'Crime, Drama, Mystery',
                    desc: `Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his skills. It's a unique brand of justice for which charming Dexter feels a psychological hunger.`
                },

            ]
        },
        {
            category: "Watch It Again",
            movies: [
                {
                    id: 1,
                    title: "Dexter", date: "99% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/D.3514d093.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/d-poster.83a8ddf4.jpg',
                    duration: '8 Seasons ',
                    rating: '8.7/10',
                    stars: 'Michael C. Hall, Jennifer Carpenter, David Zayas',
                    genre: 'Crime, Drama, Mystery',
                    desc: `Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his skills. It's a unique brand of justice for which charming Dexter feels a psychological hunger.`
                }, {
                    id: 2,
                    title: "Thor: Ragnarok", date: "98% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TR.29d1f289.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/tr-poster.c6ce807b.jpg',
                    duration: '2h 10m ',
                    rating: '7.9/10',
                    stars: 'Chris Hemsworth, Tom Hiddleston, Cate Blanchett',
                    genre: 'Action, Adventure, Comedy',
                    desc: `Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.`
                }, {
                    id: 3,
                    title: "Star Wars: Episode VIII: The Last Jedi", date: "98% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TLJ.d5004072.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/tlj-poster.84f1f7b7.jpg',
                    duration: '2h 31m ',
                    rating: '7.3/10',
                    stars: 'Daisy Ridley, John Boyega, Mark Hamill',
                    genre: 'Action, Adventure, Fantasy',
                    desc: ` Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.`
                },
                {
                    id: 4,
                    title: "It's Always Sunny in Philadelphia", date: "100% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/IAS.68cf3055.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/ias-poster.c1b81128.jpg',
                    duration: '13 Seasons',
                    rating: '8.8/10',
                    stars: 'Glenn Howerton, Rob McElhenney, Charlie Day',
                    genre: 'Comedy',
                    desc: `Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald "Mac" McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.`
                },
                {
                    id: 5,
                    title: "Interstellar", date: "97% Match", rate: "PG-13",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/is.57a65778.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/ints-poster.1a0d092d.jpg',
                    duration: '2h 49m ',
                    rating: ' 8.6/10',
                    stars: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
                    genre: 'Adventure, Drama, Sci-Fi',
                    desc: ` In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.`

                },
                {
                    id: 6,
                    title: "Marvel's Luke Cage", date: "93% Match", rate: "TV-MA",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/LK.51f08f75.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/lk-poster.24e05a5c.jpg',
                    duration: '2 Seasons',
                    rating: '7.5/10',
                    stars: 'Mike Colter, Simone Missick, Theo Rossi',
                    genre: 'Action, Crime, Drama',
                    desc: `This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. "Marvel's Luke Cage" is the third show in the Netflix-original Defenders series.`
                },
                {
                    id: 7,
                    title: "Parks and Recreation", date: "100% Match", rate: "TV-PG",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/PandR.fb91767b.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/par-poster.cfc55cef.jpg',
                    duration: '7 Seasons ',
                    rating: '8.6/10',
                    stars: 'Amy Poehler, Nick Offerman, Chris Pratt',
                    genre: 'Comedy',
                    desc: ` Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.`
                },
                {
                    id: 8,
                    title: "The Office", date: "100% Match", rate: "TV-14",
                    imgSrc: 'https://kevinallen4325.github.io/netflix-react/static/media/TO.e7cbf12a.jpg',
                    imgSrcSingle: 'https://kevinallen4325.github.io/netflix-react/static/media/to-poster.8346ad89.jpg',
                    duration: '9 Seasons ',
                    rating: '8.8/10',
                    stars: 'Steve Carell, Jenna Fischer, John Krasinski',
                    genre: 'Comedy',
                    desc: `This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.`
                },

            ]
        },


    ])


    const slides = useRef(null)
    let slideNum = banner.length

    const [index, setIndex] = useState(0)

    const controlNext = useCallback(() => {
        if (index !== -((slideNum - 1) * slides.current.clientWidth)) {
            setIndex(index - slides.current.clientWidth)
        }
        else if (index <= slideNum - 1) {
            setIndex(0);
        }
    })

    const controlPrev = useCallback(() => {
        if (index !== 0) {
            setIndex(index + slides.current.clientWidth)
        }
        else if (index <= slideNum) {
            setIndex(index + -(slideNum - 1) * slides.current.clientWidth);
        }
    })

    return <>
        <div className="container p-0">
            <section id="banner">
                <div className="carousel p-relative">
                    <div onClick={controlPrev} className="control-arrow control-prev" >
                        <a href="#" className="">
                            <i className="bi bi-caret-left-fill"></i>
                        </a>
                    </div>
                    <div className="slider-wrapper" >
                        <div style={{ transform: `translateX(${index}px)` }} className="slides d-flex" ref={slides}>
                            {banner.map(b =>
                                <BannerCarousel key={shortid.generate()} {...b}>
                                </BannerCarousel>)}
                        </div>
                    </div>
                    <div className="control-arrow control-next" onClick={controlNext}>
                        <a href="#" className="">
                            <i className="bi bi-caret-right-fill"></i>
                        </a>
                    </div>
                </div>
            </section>
            <section id='post-section'>
                <div className="container p-0">
                    <div className="post-items">
                        <div className="post-slides">
                            {post.map(e => <PostSlider key={shortid.generate()} categoryname={e.category} movies={e.movies}></PostSlider>)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default Home
