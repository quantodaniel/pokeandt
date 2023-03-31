# PokeAndT

> Simple Pokedéx for ReactJS

## Demo
### https://pokeandt.vercel.app/

### Running the project:

```shell
git clone https://github.com/quantodaniel/pokeandt
cd pokeandt
yarn install
yarn start
```

### List of features:

| Feature                   | Description                       |
| ------------------------- | --------------------------------- |
| Home                      | Initial page with the search option |
| Dashboard                 | Lists all the favorites and the details page |
| Search                    | Search all by name or just the favorites |
| Favorite                  | User can add and remove from the favorite list |
| Compare                   | User can add and remove from the compare list |

## Introduction

This project lets you search for Pokemóns by name and navigate to a simplistic detail page.

The following premises were taken for the purpose of this development:

- No authentication methods or token validations are in place
- No responsive layouts or specific breakpoints for any device, best to use on desktop
- Using Zustand instead of Redux to leverage less boilerplate, and easier steps for testing  
- Using Tailwind instead of an UI library 
- Using lib to connect to https://pokeapi.co to leverage the already created interfaces an caching

## Installation

First install all the dependencies required to run the project.

PokeAndT requires the following tools to run:

| Tools          | Installation guide                          |
| -------------- | ------------------------------------------- |
| yarn           | https://classic.yarnpkg.com/en/docs/install |

## Running the project:

Clone the repository:

```shell
git clone https://github.com/quantodaniel/pokeandt
```

Open your OS Terminal and run these to install all the dependencies:

```shell
cd pokeandt
yarn install
```

Run the project:

```shell
yarn start
```

🎉 Now the project should be running on port `3000` 🎉

## Running tests

Open your OS Terminal and run these commands:

```shell
yarn test --watchAll
```

## Development

Aiming performance and blazing fast development time this project uses some libs to store data, get colors from images and better communicate with the API.

| Lib                   | Description                                    |
| --------------------- | ---------------------------------------------- |
| fast-average-color    | Library that calculates average or dominant color |
| immer                 | Creat immutable state tree                        |
| pokenode-ts           | Wrapper for the PokéAPI with built-in types       |
| react-icons                 | Popular icons for React projects                      |
| react-router-dom            | React Router enables "client side routing"            |
| react-search-autocomplete   | Fully customizable search box with autocomplete       |
| zustand                     | A small, fast and scalable bearbones state-management |

### Word about React Hooks 

Throughout the development was clear that React Hooks like `useCallback`, `useMemo` and `useEffect` was not needed. 

All the required data are being loaded by the router upon change of paths and any other changes are being handled by Zustand, that has its own memoization process in place. 

Also, actions and events are too close to where is used or do not require large amount of processing, which makes the use of those hooks less needed. 
