# Clothing Store

A website for a clothing store built with Gatsby.js

## Site

Here is a link to the site: [https://clothing-shop-gatsby.netlify.app/](https://clothing-shop-gatsby.netlify.app/)

![Home page](./src/assets/images/clothing-home.jpg)

## Table of contents
* [General description](#general-description)
* [Technologies](#technologies)
* [Features](#features)
* [Setup](#setup)

## General description

Frontend for an e-commerce clothes store. Built with Gatsby.js framework, using Contentful CMS and Firebase for user authentication. 

## Technologies

Project is created with:

* Gatsby.js - static site generator
* React.js - frontend framework
* Redux Toolkit + Redux Persist - app-wide state management and persistence
* Firebase Authentication + Realtime Database - user authentication and data storage
* Contentful CMS - content management platform
* Formik + Yup - forms and client-side data validation
* Styled Components - CSS-in-JS styling library 
* Bootstrap - CSS framework

## Features

* Browse items and add them to cart
* Search for items by name
* Create a user account and save your delivery data

## Setup

1. After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

2. This project requires a Contentful account. After you set up your account, use the [contentful-import](https://github.com/contentful/contentful-import) tool to import the data model and sample entries. The exported data is in the `contentful-export.json` file.
To import, paste the following in your `gatsby-node.js` file:

```js
const contentfulImport = require('contentful-import')

const options = {
  contentFile: 'contentful-export.json',
  spaceId: '<your_space_id>',
  managementToken: '<your_content_management_api_key>',
}

contentfulImport(options)
```

3. Once the dependencies are installed, you can run `gatsby develop` to start the application. You will then be able to access it at `localhost:8000`.

