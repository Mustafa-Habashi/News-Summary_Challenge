# News Summary Challenge

### Task

You'll test-drive a single page application in React that send requests to the Guardian API to get Headline and Article data and display them. 

### Serving your app

You'll use React's toolchain to take care of serving your HTML, CSS and JavaScript files.  

## User Stories

Some of these stories will need decomposing if they seem too large.

### Standard
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

### Extended

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```


## Mockups

### Component Hierarcy

For the main page the hieracry begins with the home page.
This contains a Header on the top level and a footer on the bottom level. in the middle contains an article component for multiple headlines to show up.
Each article contains an image, title and a summary.


### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup-c.png)


### Component Hierarcy

For the article summary page
This contains a Header on the top level and a footer on the bottom level. In the middle contains one sinngle article with its information
Each article contains an image, title and a body text about the selected article



### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup-c.png)

---

## Tests
### Homepage
1. Tests if the right number of headlines that are render in matches the mock data file.

### Header and Footer
1. Tests for snapshots of the header and footer component to see if they match the file in src folder


## Available Scripts

In the project directory, you can run:
### `npm i`

This will install all the dependencies for the project.

### `npm start`

Runs the app in the development mode.



### `npm test`

Launches the test runner in the interactive watch mode.\

