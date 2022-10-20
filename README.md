# api-project

For this project we had to create a restful JSON api with full crud functionality. We could use any data set we chose.

## Data Info

The data in this API is from kaggle. It contains data profiles of every NBA player.

## usage

Once you have the files open, run "npm run dev" in your terminal

## End Points

### Get full list of players

localhost:3000/players

### Search by player full name

localhost:3000/players/name/firstname-lastname
example: localhost:3000/players/name/lebron-james

### Search by jersey number

localhost:3000/players/jersey/jerseyNumber
example: localhost:3000/players/jersey/6

### Search by Team

localhost:3000/players/team/Team Name
example: localhost:3000/players/team/lakers

### Search by position

localhost:3000/players/position/Position
example: localhost:3000/players/position/Forward
