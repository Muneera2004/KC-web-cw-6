
alert(`WELLCOME TO MY SITE`)

let  grade =prompt(`اكتب درجتك بالارقام`)


console.log ( "%cgrade", "color: orange");

console.log(grade);

if( grade>=90 && grade<=100  ){
console.log(`%cلقد حصلت على امتياز ` , `color:orange`)
}else if(grade >=80 && grade <=89){
    console.log(`%cلقد حصلت على جيد جدا` , `color:green` )
}else if(grade >=70 && grade<=79 ){

    console.log(`%cلقد حصلت على جيد ` , `color:pink`)

}else if(grade >=60 && grade <=69){

    console.log(`%cلقد حصلت على مقبول` , `color:blue`)
}else if(grade>=50 && grade<=59){

    console.log(`%cلقد حصلت على ضعيف ` , `color:red`)
}else{
    console.log(`راسب`)

}

//جافا سكربت ليست جافا//