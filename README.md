# Sassy Frontend

This is the (current) frontend for my Totally Serious Saas Business. Originally, I started out wanted to just have something running in EKS, but it turns out it'll be easier for me to have a rando frontend in cloudfront that calls out to EKS via a load-balancer (or whatever)...so that's what I'm doing.

The site currently pulls in totally amazing data on other Saas businesses and lets users take advantage of our generous free tier to just look at the info without logging in. PMs hate it, but giving free access to totally not fake Saas company data is our business...and business is **GOOD**!

## Architecture

Paired with the [Sassy-backend](https://github.com/lpmi-13/sassy-backend), this repo contributes the frontend component of the entire Saas architecture.

![architecture diagram](sassy-architecture.png)

## local dev

npm i && npm start

## deployments

built and sync'ed with S3 bucket via GitHub actions workflow.
