import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IState {
    oneData: IStateData[]
    twoData: IStateData[]
}

interface IStateData {
    id: number;
    subtitle?: string;
    title: string;
    info: string;
    imgSrc: string;
    class: string;
}

const state: IState = {
    oneData: [
        {
            id: 1,
            subtitle: "WHEELS UP",
            title: "THRUDARK OP NEPAL TRIP",
            info: `At 6,812m above sea level, Ama Dablam is a long way off the highest peaks in the Himalayas, and yet climbing it is regarded as a true achievement among the mountaineering fraternity. The technical rock and ice climbing skills needed to reach the summit mean that you can find Everest veterans or people who’ve made other 8,000m summits, running into difficulty.
            
            An intimidating, vertical pinnacle of rock and ice in Nepals Eastern Himalayas, Ama Dablam takes its name from its striking appearance. ‘Ama’ means mother, as the mountain’s long ridges are believed to look like a mother’s arms, outstretched to protect her children. ‘Dablam’ is the name of the pendant traditionally worn by Sherpa women, a reference to the prominent hanging glacier dangling beneath the summit. The mountain is well-known to anyone who’s made the trek to Everest base camp, as it dominates the Eastern skyline for several days of the walk. It’s also one of the most popular peaks in the Himalayas among climbers, but it’s not without its difficulties.`,
            imgSrc: "/images/Ama-Dablam-1.jpg",
            class: "flex-row-reverse"
        },
        {
            id: 2,
            subtitle: "AIM",
            title: "THRUDARK DEPLOYS TO NEPAL",
            info: `Aim: ThruDark Co-Founder Staz will continue to test and evaluate all current products and new samples in the technical mountain environment to ascertain each garment's functional application and credibility.
            
            Weather: Due to its elevation, the weather at Ama Dablam (like much of the Himalayas) can change rapidly and often without warning. Base Camp is clear, dry, and hot predominantly in the daytime with temperatures dropping dramatically in the evenings to below freezing. Higher up the mountain the winds can oftentimes be too high to allow climbing and need to be taken into consideration for a summit day push.
            
            Task Org: Staz (ThruDark Co-Founder), Nims Dai (ThruDark Ambassador), Hamish Frost (Photographer/Videographer) & Broady Hood (Photographer)
            `,
            imgSrc: "/images/Ama-Dablam-2.jpg",
            class: "flex-row"
        },
        {
            id: 3,
            subtitle: "SITREP",
            title: "SITUATION",
            info: `It was ThruDark’s intent to travel from our UK headquarters to Katmandu directly in order to test and evaluate our current range of clothing and new developments with world record-holding TD Ambassador Nims Dai. This test and research trip will have a direct impact on the next phase of product development as our range expands in 2022 and beyond.`,
            imgSrc: "/images/Ama-Dablam-3.jpg",
            class: "flex-row-reverse"
        },
        {
            id: 4,
            subtitle: "THE WHY",
            title: "MISSION",
            info: `It is our mission at ThruDark to test and evaluate every garment personally in extreme land, sea, and air conditions in order to develop the next generation of technical outdoor clothing.`,
            imgSrc: "/images/Ama-Dablam-6-(1).jpg",
            class: "flex-row"
        }
    ],
    twoData: [
        {
            id: 1,
            subtitle: "INTENT",
            title: "SCHEME OF MANOEUVRE: DAYS 1-3",
            info: `ThruDark Intent: To utilise our knowledge, previous experience, and ambassador input to test and develop the next generation of technical outdoor clothing. During this Ama Dablam expedition we will endeavour to test 5 core ThruDark products; Strike Pants, Phalanx Fleece & Patriot Jacket, Siege Base-layer and Mantra Gilet.

            Day 0: The ThruDark team will touch down in the evening in Katmandu and move to the hotel to link in with the Elite Exped crew and begin sorting out the kit and equipment.
            
            
            Day 1: Preparing all kit in the morning, the ThruDark team will head to Katmandu Airport for the helicopter ride to Namche Bazar in the afternoon. Namche Bazaar is a town in Khumbu Pasanglhamu Rural Municipality in Solukhumbu District of Province No. 1 of north-eastern Nepal. It is located within the Khumbu area at 3,440 meters at its low point, populating the sides of a hill.
            
            Day 2: We spent 48hrs in Namche Bazar to help with the acclimatisation phase. Day 2 included some local trekking to the Everest Hotel at approx 4,000m.
            
            
            Day 3: On day 3 we headed out for more trekking to our new Hotel Rivendell Lodge located in Debouche situated at approx 3,800m. Here we would spend approx 36 hours to aid acclimatisation. We walked to a local m monastery and prepared for the trek up to Ama Dablam Base Camp.`,
            imgSrc: "/images/Ama-Dablam-6.jpg",
            class: "flex-row-reverse"
        },
        {
            id: 2,
            subtitle: "INTENT",
            title: "SCHEME OF MANOEUVRE: DAYS 4-8",
            info: `Day 4: Early morning we set off for Ama Dablam Base camp which took approximately three hours. We arrived at Base Camp at mid-day and were greeted by Nims and his Elite Exped team for lunch. Our kit and equipment were blessed during the local Puja ceremony. The next few days would be spent at Base Camp acclimatising and refreshing the climbing skills required for the route. Base camp is situated at approximately 4,800 metres.

            Day 5 & 6: A fairly relaxed a couple of days in and around Ama Dablam Base Camp to facilitate the body’s acclimatisation process. We prepared the kit and talked through the challenges that lay ahead for the climb. We had the opportunity to practice rope/climbing techniques on the local boulders.
            
            Day 7 & 8: On day 7 we trekked higher up into the mountain to aid the acclimatisation process and check kit and equipment. On day 8 we conducted more specific rope training and talked through the rotation process which would be conducted over the next couple of days. Kit was prepped and packed ready for the next morning's departure.`,
            imgSrc: "/images/Ama-Dablam-4.jpg",
            class: "flex-row"
        },
        {
            id: 3,
            subtitle:"INTENT",
            title: "SCHEME OF MANOEUVRE: DAYS 9-11",
            info: `Day 9 & 10: We pushed out early from Base Camp with the team and headed into the mountain towards Camp 1. The route, a 1,240 metre ascent, takes 4 hours and 40 minutes to complete. We would spend the evening here at Camp 1 to aid our acclimatisation. Day 10 began with an early breakfast before heading up the mountain towards Camp 2. This section included technical climbing and abseiling. One of the most exposed camping spots on the planet. Ama Dablam's Camp 2 is set on a rocky outcrop approximately 6,100 metres above sea level (20,000 ft). It often serves as the final resting point before climbers depart for the summit. We spent approximately 5 hours here before heading back down to Base Camp to rest for the next 36 hours.

            Day 10 & 11: After returning from Camp 2, we rested to aid recovery and the body’s acclimatisation ahead of our summit push. Final kit checks and preparation took place before we headed for the summit.`,
            imgSrc: "/images/Ama-Dablam-8-(1) (1).jpg",
            class: "flex-row-reverse"
        },
        {
            id: 4,
            title: "SCHEME OF MANOEUVRE: DAYS 12-13",
            info: `Day 12 & 13: After completing our blessing for safe passage, we set off on our summit quest at approximately 08:00 hours. We moved directly to Camp 1 where we stayed for approximately two hours to rest and eat before moving towards Camp 2. We arrived in Camp 2 at approximately 15:00 hours and again used this point to eat, rest, and change our clothing and equipment before heading off at around 22:00 hours for Camp 3 at approx 6,280 metres. We rested in a tent at Camp 3 for approximately 4 hours and moved off for the summit push at around 04:00 hours.

            Day 13 Summit Push: The wind was gusting through the darkness as we moved on with head torches and fixed lines. The temperature was well below freezing and the ThruDark Summit Suit came into its own, providing much-needed shelter from the harsh elements. The steep inclines and challenging terrain make the movement slow and difficult throughout this phase. After approximately 5 hours of climbing, around 08:00hrs, we eventually made it to the summit of Ama Dablam. Here we took in the commanding view of Everest nearby.
            
            After 40 minutes spent atop the incredible mountain summit, we then prepared for our descent.
            
            Day 13 continued: The descent was planned for one long push back down to Base Camp, stopping only for food, water replenishment, and kit changes. This was a long, difficult day that would push us both physically and mentally across the challenging terrain. We arrived back at Base Camp at approximately 15:45 hours.
            
            Main Effort: Test and evaluate our growing range of products in high-altitude environments during a multitude of technical activities.`,
            imgSrc: "/images/Ama-Dablam-7.jpg",
            class: "flex-row"
        },
        {
            id: 5,
            subtitle: "DEBRIEF",
            title: "SUMMARY",
            info: `ThruDark will leave our HQ in Poole for the mountains of Nepal. Following an in-depth brief, the team will move out to the above locations to conduct testing of the ThruDark products in order to evaluate and understand if changes are required for the second phase of development.

            The ThruDark camera crew will capture and document all imagery/video and BTS footage of all activities throughout.
            
            The opportunity to climb and test our current range and sample products in Nepal was an opportunity not to be missed. The expedition was a huge success and cemented the technical capability of current products in changing weather conditions across a multitude of activities. This was also a great opportunity to share the mountain with the legend Nims and receive first-hand feedback and ideas for future clothing projects.
            
            We will continue to push ahead and will always look to improve both materials and construction if and where required.
            
            We didn’t come to take part, we came to take over.
            
            Staz.`,
            imgSrc: "/images/Ama-Dablam-8 (1).jpg",
            class: "flex-row-reverse"
        }
    ]
}

export const blogsSlice = createSlice({
    name: "blogs",
    initialState: state,
    reducers: {

    }
});

export const selectBlogsOneData = (state: RootState) => state.blogsData.oneData;
export const selectBlogsTwoData = (state: RootState) => state.blogsData.twoData;

export default blogsSlice.reducer;