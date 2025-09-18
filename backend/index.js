require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { userVerification } = require("./Middlewares/AuthMiddleware");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

// app.get("/addHoldings", async(req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("Done!")
// });

// app.get("/addPositions", async(req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss || false,
//     });
//     newPosition.save();
//   });
//   res.send("Done!")
// });

app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

// Authentication endpoints
app.post("/auth/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Simple validation
    if (!username || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }
    
    // For now, just return success (you can add database logic later)
    console.log("Signup attempt:", { username, email });
    res.json({ success: true, message: "Account created successfully!" });
  } catch (error) {
    console.error("Signup error:", error);
    res.json({ success: false, message: "Something went wrong" });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Simple validation
    if (!email || !password) {
      return res.json({ success: false, message: "Email and password are required" });
    }
    
    // For now, just return success (you can add database logic later)
    console.log("Login attempt:", { email });
    res.json({ success: true, message: "Login successful!" });
  } catch (error) {
    console.error("Login error:", error);
    res.json({ success: false, message: "Something went wrong" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    console.log("Received order:", req.body);
    
    // Convert string inputs to numbers
    const orderData = {
      name: req.body.name,
      qty: parseInt(req.body.qty),
      price: parseFloat(req.body.price),
      mode: req.body.mode,
    };

    console.log("Processed order data:", orderData);

    let newOrder = new OrdersModel(orderData);
    await newOrder.save();
    console.log("Order saved to database");

    // Update holdings based on order
    const { name, qty, price, mode } = orderData;
    
    let existingHolding = await HoldingsModel.findOne({ name: name });
    console.log("Existing holding found:", existingHolding);
    
    if (mode === "BUY") {
      if (existingHolding) {
        // Update existing holding
        const totalQty = existingHolding.qty + qty;
        const newAvg = ((existingHolding.avg * existingHolding.qty) + (price * qty)) / totalQty;
        
        const updateResult = await HoldingsModel.updateOne(
          { name: name },
          { 
            qty: totalQty,
            avg: parseFloat(newAvg.toFixed(2)),
            price: price,
            net: "0.00%",
            day: "0.00%"
          }
        );
        console.log("Updated existing holding:", updateResult);
      } else {
        // Create new holding
        let newHolding = new HoldingsModel({
          name: name,
          qty: qty,
          avg: price,
          price: price,
          net: "0.00%",
          day: "0.00%"
        });
        const saveResult = await newHolding.save();
        console.log("Created new holding:", saveResult);
      }
    } else if (mode === "SELL" && existingHolding) {
      // Reduce holding quantity
      const newQty = existingHolding.qty - qty;
      
      if (newQty > 0) {
        const updateResult = await HoldingsModel.updateOne(
          { name: name },
          { 
            qty: newQty,
            price: price,
            net: "0.00%",
            day: "0.00%"
          }
        );
        console.log("Updated holding quantity:", updateResult);
      } else {
        // Remove holding if quantity becomes 0 or negative
        const deleteResult = await HoldingsModel.deleteOne({ name: name });
        console.log("Deleted holding:", deleteResult);
      }
    }

    console.log("Holdings update completed");
    res.json({ success: true, message: "Order received and holdings updated" });
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).json({ success: false, message: "Error processing order" });
  }
});

// Authentication routes
app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server is running on port 3002");
  mongoose.connect(uri)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));
});