import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './src/config/db.js'
import userRoutes from './src/routes/userRoutes.js'
import guideRoutes from './src/routes/guideRoutes.js'
import communityRoutes from './src/routes/communityRoutes.js'
import housingRoutes from './src/routes/housingRoutes.js'
import serviceProviderRoutes from './src/routes/serviceProviderRoutes.js'
import  serviceRequestRoutes from './src/routes/serviceRequestRoutes.js'
import cookieParser from "cookie-parser"
import messageRoutes from './src/routes/messageRoutes.js'
import replyRoutes from "./src/routes/replyRoutes.js"


dotenv.config();
dbConnect();

const app = express();

const corsOptions = {
  origin:"*",
    // process.env.NODE_ENV === "production"
    //   ? 'https://client-sh.vercel.app'
    //   : "http://localhost:3000",
  credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions))

// app.use(cors({
//    origin: ['https://client-sh.vercel.app', 'http://localhost:3000', "*"],
//    credentials: true,
//    preflightContinue: true,
   
//  }))

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded ({extended : false}));

// app.use((req, res, next) => {
//   if (req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.status(200).json({});
//   } else {
//     next();
//   }
// })

// app.use((req, res, next) => {
//   console.log('Request Headers:', req.headers);
//   next();
// })
// // Define your route handler to set the cookie
// app.get('/set-cookie', (req, res) => {
//   const token = process.env.JWT_SECRET; // Replace this with your actual token value
//   res.cookie('access_token', token, {
//     httpOnly: true,
//     secure: true, // this will enforce https (in production)
//     sameSite: 'none', // change this to 'none' if your client and server are on different domains
//     domain: 'settlers-hub-server.vercel.app',

//   });
//   res.status(200).json({ message: 'Cookie set successfully' });
// });



app.use('/guide', guideRoutes)
app.use('/user', userRoutes)
app.use('/community', communityRoutes)
app.use('/housing', housingRoutes)
app.use('/serviceprovider', serviceProviderRoutes)
app.use('/servicerequests', serviceRequestRoutes)
app.use('/reply', replyRoutes)
app.use('/message', messageRoutes)
app.use("/image", express.static("./server/uploads"));

app.use("/uploads", express.static("./server/uploads"))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is up and running at port ${port}`))
