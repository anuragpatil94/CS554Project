const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //from /auth/google/callback
      console.log("access token: ", accessToken);
      console.log("refresh token: ", refreshToken);
      console.log("profile: ", profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {}
);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("We've now got a server!");
  console.log(`Your routes will be running on http://localhost:${PORT}`);
});

// https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=176324808008-fqnan2a3t1r2k7j5lec80t914do5v755.apps.googleusercontent.com
