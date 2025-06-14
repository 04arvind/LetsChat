import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { acceptFriendRequest, getMyFriendRequests, getMyFriends, getOutgoingFriendReqs, getRecommendedUsers, sendFriendRequest } from "../controllers/user.controller.js";

const router = express.Router();

// apply auth middleware to all the routes
router.use(protectRoute);

router.get("/",getRecommendedUsers)
router.get("/friends",getMyFriends)

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests",getMyFriendRequests);
router.get("/outgoing-friend-requests",getOutgoingFriendReqs);

export default router; 