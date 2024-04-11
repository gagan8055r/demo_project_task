
/////FROM HERE//////
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

const customers = [
  { username: 'ravi', password: 'ravi@123' }
];

app.get("/login", (req, res) => {
  console.log('GET /login request headers:', req.headers);
  res.status(200).render('log');
});

app.post("/login", (req, res) => {
  console.log('POST /login request headers:', req.headers);
  const { username, password } = req.body;
  const customer = customers.find(c => c.username === username && c.password === password);
  if (customer) {
    req.session.loginVisited = true;
    req.session.isAuth = true;
    res.status(302).redirect('/auth');
  } else {
    res.status(401).render('log', { error: 'Invalid username or password' });
  }
});

app.get("/auth", (req, res) => {
  console.log('GET /auth request headers:', req.headers);
  if (req.session.isAuth) {
    delete req.session.loginVisited;
    delete req.session.isAuth;
    res.status(200).render('auth');
  } else {
    res.status(302).redirect('/login');
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.redirect('/login');
  });
});
app.listen(port, () => {
  console.log(`The website is running on port number ${port}....`);
});

//token///
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const cookieParser = require('cookie-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser()); 
const JWT_SECRET = 'your-secret-key';


const customers = [
  { username: 'ravi', password: 'ravi@123' }
];


const verifyToken = (req, res, next) => {
 const token = req.cookies.token;
  if (!token) {
    return res.status(401).redirect('/login');
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).redirect('/login');
    }
    req.user = decoded;
    next();
  });
};


app.get("/login", (req, res) => {
  console.log('GET /login request headers:', req.headers);
  res.status(200).render('log');
});

app.post("/login", (req, res) => {
  console.log('POST /login request headers:', req.headers);
  const { username, password } = req.body;

  const customer = customers.find(c => c.username === username && c.password === password);
  if (customer) {
    const token = jwt.sign({ username: customer.username }, JWT_SECRET, { expiresIn: '1m' });
    res.status(302).cookie('token', token, { httpOnly: false }).redirect('/auth');
  } else {
    res.status(401).render('log', { error: 'Invalid username or password' });
  }
});

app.get("/auth", verifyToken, (req, res) => {
  console.log('GET /auth request headers:', req.headers);
  res.status(200).render('auth');
});


app.post("/logout", (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
});

app.listen(port, () => {
  console.log(`The website is running on port number ${port}....`);
});
