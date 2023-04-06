// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів

interface Icore {
    flight: number,
        core: {
    reuse_count: number,
        status: string
}
}

interface Iplayloads {
            payload_type: string,
            payload_mass_kg: number,
            payload_mass_lbs: number
}

interface Irocket {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
    site_name_long: string
},
    links: {
    article_link: string,
        video_link: string
},
    rocket: {
    rocket_name: string,
        first_stage: {
        cores: Icore[]
    },
    second_stage: {
        payloads: Iplayloads[]
    }
}
}

const rocket:Irocket = {
    mission_name: "Starlink-15 (v1.0)",
    launch_date_local:  "2020-10-24T11:31:00-04:00",
    launch_site: {
        site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    links: {
        article_link: "http://some.com",
        video_link: "http://some.com"
    },
    rocket: {
        rocket_name:  "Falcon 9",
        first_stage: {
            cores: [
                {
                    flight: 7,
                    core: {
                        reuse_count: 6,
                        status: "unknown"
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: "Satellite",
                    payload_mass_kg: 15400,
                    payload_mass_lbs: 33951.2
                }
            ]
        }
    }
}

console.log(rocket);
// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:

interface IUser {
    name:string,
    age:number,
    gender:string
}

const user = {
    name:"Max",
    age:18,
    gender:'male'
}

const user2 = {
    name:"Alex",
    age:28,
    gender:'male'
}

const printUser = (user:IUser) => {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Gender: ${user.gender}`);
}

printUser(user);
console.log('-------')
printUser(user2);

const funcSum = (a:number,b:number):number =>{
    return a + b
}
console.log(funcSum(4, 2));
console.log(funcSum(4, 4));
console.log(funcSum(4, 10));
const funcShow = (a:number,b:number)=>{
    console.log(a+b)
}
funcShow(0, 2);
funcShow(0, 4);
funcShow(0, 10);


const funcIncAge = (someUser:IUser,inc:number):IUser=>{
    const newUserAge = someUser.age+=inc;
    someUser.age = newUserAge;
    return someUser
}
console.log(funcIncAge(user, 2));


