# <span style="background-color: gray; padding: 8px; border-radius: 10px;font-weight:bold">Courier-Application</span>
This repository is part of full - stack application.

- [GitHub](https://github.com/Ivnchev/G2G-Coffee)

# 1. Technology stack

## 1.1 Front-end

* *React*
* *HTML5 & CSS3*

## 1.2 Back-end

* *MongoDB*
* *Express*    
* *Node.js*
* *Mongoose*

# 2. Project chart

![diaram of the project](/client/public/g2g-coffee.png)

# 3. Run the application

## 3.1 Development
Use below steps to setup locally:
```
git clone "https://github.com/Ivnchev/G2G-Coffee.git"
```
```
cd client
```
### 3.1.1 Front End
- Run SPA application:
```
npm start
```
This will run the application on [http://localhost:3000 ](http://localhost:3000 )

### 3.1.2 Back End
- Run REST API:
```
npm start
```
This will run the rest API on [http://localhost:5000 ](http://localhost:5000 )

## 3.2 Production

### You can see example of the application here : [https://g2g-coffee.herokuapp.com/](https://g2g-coffee.herokuapp.com/)

### 3.2.1 Front End
- Build application
```
npm run build
```
This will store the project in ```build/``` directory

### 3.2.2 Back End

- Needs to use some module bundler like Webpack. To run the project use :
```
npm start
```
The API is deleveped to run at any environment port. ```By default the port will be: 80``` 
