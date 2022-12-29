// const { email, password, name } = data;
// const imgFile = data.image[0];
// const formData = new FormData();
// formData.append("image", imgFile);

// //image BB url
// const imageUrl = `https://api.imgbb.com/1/upload?key=${ process.env.REACT_APP_IMG_KEY }`;

// try {
//     fetch(imageUrl, {
//         method: "POST",
//         body: formData,
//     })
//         .then((e) => e.json())
//         .then((img) => {
//             const displayUrl = img.data.display_url;

//             //create user with email & password /firebase
//             createUser(email, password)
//                 .then((userCredential) => {
//                     const user = userCredential.user;

//                     //save user in DB with email & password
//                     //set jwt token in localStorage

//                     //updata user profile
//                     updateUser(name, displayUrl).then(() => {
//                         toast.success("User sign up successfull");
//                         setLoading(false);
//                     });
//                 })
//                 .catch((e) => {
//                     setLoading(false);
//                     toast.error(e.message);
//                 });
//         });
// } catch (error) {
//     console.log(error.message);
// }