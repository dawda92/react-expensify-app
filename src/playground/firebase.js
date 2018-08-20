// Firestore Database

// const database = firebase.database();

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);


// database.ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//     })
    


// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error fetching data', e);
//   });



// database.ref().set({
//     name: 'Dawda Fatty',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Copenhagen',
//         country: 'Denmark'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('this failt', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
// });

// Same as calling remove() by using set(null)
// database.ref('isSingle').set(null);

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Data was Removed!');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });


// database.ref('notes/-LK7xtIPX_c7Wx53XSCQ').remove();

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React native, Angular, Python'
// });

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//   .once('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });




// database.ref('expenses').push({
//     description: 'This is my Description',
//     note: 'This is my note',
//     amount: 28,
//     createdAt: 1992
// });

// database.ref('notes/-LK7xtIPX_c7Wx53XSCQ').remove();

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React native, Angular, Python'
// });


// database.ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//     })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);
    

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error fetching data', e);
//   });



// database.ref().set({
//     name: 'Dawda Fatty',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Copenhagen',
//         country: 'Denmark'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('this failt', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
// });

// Same as calling remove() by using set(null)
// database.ref('isSingle').set(null);

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Data was Removed!');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });