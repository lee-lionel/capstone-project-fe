# Tutors Connect 
Coding a Tutor Portal that connects parents to tutors without having to go through an agent. <br/>

## Try out the Web Application 
 *[Tutors Connect](https://capstone-project-fe-two.vercel.app/)*

## Code Explanation 💬
The code was done using MERN Stack:

### Frontend:

## components
- Reusable components such as `PostCard.jsx` and `ProfileCard.jsx` that are rendered across the application
- Due to the lack of a better name `Stalking.jsx` just renders the profile of the person that you are stalking
- Other components are self explanatory


## pages
- For simple pages such as `AuthPage`, `CreatePost`, `Home` and `EditProfile`, they render the required components to display in their respective routes(urls)
- For pages such as `View` and `Profile`, conditional rendering statements are included to render the components based on the role of the user
  - i.e. if you registered as a Parent, your `View` will display prospective Tutors. 

## utilities
- mainly consisting of api calls using `fetch` to interact with the backend server
- also have a `subject.js` exporting a constant variable that can be reused in multiple components

### Backend:
- The usual express and mongoDB configurations.
- Included seedData for the sake of demonstration



## Screenshots 📸
 Just view the page, minimal CSS was done for this project

## Future Enhancements 
- Have the intention to attempt setting OTP through Twillio API -> will work on that soon
- Consider learning CSS libraries to make my UI nicer
- Consider adding chat functionalities to the application - for now parents and tutors can only contact each other through email, phone number is hidden (can only be used for login)
