//------1------

// function upperCase (str){
//     if ( (/^[A-Z]/.test(str)) == true){
//         console.log("String's starts with uppercase character")
//     }
//     else{
//         console.log("String's not starts with uppercase character ")
//     }
// }

//------2------

// function checkEmail(str){
//     if( (/\S+@\S+\.\S+/.test(str)) == true ){
//         return true 
//     }
//     return false
// }

//------3------

// let str = 'cdbBdbsbz'
// let re = /d(b+)(d)/i
// let result =  str.match(re)
// console.log(result)

//------4------

// let str = 'Java Script'
// let str1 = str.replace(/Script/,'Java')
// let str2 = str1.replace(/Java/, 'Script')
// console.log(str2)

// let res = str.split(/ /)
// let str1 = res[0]
// let str2 = res[1]
// console.log(str2 + str1)

//------5------

// function validation(number){
//     let arr = number.split(/-/)
//     for (i = 0; i < arr.length; i++){
//         if ( (/\d{4}/.test(arr[i])) == false || (number.match(/\d/g).length) > 16){
//         return (false)
//         }
//     }
//     return true 
//  }

//-------6------

// function checkMail (str) {
//     let re = /^[0-9A-Za-z]([\w]|-(?!-))*@[a-zA-Z0-9-]*\.([a-zA-Z0-9-]\.?)*/g
//     if( (re.test(str)) == true ){
//         return true 
//         }
//         return false
//     }

//------7------

// function checkLogin(str){
//     let reg = /^[A-Za-z][A-Za-z0-9.]{1,9}$/g
//     let re = /\d+(\.\d+)?/g
//     let result =  str.match(re)
//     if((reg.test(str)) == true){
//         console.log(result)
//     }
//     else { return false }
// }