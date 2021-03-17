# 🍏🔢 Range Reveal 📉🍐

### Capstone Project - Aimee Oz - [Ada Developers Academy](https://adadevelopersacademy.org/)

- Reveal is the frontend repository of Range Reveal, bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It was deployed with [AWS Amplify](https://docs.amplify.aws/).
- [Range](https://github.com/marks214/range) is the backend repository.

## Contents
1. [Installation Guide](#install)
2. [What is Range Reveal?](#what)
3. [How to use Range Reveal?](#how-to)


# <a name="install">Installation Guide</a>
1. Clone this repository. 
    `$  git clone https://github.com/marks214/reveal.git`
2. Navigate to the project directory. 
    `$  cd reveal`
3. Install the dependencies. 
    `$  npm install`
4. Run the server. 
    `$  npm start`

### Stuff You Should Know:
In package.json the proxy for the backend is set to http://localhost:5000/. This may need to be changed to reflect your local backend server's address (e.g., http://127.0.0.1:5000, http://localhost:3001, etc.).

Currently the backend url accessed by the app is https://www.rangereveal.aimeeoz.com. Set it to your local server.

<img src="https://user-images.githubusercontent.com/46636425/108148363-7fadf400-7085-11eb-9425-f19af639d3ba.png" width="500" height="auto" />

# <a name="what">What is Range Reveal?</a>

Range Reveal is a food-tracking web app. It is intended to help users track what they eat per day. Users can set custom energy and macronutrient goals (range), search through a database of foods, and add custom foods to the database. Users can then access their food journals, modify if needed, and see (reveal) graphs of their energy and macronutrient consumption over the course of a week.

# <a name="how-to">How to use Range Reveal?</a>
1. Login or create an account. You will then be prompted to confirm your account.

<img src="https://user-images.githubusercontent.com/46636425/108137660-305dc880-7071-11eb-9717-4f1ea86fb14a.png" width="200" height="auto" />   <img src="https://user-images.githubusercontent.com/46636425/108137653-2d62d800-7071-11eb-91bf-48c06e51bc6a.png" width="204" height="auto" />

2. After login you will see your user profile with default energy and macronutrient ranges.

<img src="https://user-images.githubusercontent.com/46636425/108138960-dad6eb00-7073-11eb-8977-9e78b8e9e009.png" width="204" height="auto" />

You can enter custom goals for yourself by either typing them directly in the fields, or modifying the existing values using the arrows. You will need to click on "update goals" at the bottom of the page to save changes.

<img src="https://user-images.githubusercontent.com/46636425/108139209-71a3a780-7074-11eb-954b-f7baf7d88845.png" width="220" height="auto" />  <img src="https://user-images.githubusercontent.com/46636425/108139410-e7a80e80-7074-11eb-8492-aa6e69b07a8d.png" width="168" height="auto" />

3. Start tracking foods by clicking on Food Search in the navigation bar. 
 
<img src="https://user-images.githubusercontent.com/46636425/108139940-f5aa5f00-7075-11eb-821c-19d28244d94e.png" width="300" height="auto" />
<img src="https://user-images.githubusercontent.com/46636425/108140089-3a35fa80-7076-11eb-8762-4ad27e3778e2.png" width="250" height="auto" />

On the Food Search page you can search for different foods by typing in the name of a food or brand (e.g., apple, honeycrisp apple, Kirkland, etc.), and then pressing enter. Click add on the food card that appears, if you are satisfied with the results of the search.

<img src="https://user-images.githubusercontent.com/46636425/108141327-5e92d680-7078-11eb-8ae3-524e077456da.png" width="250" height="auto" />
<img src="https://user-images.githubusercontent.com/46636425/108141462-9dc12780-7078-11eb-88e5-bc87d91c7458.png" width="250" height="auto" />

4. You can create a custom food using the form on the right.
<img src="https://user-images.githubusercontent.com/46636425/108141868-6bfc9080-7079-11eb-93e6-7102ccd9dc55.png" width="240" height="auto" />

After you fill out the form, click on the "Add Food" button. Your custom food will be added to the database for future searches. Your custom entry will appear to the left where you can add it to your food journal.

<img src="https://user-images.githubusercontent.com/46636425/108142230-37d59f80-707a-11eb-866a-64e38c2bd9fe.png" width="240" height="auto" />
  <img src="https://user-images.githubusercontent.com/46636425/108142371-7ff4c200-707a-11eb-87f1-5383e669f04d.png" width="240" height="auto" />
  
5. Once your have finished searching and adding your foods you can click on the "Data" tab at the top to navigate to your food journal. Here you can see and modify your food journal. Additionally, you can choose to reveal your weekly data.
<img src="https://user-images.githubusercontent.com/46636425/108143409-90a63780-707c-11eb-94b7-f4de1f0f67b4.png" width="240" height="auto" />
  <img src="https://user-images.githubusercontent.com/46636425/108143412-926ffb00-707c-11eb-98f2-2eaadba63327.png" width="240" height="auto" />
  
 Example of new user graphs:
 
 <img src="https://user-images.githubusercontent.com/46636425/108143416-9439be80-707c-11eb-85d7-54b892858ff3.png" width="240" height="auto" />
 <img src="https://user-images.githubusercontent.com/46636425/108143421-96038200-707c-11eb-8b19-cb74621667f7.png" width="240" height="auto" />
 <img src="https://user-images.githubusercontent.com/46636425/108143428-97cd4580-707c-11eb-8a2f-a5e176ab5dd9.png" width="240" height="auto" />
 <img src="https://user-images.githubusercontent.com/46636425/108143432-99970900-707c-11eb-899d-0499712b3774.png" width="240" height="auto" />
