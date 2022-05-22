/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// import firebase from 'firebase/app';
// import 'firebase/database';

// import { FIREBASE_CONFIG } from './constants'
// const Firestore = require('@google-cloud/firestore');

// const db = new firebase();
// const app = express();
// app.use(express.json());
// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//     console.log(`GitHub User Search listening on port ${port}`);
// });

// app.get('/', async (req, res) => {
//     res.json({status: 'User Search ready to roll.'})
// })

// app.get('/user', async (req, res) => {
//     const user = req.params.user;
//     const query = db.collection('users').where('name', '==', user);
//     const querySnapshot = await query.get();
//     if (querySnapshot.size > 0) {
//         res.json(querySnapshot.doc[0].data());
//     }
//     else {
//         res.json({status: 'User not found'});
//     }
// })