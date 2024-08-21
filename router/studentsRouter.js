import express from 'express';
import { students } from '../data/students.js';

export const studentsRouter = express.Router();

/*

/students
Mokosi 4 studentai: Jonas, Maryte, Petras ir Ona.

/students/jonas
/students/Jonas
/students/JoNas
/students/JONAS
Studentas, vardu Jonas yra 99 metu amziaus ir yra vedes.

/students/chuck
Studento, vardu chuck nera.

/students/Chuck
Studento, vardu Chuck nera.

*/

studentsRouter.get('/', (req, res) => {
    // const names = [];
    // for (const key in students) {
    //     names.push(students[key].name);
    // }
    // const names = Object.values(students).map((student) => student.name);

    const names = Object.keys(students).map((key) => students[key].name);

    if (names.length === 0) {
        return res.send(`Total ${names.length} students: nobody.`);
    }
    if (names.length === 1) {
        return res.send(`Total ${names.length} student: ${names[0]}.`);
    }

    const str = names.slice(0, -1).join(', ') + ' ir ' + names.at(-1);
    return res.send(`Total ${names.length} students: ${str}.`);
});

studentsRouter.get('/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    let student = null;

    for (const key in students) {
        if (key.toLowerCase() === name) {
            student = students[key];
            break;
        }
    }

    if (student) {
        const { name, age, isMarried } = student;

        return res.send(
            `Student: "${name}" is ${age} years old and is "${
                isMarried ? 'married' : 'not married'
            }".`
        );
    } else {
        return res.send(`Student: "${name}" not found.`);
    }
});
