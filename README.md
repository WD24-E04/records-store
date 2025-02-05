# Record Store App (MERN Stack)

## 1. Project workflow

We are building a **Record Store App** where users can:

- **Browse records**
- **Manage a cart**
- **Register/Login**

---

## 2. Define Core Features & [User Stories](https://www.atlassian.com/agile/project-management/user-stories#:~:text=A%20user%20story%20is%20the,the%20end%20user%20or%20customer.)

### Users

- _As a user, I want to Brower records without being logged in_
- _As a user, I want to create an account so that I can save my cart and access it later._
- _As a user, I want to log in and log out securely._
- _As a user, I want to add one or multible records to my cart after I log in._
- _As a user, I want to remove records from my cart._

### Admin (Optional)

- _As an admin, I want to manage records (add, edit, delete)._

---

## 3. Wireframe Planning

Before diving into the actual coding, it's helpful to sketch out a **wireframe** of how our app will look. Wireframes help visualize the layout and flow of the application before implementing the UI.

### **Main Pages & UI Elements**

- **Homepage (Record List)**
- **Signup Page**
- **Login Page**
- **Record Page**
- **Cart Sidebar**

### **Tools for Wireframing**

- Draw sketches on a **whiteboard**.
- Use **Figma**, **Balsamiq**, or **Adobe XD** for digital wireframes.
- Use **pen & paper** to quickly brainstorm UI layouts.

---

## 4. [System Design:](https://medium.com/design-bootcamp/system-design-and-system-architecture-e963d030bc7b) Data Structure & Architecture

### Database Models (MongoDB with Mongoose)

At this point, it should be easier to detrmine how many resources we have in our database:
Based on the user story and the wire frame, we can conclude that we have to deal with three resources in the data base

#### 1. Users Collection: to store user information

```json
{
  "firstName": "String",
  "lastName": "String",
  "email": "String",
  "password": "String (hashed)",
  "cartId": "ObjectId (references Cart)"
}
```

#### 2. Records Collection: to store the available reacords

```json
{
  "title": "String",
  "year": "Number",
  "artist": "String",
  "img": "String",
  "price": "Number",
  "genre": "String"
}
```

#### 3. Carts Collection: to store user cart items

```json
{
  "items": [
    {
      "record": "ObjectId (references Record)",
      "quantity": "Number"
    }
  ]
}
```

---

## 5. [Backend API Design](https://masteringbackend.com/posts/api-design-best-practices) (Express & MongoDB)

### User Routes (`/users`)

| Method | Endpoint      | Description                     | Auth Required? |
| ------ | ------------- | ------------------------------- | -------------- |
| POST   | `/register`   | Create a new user               | No             |
| POST   | `/login`      | Authenticate user & return JWT  | No             |
| GET    | `/logout`     | Log out user                    | Yes            |
| GET    | `/me`         | Get current logged-in user data | Yes            |

### Records Routes (`/records`)

| Method | Endpoint | Description               | Auth Required? |
| ------ | -------- | ------------------------- | -------------- |
| GET    | `/`      | Get all records           | No             |
| POST   | `/`      | Add a new record          | (Admin)        |
| PATCH  | `/:id`   | Update a record           | (Admin)        |
| DELETE | `/:id`   | Delete a record           | (Admin)        |

### Cart Routes (`/carts`)

| Method | Endpoint          | Description             | Auth Required? |
| ------ | ----------------- | ----------------------- | -------------- |
| GET    | `/:cartId`        | Get cart details        | Yes            |
| POST   | `/:cartId/add`    | Add a record to cart    | Yes            |
| PATCH  | `/:cartId/update` | Update quantity in cart | Yes            |
| DELETE | `/:cartId/remove` | Remove record from cart | Yes            |

---

## 6. Thinking The Frontend Structure (React)

### Component Breakdown

| Component          | Purpose                                 |
| ------------------ | --------------------------------------- |
| `Navbar.jsx`       | Displays navigation links, login status |
| `HomePage.jsx`     | Landing page                            |
| `RecordsList.jsx`  | Lists all records                       |
| `RecordCard.jsx`   | Displays individual record details      |
| `CartSidebar.jsx`  | Displays the shopping cart              |
| `CartItemList.jsx` | Lists cart items                        |
| `CartItem.jsx`     | Displays an individual cart item        |
| `Login.jsx`        | Login form                              |
| `Signup.jsx`       | Registration form                       |

### State Management [(Context API + Reducers)](https://react.dev/learn/scaling-up-with-reducer-and-context)

State structure is always matching the collections in our database

- **Users** (`usersReducer.js`)
- **Records** (`recordsReducer.js`)
- **Cart** (`cartReducer.js`)
- These are managed in `Context.jsx` to provide a **global state**.

---

## 7. Step-by-Step Implementation Plan (Revised)

### Step 1: Set Up the Backend

- Initialize Express server (`main.js`).
- Connect to MongoDB (`connectDB.js`).
- Create models (`User.js`, `Record.js`, `Cart.js`).
- Implement authentication (`usersController.js`, JWT, bcrypt).
- Create user routes (`usersRouter.js`).
- Create records & cart routes.

✅ **Test APIs using Postman, Thunder Client or Rest Client** before moving to frontend.

---

### Step 2: Set Up State & API Calls in the Frontend

- **Set up React app (`Vite`).**
- **Create global state management (`Context.jsx`, `Reducers`).**
  - Define `usersReducer.js`, `cartReducer.js`, and `recordsReducer.js`.
- **Implement API calls (`usersApi.js`, `cartsApi.js`, `recordsApi.js`).**
  - `signup()`, `login()`, `logout()`, `getMyData()`
  - `getCartData()`, `addToCart()`, `updateCartItem()`, `removeFromCart()`
  - `fetchRecords()`, `fetchRecordById()`
- **Test API calls using buttons (Temporary UI).**

  - Example: Create simple buttons like:

    ```jsx
    <button onClick={() => getMyData(usersDispatch)}>Test Login</button>
    <button onClick={() => fetchRecords(recordsDispatch)}>Fetch Records</button>
    ```

  - If you are working:
    - alone: ensure API calls **return data properly** before moving to UI.
    - in a group: some team members can focus on implementing API calls, while others build component files based on the wireframe.

---

### Step 3: Build / continue building the UI Components

- **Create UI components (`Navbar`, `RecordsList`, `RecordCard`, `CartSidebar`).**
- **Integrate state management & API calls into UI.**
  - Display records dynamically from API.
  - Handle login/signup state updates.
  - Show cart contents using fetched data.
- **Implement conditional rendering based on authentication.**
  - Show "Login" button if user is not logged in.
  - Show "Logout" and "Cart" if user is logged in.

---

### Step 4: Connect Frontend & Backend Completely

- **Ensure API calls and state updates reflect correctly in UI.**
- **Handle adding/removing records to cart dynamically.**
- **Store JWT token in cookies & manage authentication state.**

---

### Step 5: Polish & Test

- **Implement error handling in API calls.**
- **Add form validation for signup/login.**
- **Ensure secure authentication.**
- **Optimize UI/UX.**

---
