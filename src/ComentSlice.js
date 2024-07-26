import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments:[{
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_DFI338XgEpK8xbMKmUixYbUrXU_Rk9tXg&s",
        name:"Jane ",
        lastname:"Doe",
        email:"janedoe@exemple.com",
        timer:"3 monthes ago",
        stars:5,
        review:"I recently used Booking Bliss for planning a family vacation, and I couldn't be more satisfied with the experience. From the moment I landed on the homepage, the website's intuitive design and user-friendly interface made it incredibly easy to navigate. Booking Bliss offers an extensive selection of accommodations, from budget-friendly hotels to luxurious resorts, ensuring there’s something for everyone. The competitive pricing and available deals helped me stay within my budget while still enjoying top-notch services. The real-time availability feature was particularly helpful, providing up-to-date information on room availability and allowing me to make informed decisions quickly.The customer support team was incredibly responsive and helpful; their 24/7 service was a lifesaver when I had questions about my booking. The payment process was secure and straightforward, with multiple options adding to the convenience. Although I felt that the filter options could be more extensive, and there were occasional loading delays, these were minor issues that didn't significantly impact my overall experience.",
      },
      {
        image:"https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg",
        name:"Jhon ",
        lastname:"Smith",
        email:"jhonsmith@exemple.com",
        timer:"3 days ago",
        stars:3,
        review:"I had an amazing experience using Booking Bliss to plan my recent business trip. The website’s interface is incredibly user-friendly, making it simple to find the perfect hotel in no time. I was impressed with the wide range of options available, from budget to luxury accommodations. The prices were very competitive, and I appreciated the discounts that were available. The booking process was smooth, and the payment system felt secure and straightforward. What stood out most was the customer service; I had a minor issue with my booking, and their support team resolved it quickly and efficiently. Despite a couple of minor loading delays, my overall experience was exceptional. I highly recommend Booking Bliss for anyone looking for a hassle-free booking experience."
      },
      {
        image:"https://img.freepik.com/premium-photo/hd-digital-art-wallpaper-stock-image_783884-98010.jpg",
        name:"Michael",
        lastname:"Thompson",
        email:"MichaelThompson@exemple.com",
        timer:"3 weeks ago",
        stars:4,
        review:"Using Booking Bliss to book my recent holiday was an absolute pleasure. The website is designed with the user in mind, making it incredibly easy to search for and book the perfect accommodation. I loved the variety of options, from charming bed-and-breakfasts to five-star hotels. The real-time availability feature ensured I had up-to-date information, which made the booking process stress-free. The competitive pricing and exclusive deals were a big plus, allowing me to get the best value for my money. Customer support was top-notch, assisting me promptly when I needed help. Although the filter options could be more extensive, it didn't detract from the overall excellent experience. I will definitely use Booking Bliss for future travel plans and highly recommend it to others."
      },
      {
        image:"https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1",
        name:"Emma ",
        lastname:"Harper",
        email:"EmmaHarper@exemple.com",
        timer:"6 days ago",
        stars:3,
        review:"Planning my honeymoon through Booking Bliss was one of the best decisions I made. The website’s layout is clean and easy to navigate, which made finding a romantic getaway effortless. The selection of resorts and hotels was impressive, catering to all tastes and budgets. I found the best deals that fit my budget without compromising on luxury. The booking process was smooth, and I felt secure with the payment options provided. Customer service was outstanding; they were always available to answer my questions and provide support. Despite a few moments when the site was a bit slow to load, my overall experience was fantastic. Booking Bliss made our honeymoon unforgettable, and I would highly recommend it to anyone planning a special trip."
      }
    ]
}

export const ComentSlice = createSlice({
  name: 'comentslicee',
  initialState,
  reducers: {
    addrate:(state,action)=>{
        state.comments=[...state.comments,action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addrate } = ComentSlice.actions

export default ComentSlice.reducer