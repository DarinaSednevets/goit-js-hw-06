


// Получить массив всех умений всех пользователей(поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
import users from './users.js';
// const getSortedUniqueSkills = users => {
//     return users.reduce((acc, user) => acc + user.skills, [])
//         .sort();

// };
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum',
// 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ];

// const chainUniqueTopics = users
//     .flatMap(item => item.skills)
//     .filter((item, index, arr) => {
//         return arr.indexOf(item) === index;
//     });

// console.log(chainUniqueTopics);

const getSortedUniqueSkills = users => {
    return [
        ...new Set(
            users
                .reduce((allSkills, user) => {
                    allSkills.push(...user.skills);
                    return allSkills;
                }, [])
                .sort(),
        ),
    ];
};

console.log(getSortedUniqueSkills(users));