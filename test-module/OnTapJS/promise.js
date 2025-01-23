// const promise = new Promise((resolve, reject) => {
//     console.log('Executing promise')
//     resolve('Success')
// })

// promise.then((result) => {
//     console.log('Promise resolved:', result)
// })

// console.log('Promise created')



// const promise = () => new Promise((resolve, reject) => {
//     console.log('Executing promise')
//     resolve('Success')
// })

// promise().then((result) => {
//     console.log('Promise resolved:', result)
// })

// console.log('Promise created')

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("oke");
//         reject("fail");;
//     }, 1000);
// })
// promise
//     .then((res) => {
//         console.log("Resolved:", res); // Xử lý khi resolve
//     })
//     .catch((err) => {
//         console.log("Rejected:", err); // Xử lý khi reject
//     });


// const getPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("oke");
//         reject("fail");;
//     }, 1000);
// })
// promise
//     .then((res) => {
//         console.log("Resolved:", res); // Xử lý khi resolve
//     })
//     .catch((err) => {
//         console.log("Rejected:", err); // Xử lý khi reject
//     });

const handle2 = async () => {
    return Promise.resolve('hello')
}

// const handle4 = (value) => {
//     return Promise.resolve('handle4 ' + value)
// }

// ❌ callback hell, không nên dùng
// handle2().then((res) => {
//   handle4(res).then((v) => {
//     console.log(v)
//   })
// })

// ✅ hạn chế được callback hell
// handle2()
//     .then((res) => {
//         return handle4(res)
//     })
//     .then((v) => {
//         console.log(v)
//     })



handle2()
    .then((res) => {
        throw new Error('error') //throw => nhảy vào catch => 
    })
    .catch((e) => {
        console.log('Chắc chắn sẽ nhảy vào đây')
        return Promise.resolve("ahuhu");
    })
    .then((v) => {
        console.log('Nhảy vào đây vì trước đó đã catch, và giá trị v là undefined vì trong catch không return gì cả')
        console.log("v: ", v);
    })
    .catch((c) => {
        console.log(c);
    })
