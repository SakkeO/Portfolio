const domCarousel = document.getElementsByClassName("carousel");

const carousels = {
    CFW: {
        slides: [
            {
                img: "https://i.imgur.com/BbKGLiX.jpg",
                text: "This is a multimedia story I wrote about Chicago's rise as a global destination for fashion. I talked to designers, models, industry professionals and more to create an immersive story on the city's long-forgotten fashion industry."
            }
        ],
        index: 0
    },
    NUhelp: {
        slides: [
            {
                img: "https://i.imgur.com/LHEqOAO.png",
                text: "A feature story written for class on Northwestern's attempts to help its students with rising mental health concerns."
            }
        ],
        index: 0
    },
    mari: {
        slides: [
            {
                img: "https://i.imgur.com/pL813an.jpg",
                text: "My first story ever published. Every quarter Blackboard magazine, Northwestern’s only Black interest publication, features one or two students from the community in a profile piece. I was inspired by Mari’s activist spirit and wanted her story to be known campus wide."
            }
        ],
        index: 0
    },
    freeplanet: {
        slides: [
            {
                img: "https://i.imgur.com/SAUQ3gT.jpg",
                text: "A Q&A story I wrote for Blackboard magazine's website highlighting Northwestern students Caleb and Robel Negussie, the twins from the Twin Cities, who are an up-and-coming rap duo. Unfortunately, the website it was published on is currently down so here it is on Medium instead."
            }
        ],
        index: 0
    },
    burlesque: {
        slides: [
            {
                img: "https://i.imgur.com/6m7awiV.jpg",
                text: "These are the outtakes from a photo story I did for the student publication North by Northwestern. The goal of the story was to feature the student organization B. Burlesque, a group which produces an annual burlesque show for and by Black students."
            },
            {
                img: "https://i.imgur.com/RyppKA0.jpg",
                text: "For many of the members seeing themselves reflected as beautiful and empowered is a rarity, so burlesque became cherished as a place of upliftment."
            },
            {
                img: "https://i.imgur.com/wUKLfQN.jpg",
                text: "Watching their peers be bold and explore themselves during rehearsals was key to everyone growing together and eventually putting on a very successful show."
            },
            {
                img: "https://i.imgur.com/uyP8xDr.jpg",
                text: "One of the challenges of this peice was getting access because many were uncomfortable with such photos being printed in a publication so many people would see."
            },
            {
                img: "https://i.imgur.com/KahVBFe.jpg",
                text: "My workaround was to gain trust and feature shots of mostly hands and facial emotion to represent their sensuality."
            },
            {
                img: "https://i.imgur.com/ZbY7s0n.jpg",
                text: "Many people in B. Burlesque are queer and use the space as a chance to explore this identity through performance."
            },
            {
                img: "https://i.imgur.com/B3xCBYV.jpg",
                text: "Each group in the show had costumes that allowed them to tap into the energy they wanted to express in their burlesque piece."
            },
            {
                img: "https://i.imgur.com/Y4YALpr.jpg",
                text: "The final product of these photos is a three page photo story spread photographed designed and written by me."
            }
        ],
        index: 0
    },
    tanzania: {
        slides: [
            {
                img: "https://i.imgur.com/2fEDETo.jpg",
                text: "These are a collection of photos taken from my trip to Tanzania. They were all taken during a safari in the Serengeti."
            },
            {
                img: "https://i.imgur.com/En5OZqI.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/awtHkrb.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/R7TGB69.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/8AwcG8F.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/Z5SmWlj.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/hc4idit.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/sykD5SH.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/9CaSI2X.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/PX0CM7Q.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/6iagmmR.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/kjeWMwg.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/QdIHkko.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/GZdf0Ez.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/aqFwOP7.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/xuYK6Ws.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/F8zqfoV.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/ps1meji.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/AWHd8mt.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/NeYGDov.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/5rbYcms.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/4XWncZZ.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/SXiyK3L.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/9S61pOe.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/GB1WxDj.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/YvUrPKg.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/SVkq7CV.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/HmP9MLn.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/4xYXZap.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/dmhBjzV.jpg",
                text: ""
            }
        ],
        index: 0 
    },
    exes: {
        slides: [
            {
                img: "https://i.imgur.com/VnUv7QP.jpg",
                text: "These are the outtakes from a photo story I did for the student publication North by Northwestern. The concept of the story was to bring exes back together and have a conversation with them. It was really interesting capturing them interacting and how it progressed throughout the photoshoot and interview." 
            },
            {
                img: "https://i.imgur.com/ju6T28p.jpg",
                text: "\"We dated like a little more than a month.\" -Dylan"
            },
            {
                img: "https://i.imgur.com/p40ol8q.jpg",
                text: "Favorite memory: \"Pike America.\" -Katrina"
            },
            {
                img: "https://i.imgur.com/OeIKXJB.jpg",
                text: "\"We were out late just playing around, talking, it was cool.\" -Dylan"
            },
            {
                img: "https://i.imgur.com/MetoHHc.jpg",
                text: "I was suprised by how amicable the exes were. It was clear they still cared about each other a lot even if things didn't work out."
            },
            {
                img: "https://i.imgur.com/0SkzDKn.jpg",
                text: "Favorite quality: \"Dylan's happy like 100 percent of the time. And down to hang out all the time.\" -Katrina"
            },
            {
                img: "https://i.imgur.com/i0avFQS.jpg",
                text: "\"She's so down to earth, good vibes.\" -Dylan"
            },
            {
                img: "https://i.imgur.com/xyPYnOE.jpg",
                text: "Why did you break up: \"It was just kind of like too good at the beginning.\" -Katrina"
            },
            {
                img: "https://i.imgur.com/7JJYGez.jpg",
                text: "\"We rushed into it. We both just kind of fizzled out.\" -Dylan"
            }
        ],
        index: 0
    },
    ella: {
        slides: [
            {
                img: "https://i.imgur.com/PemkJJq.jpg",
                text: "A series of photos taken for the final project in my photojournalism class. I met Ella through a story I wrote on Chicago Fashion Week and we have remained friends since."
            },
            {
                img: "https://i.imgur.com/n1TncWm.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/zw5aed7.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/31mjrGn.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/rHTBYr2.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/BEA3KLG.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/4YFzPwm.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/HL5Dc6X.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/vbzPKTB.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/IdcVzHl.jpg",
                text: ""
            }
        ],
        index: 0
    },
    panthers: {
        slides: [
            {
                img: "https://i.imgur.com/89bXE8b.jpg",
                text: "As photodirector for Blackboard magazine I led the direction for our Modern Panthers magazine edition. I tried to capture the empowerment of Black youth in the 21st century. Here are the outtakes from the photoshoots."
            },
            {
                img: "https://i.imgur.com/dVKGLZy.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/hYYjyii.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/2bxQwt7.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/YN0AZe8.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/e3kl3nf.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/9DBbfmF.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/sPF7iDA.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/YKsL5ff.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/SpMZAA7.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/h1H5TNh.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/h1H5TNh.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/3TfKtpD.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/UfL86oh.jpg",
                text: ""
            }
        ],
        index: 0
    },
    rugby: {
        slides: [
            {
                img: "https://i.imgur.com/9LIqkxy.jpg",
                text: "A series of photos taken for my photojournalism class. All photos were taken at a rugby tournament in Wisconsin that Northwestern played in. While I wasn't on the field I took photos of the other matches. Pictured here is Northwestern walking onto the field for their first match of the day."
            },
            {
                img: "https://i.imgur.com/KzDnWjX.jpg",
                text: "Home team, University of Wisconsin Oshkosh had a game against DePaul University right before NU took the field. See it play out."
            },
            {
                img: "https://i.imgur.com/Ov83rIs.jpg",
                text: "A picture perfect tackle."
            },
            {
                img: "https://i.imgur.com/bkHh5yL.jpg",
                text: "The player protects their head as a ruck forms over her."
            },
            {
                img: "https://i.imgur.com/YglDIYr.jpg",
                text: "The scrummy prepares to pass the ball 1/3."
            },
            {
                img: "https://i.imgur.com/xIeXiz5.jpg",
                text: "She spots her target 2/3."
            },
            {
                img: "https://i.imgur.com/vjN5ZoS.jpg",
                text: "She follows through with her pass 3/3."
            },
            {
                img: "https://i.imgur.com/21xgMn5.jpg",
                text: "A winger on the break away."
            },
            {
                img: "https://i.imgur.com/hVFn7tY.jpg",
                text: "The sir waits for players to get set for a lineout."
            },
            {
                img: "https://i.imgur.com/m67rmVp.jpg",
                text: "Both teams battle for possession during a lineout."
            },
            {
                img: "https://i.imgur.com/WgHi8P3.jpg",
                text: "The sir places a mark for a scrum to set."
            },
            {
                img: "https://i.imgur.com/c0ceCLZ.jpg",
                text: "A full scrum."
            },
            {
                img: "https://i.imgur.com/NRCgyXv.jpg",
                text: "Rugby is a ingury prone sport. Here a teammate helps an injured player walk off the field."
            },
            {
                img: "https://i.imgur.com/qXR4mRE.jpg",
                text: "Everyone takes a knee for the injured teammate except for the captain who tries to rally team spirit."
            },
            {
                img: "https://i.imgur.com/CMhA88H.jpg",
                text: "Oshkosh blows out Depaul in a final score of 95-3. They yell \"three cheers for the sir, three cheers for DePaul,\" and loudest of all, \"three cheers for Oshkosh.\""
            },
            {
                img: "https://i.imgur.com/sIEHTXv.jpg",
                text: "Both teams shake hands and later will be hanging out at the social, as it is tradition to drink together after a match."
            }
            
        ],
        index: 0
    },
    serendipity: {
        slides: [
            {
                img: "https://i.imgur.com/qtTZSiD.jpg",
                text: "These are a series of stand alone photos that I'm attached to. This one is a photo of a mural in the Pilsen neighborhood of Chicago."
            },
            {
                img: "https://i.imgur.com/ZVN4ZMU.jpg",
                text: "A golden hour goody."
            },
            {
                img: "https://i.imgur.com/rwbH5vd.jpg",
                text: "I had the opportunity to go on a boat tour in Friday Harbor, Washington. This seal was quite noisy."
            },
            {
                img: "https://i.imgur.com/UQ6tnBm.jpg",
                text: "Painting Man."
            },
            {
                img: "https://i.imgur.com/EaBXjOU.jpg",
                text: "Man busking in Millennium Park, downtown Chicago."
            },
            {
                img: "https://i.imgur.com/If9MgPU.jpg",
                text: "Scaffolding in downtown Chicago on a busy winter day."
            },
            {
                img: "https://i.imgur.com/8LpGKmR.jpg",
                text: "A canal in Amsterdam on a rainy day. One of the first photos I ever took with a DSLR camera."
            },
            {
                img: "https://i.imgur.com/8vuDHsk.jpg",
                text: "Long exposure shot of a Las Vegas night."
            },
            {
                img: "https://i.imgur.com/gcbEbSG.jpg",
                text: "Shoes hanging over a powerline."
            },
            {
                img: "https://i.imgur.com/VlTNzLF.jpg",
                text: "Man playing with his dog on Funston Beach in San Francisco."
            },
            {
                img: "https://i.imgur.com/KahJCcw.jpg",
                text: "Safiya, a homeless women who has stayed in Evanston, Illinois for the last eight years."
            },
            {
                img: "https://i.imgur.com/J4C5Aln.jpg",
                text: "Abandoned gas-production plant in Gas Works Park in Seattle."
            },
            {
                img: "https://i.imgur.com/zuhlrXQ.jpg",
                text: "Tesla charging at sunset."
            },
            {
                img: "https://i.imgur.com/oJQGpxm.jpg",
                text: "Boy with his dog for a NBN story on students living with pets on campus."
            },
            {
                img: "https://i.imgur.com/AFOb5kq.jpg",
                text: "Rory and his chain for a NBN story on people and clothes that have meaning to them."
            },
            {
                img: "https://i.imgur.com/DHkuUwJ.jpg",
                text: "Taken for a NBN story on student musicians. Pictured is the band Honey Butter's saxophonist."
            },
            {
                img: "https://i.imgur.com/lIGa2Vg.jpg",
                text: "Taken for a NBN story on student musicians. Pictured is the band Morning Dew."
            },
            {
                img: "https://i.imgur.com/NWgkIdQ.jpg",
                text: "Student dance group, Refresh, performing."
            }  
        ],
        index: 0
    },
    photoedits: {
        slides: [
            {
                img: "https://i.imgur.com/Ymlu1vo.jpg",
                text: "A series of different experiments with photoshop. This photomanipulation I made to commemorate my time as the design intern at National Geographic while working remotely from home in Seattle."
            },
            {
                img: "https://i.imgur.com/0QluJFN.jpg",
                text: "This photoillustration was created just for fun because I was inspired by the headphones she was wearing."
            },
            {
                img: "https://i.imgur.com/lcj71Fy.jpg",
                text: "This photo edit was made for a story I wrote for Blackboard magazine on the rap duo FreePlanet. The previous photo I made a few days before and thought a similar style would represent FreePlanet's style well."
            },
            {
                img: "https://i.imgur.com/eWpLOcL.jpg",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            }
        ],
        index: 0
    },
    RD: {
        slides: [
            {
                img: "https://i.imgur.com/IYpPg0g.jpg",
                text: "After graduating I interned at Reader's Digest for 6 months. I split my time working on the print and digital teams mostly designing front and back of book sections of the print magazine, digital photo collages, and motion graphics."
            }
        ],
        index: 0
    },
    NG: {
        slides: [
            {
                img: "https://i.imgur.com/IYpPg0g.jpg",
                text: "This fall I spent 3 months as working at NGM as a design intern. Some of the highlights during my time there was getting the chance to design the cover to a Nat Geo Atlas, multiple print feature stories, print to web graphic conversions, and a 12-part Instagram story."
            }
        ],
        index: 0
    },
    NBN: {
        slides: [
            {
                img: "https://i.imgur.com/UzYWpNb.png",
                text: "Here is a collection of my favorite editorial pages I have designed for the student publication North by Northwestern, a magazine which publishes once a quarter."
            },
            {
                img: "https://i.imgur.com/tcJ4m63.png",
                text: "This is the front cover I designed and illustrated of the quarter I was the creative director. Creating a magazine during a pandemic was a wild, but incredibly rewarding experience. Check out the print version here: issuu.com/nbnmag/docs/springmag2020final. And check out the digital version which I coded from scratch with a few team members here: northbynorthwestern.com/magazine-current"
            },
            {
                img: "https://i.imgur.com/VNUR0a1.jpg",
                text: "A feature spread about the study abroad experience for students with minority identities. I wanted to capture the feeling of being overshadowed that was a running theme across the students stories."
            },
            {
                img: "https://i.imgur.com/eUQMBN0.png",
                text: "A single page Q&A spread. Josh Mckenzie is known as that one fun administrative person on campus, so I wanted that to reflect in the style. The header style is based off of the TV show it alludes to."
            },
            {
                img: "https://i.imgur.com/QSwZDJe.png",
                text: "A story on the freedom of expression professors can excercise under Northwestern's administration. Professors feel as if they have to speak with caution and my goal was to emulate that feeling of caution and fear through the colors and illustrations embedded into the single page spread."
            },
            {
                img: "https://i.imgur.com/DI8ghy0.jpg",
                text: "My first feature spread. This story was about the ending of SafeRide a ride sharing program that was free to students on and around campus during evenings. This one hit close to home because for over two years I was a driver and dispatcher for SafeRide as a student employee. The program disappearing was what I wanted to represent. There is a photoedit of the car dispersing into smoke as well as smoke pull quotes throughout the spread to capture this feeling of loss."
            },
            {
                img: "https://i.imgur.com/RBtEaDu.jpg",
                text: "This is my first stab at a data visualization design. It was a challenge trying to figure out a good way to represent the story, but eventually I landed on a more exploratory feel to the pages and have each data point be shown with a simple graphic filled to the equivalent percentage."
            },
            {
                img: "https://i.imgur.com/fasPCzv.jpg",
                text: "A photo story I had the pleasure to shoot, design and write. Having the full creative control over a story is rare, but I had a lot of fun putting it all together."
            }
        ],
        index: 0
    },
    SAM: {
        slides: [
            {
                img: "https://i.imgur.com/4JcrufV.png",
                text: "I started a job as a graphic designer at SAM fall of my Junior year. SAM's clients are basically any Northwestern entity who is looking to create marketing content targeting Northwestern students. My main duties are to manage all communications between the Norris Student Center and SAM as well as create weekly instagram content for different events occuring on campus. Here is a print campaign to advertise a winter carnival event to increase student community at Norris."
            },
            {
                img: "https://i.imgur.com/jpHEhvd.jpg",
                text: "Here is a collection of some of my favorite quick weekly Instagram stories I've made for SAM to adverstise campus events."
            }
        ],
        index: 0
    },
    CARE: {
        slides: [
            {
                img: "https://i.imgur.com/XBeDssQ.png",
                text: "I worked at CARE for a summer internship my Sophmore year. CARE is a Northwestern Department which works with students to address sexual violence and promote healthy sexuality. One of the tasks I ended up doing was copy editing and redesigning old fliers since most were out of date."
            },
            {
                img: "https://i.imgur.com/u4MNkvV.png",
                text: "This is the before and after of a poster for a trauma and sexual violence therapy group created by CARE. I wanted to make a poster that would catch a passerby's eye and emphasize the focus of the group's goal: To Thrive."
            },
            {
                img: "https://i.imgur.com/u69eiQ1.png",
                text: "CARE has a couple resource handouts which had information that was out of date. My original task was to research and copyedit the handouts, but I decided to also consolidate the information and organize it with a few design principles to make the handout more accessible. This first one is for sexual health resources."
            },
            {
                img: "https://i.imgur.com/MNm5kW9.png",
                text: "This handout is for sexual violence, relationship violence, and stalking resources. The first handouts were just microsoft documents and were difficult to navigate visually. Now the handout has some visual cues as to what its for and invdividual resources are easier to find."
            },
            {
                img: "https://i.imgur.com/5RU7KM8.png",
                text: "Before I left I had the chance to redesign CARE's mission poster. I wanted to keep much of the same elements, but make it stand out a bit more so it can pop on a bulletin board with dozens of other posters and fliers."
            }
        ],
        index: 0
    },
    CAL: {
        slides: [
            {
                img: "https://i.imgur.com/h2bGIDZ.jpg",
                text: "This winter I had the chance to have a 5 week internship at CalMatters. While working there, one other intern, Stephanie Zhu, and I worked with their graphics team to create posters and social media assets."
            },
            {
                img: "https://i.imgur.com/JhhFKOl.jpg",
                text: "A poster created for CalMatters' podcast Force of Law which was holding a live event to discuss California's police using deadly force."
            },
            {
                img: "https://i.imgur.com/h2bGIDZ.jpg",
                text: "CalMatters is looking to expand its audience and wants to utilize social media to bring in new consumers. They wanted social media assets for Instagram and Twitter so Stephanie and I created a style guide for them to use so they can have a cohesive social media presence. The following slides are sections out of the style guide, but the rest, of course, is for CalMatters."
            },
            {
                img: "https://i.imgur.com/LPupNtL.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/Ob5P1I1.jpg",
                text: ""
            },
            {
                img: "https://i.imgur.com/8qkkP6G.jpg",
                text: ""
            }
        ],
        index: 0
    },
    NURJ: {
        slides: [
            {
                img: "https://i.imgur.com/UuFJzik.png",
                text: "Here is a collection of my favorite editorial pages I have designed for the student publication North by Northwestern a magazine which publishes once a quarter."
            },
            {
                img: "https://i.imgur.com/eUQMBN0.png",
                text: "This photo edit was made for a story I wrote for Blackboard magazine on the rap duo FreePlanet. The first photo I made a few days before and thought it would represent their style well."
            },
            {
                img: "https://i.imgur.com/C7tuMmo.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            },
            {
                img: "https://i.imgur.com/0mcEuVg.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            }
        ],
        index: 0
    },
    Anim: {
        slides: [
            {
                img: "https://i.imgur.com/h2bGIDZ.jpg",
                text: "Here is a collection of my favorite editorial pages I have designed for the student publication North by Northwestern a magazine which publishes once a quarter."
            },
            {
                img: "https://i.imgur.com/eUQMBN0.png",
                text: "This photo edit was made for a story I wrote for Blackboard magazine on the rap duo FreePlanet. The first photo I made a few days before and thought it would represent their style well."
            },
            {
                img: "https://i.imgur.com/C7tuMmo.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            },
            {
                img: "https://i.imgur.com/0mcEuVg.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            }
        ],
        index: 0
    },
    Leftovr: {
        slides: [
            {
                img: "https://i.imgur.com/33hpB2k.png",
                text: "Here is a collection of my favorite editorial pages I have designed for the student publication North by Northwestern a magazine which publishes once a quarter."
            },
            {
                img: "https://i.imgur.com/eUQMBN0.png",
                text: "This photo edit was made for a story I wrote for Blackboard magazine on the rap duo FreePlanet. The first photo I made a few days before and thought it would represent their style well."
            },
            {
                img: "https://i.imgur.com/C7tuMmo.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            },
            {
                img: "https://i.imgur.com/0mcEuVg.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            }
        ],
        index: 0
    },
    Geez: {
        slides: [
            {
                img: "https://i.imgur.com/esLFPiR.png",
                text: "Here is a collection of my favorite editorial pages I have designed for the student publication North by Northwestern a magazine which publishes once a quarter."
            },
            {
                img: "https://i.imgur.com/eUQMBN0.png",
                text: "This photo edit was made for a story I wrote for Blackboard magazine on the rap duo FreePlanet. The first photo I made a few days before and thought it would represent their style well."
            },
            {
                img: "https://i.imgur.com/C7tuMmo.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            },
            {
                img: "https://i.imgur.com/0mcEuVg.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            }
        ],
        index: 0
    },
    Wild: {
        slides: [
            {
                img: "https://i.imgur.com/9a8H0qS.png",
                text: "Here is a collection of my favorite editorial pages I have designed for the student publication North by Northwestern a magazine which publishes once a quarter."
            },
            {
                img: "https://i.imgur.com/eUQMBN0.png",
                text: "This photo edit was made for a story I wrote for Blackboard magazine on the rap duo FreePlanet. The first photo I made a few days before and thought it would represent their style well."
            },
            {
                img: "https://i.imgur.com/C7tuMmo.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            },
            {
                img: "https://i.imgur.com/0mcEuVg.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            }
        ],
        index: 0
    },
    Trunk: {
        slides: [
            {
                img: "https://i.imgur.com/yiXF9BC.jpg",
                text: "Here is a collection of my favorite editorial pages I have designed for the student publication North by Northwestern a magazine which publishes once a quarter."
            },
            {
                img: "https://i.imgur.com/eUQMBN0.png",
                text: "This photo edit was made for a story I wrote for Blackboard magazine on the rap duo FreePlanet. The first photo I made a few days before and thought it would represent their style well."
            },
            {
                img: "https://i.imgur.com/C7tuMmo.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            },
            {
                img: "https://i.imgur.com/0mcEuVg.png",
                text: "The before and after. Made just for fun to practice some photoshop skills."
            }
        ],
        index: 0
    }
}

const toggleCarousel = name => {
    const carousel = document.querySelector(`[data-carousel-name='${name}']`);
    const popupContainer = carousel.parentElement.parentElement;
    popupContainer.classList.toggle('active');
    if(popupContainer.classList.contains("active")){
        document.body.classList.add("noscroll");
    }
    else{
        document.body.classList.remove("noscroll");
    }
};

const render = name => {
    const carousel = carousels[name];
    const index = carousel.index;
    const slide = carousel.slides[index];
    const popupImage = document.querySelector(`.carousel[data-carousel-name = "${name}"]`);
    const popupText = popupImage.nextElementSibling.querySelector("p.portfolio-popup");
    popupImage.style.backgroundImage = `url(${slide.img})`;
    popupText.textContent = slide.text;
};
const inc = name => {
    const carousel = carousels[name];
    carousel.index = (++carousel.index) % carousel.slides.length;
    render(name)
};
const dec = name => {
    const carousel = carousels[name];
    --carousel.index; 
    if(carousel.index < 0) {
        carousel.index += carousel.slides.length;
    }
    render(name);
};

const initPopup = el => {
    const container = el.parentElement.parentElement;
    container.addEventListener("click", e => {
        console.log("hehe")
        if(e.target!== container) {
            return;
        }
       toggleCarousel(el.dataset.carouselName);
    });

    const fwd = el.firstElementChild;
    fwd.addEventListener("click", inc.bind(null, el.dataset.carouselName));
    const bck= fwd.nextElementSibling;
    bck.addEventListener("click", dec.bind(null, el.dataset.carouselName));

    render(el.dataset.carouselName);
}

Array.from(domCarousel).forEach(initPopup);