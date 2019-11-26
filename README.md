# Adventure Capitalist Angular Clone

A clone of the Adventure Capitalist game (http://en.gameslol.net/adventure-capitalist-1086.html) done in angular. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Game Scope

The project scope was limited to the following functions:
- Buy businesses
- Upgrade businesses
- Make money from a business
- Hire managers (automatically make money from a business)
- Money from idle time (while the window is closed) is calculated and earned
- Mockup of some achievements

### Focus

This clone focuses mainly on the front-end application, due to it being an angular application. Code is only run when an browser window is open and never run any other time (aside from the node server which only serves angular). Money made while idle is calculated based on the stored timestamps for each business when the window opens each time. Any partially run business will therefore pickup where it left off when the window is re-opened.

## Architecture

### Storage

All data is stored in `LocalStorage` in the browser as JSON strings. Timestamps are stored in millisecond time. `LocalStorage` data is refreshed when:
- A business scores
- Anything is purchased (manager, business, upgrade)
- Data is loaded from the seed JSON file

#### LocalStorage

Storing the businesses with timestamps as opposed to continually running the server allows the user to even make money when their computer is turned off. It also makes deploying or running the game headache free as the user only needs to have npm installed to run it.

### Seed Data

Seed data is stored in the `src/static/json` folder. On the first run of the game, or any run where the data in the seed file does not exist in `LocalStorage`, seed data is retreived and stored in `LocalStorage`.

### Angular

As this is a non-social game (as per scope), there was no reason to run the game code server side. I have used angular in the past so it was chosen out of familiarity to me.

### Bootstrap

Bootstrap has all the components required to make this application with very minimal modifications to the code.

## TODO

Tradeoffs and TODO / left out functionality.

### Security / Cheating

Currently, a savvy user could just edit the `LocalStorage` JSON data and increase their money / business / etc (but what's the fun in that?). Would be potentially worth it to encrypt this data on storage so that it would be more difficult to change. 

### Multiple Browsers

Although the business scoring is timestamp based, there is a chance that two browser windows opened simultaneously could cause the business to "double score". This may be solved by awarding a single (first opened) window the master title and only allowing it to score the business. I have not yet produced this error so for now it is just something to look out for.
