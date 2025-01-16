// const p = new Promise((resolve, reject) => {
//     reject("ahihi");
// })
// const main = async () => {

//     const data = await p;
//     console.log(data);
//     throw new Error("nem loi ra");

// }
// main()
//     .catch((error) => console.log("Error: ", error));

// const getApi1 = () => {
//     return Promise.reject(new Error('Loi API'))
// }

// const getApi2 = async () => {
//     try {
//         await getApi1()
//     } catch (error) {
//         throw new Error("Loi te le roi ne", error);
//     }
// }

// const getApi3 = async () => {
//     try {
//         await getApi2()
//     } catch (error) {
//         console.log(error);
//     }
// }
// getApi3();

const promise1 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 1'), 2000)
    })

const promise2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 2'), 1000)
    })

const promise3 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 3'), 1500)
    })

// Promise.all([promise1(), promise2(), promise3()])
//     .then((results) => {
//         console.log('Results:', results)
//     })
//     .catch((error) => {
//         console.log('Error:', error)
//     })

// Hoặc dùng async await
const main = async () => {
    try {
        const [result1, result2, result3] = await Promise.all([promise1(), promise2(), promise3()]);
        console.log(result1, result2, result3)
    } catch (error) {
        console.log('Error:', error)
    }
}
main();