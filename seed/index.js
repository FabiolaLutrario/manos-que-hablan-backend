require('dotenv').config({ path: "../.env" })
const db = require("../config/db")
const { Student, Course, StudentByCourse, Payment } = require("../models")
const studentsData = require('./data/students')
const paymentsAgo21 = require("./data/payments/Ago21")
const paymentsAgo22 = require("./data/payments/Ago22")
const paymentsAgo23 = require("./data/payments/Ago23")
const paymentsMar21 = require("./data/payments/Mar21")
const paymentsMar22 = require("./data/payments/Mar22")
const paymentsMar23 = require("./data/payments/Mar23")

const fs = require('fs')
const _ = require('lodash')

const seedStudents = async () => {

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    let i = 1

    for (const student of studentsData) {

        console.log(`Creando estudiante ${i} de ${studentsData.length} : ${Math.floor((i * 100) / studentsData.length)}% completo`)

        const { name, direction, phone, document, attends, instagram, facebook, email } = student

        const createdStudent = await Student.create({
            name: name || null,
            address: direction || null,
            phone: phone?.toString() || null,
            document: document?.toString() || null,
            instagram: instagram || null,
            facebook: facebook || null,
            email: email || null
        })

        i++

    }

    return
}

const seedCourses = async () => {

    let uniqueCourses = []

    for (const student of studentsData) {

        const { attends } = student  // los distintos cursos se encuentran en el array 'attends' de los estudiantes

        for (const course of attends) {

            if (!uniqueCourses.includes(course)) {
                uniqueCourses.push(course)
            }

        }

    }
    // en uniqueCourses tenemos todos los nombres de los cursos (sin que se repitan). Vamos a seedear las distintas columnas
    // de la tabla a partir del nombre). 
    // Por ejemplo Mar21-N1 deberia ser --> label = Mar21-N1, year = 2021, semester = 1 (porque es de marzo y es el 1er semestre) y level = 1 (por N1) 

    let data = []
    for (const c of uniqueCourses) {
        let courseData = {}

        courseData.label = c
        courseData.year = (parseInt(c.substring(3, 5)) + 2000).toString()
        courseData.semester = c.substring(0, 3) == 'Mar' ? '1' : '2'
        courseData.level = c.at(-1)

        data.push(courseData)
    }
    data = _.orderBy(data, ['year', 'semester', 'level'], ['asc', 'asc', 'asc'])  // order data so it is cronologically added to the database

    let i = 1
    for (const item of data) {

        const { label, year, semester, level } = item

        console.log(`Creando curso ${i} de ${data.length} : ${Math.floor((i * 100) / data.length)}% completo`)

        const createdCourse = await Course.create({
            label,
            year,
            semester,
            level
        })

        i++
    }

}

const seedCoursesByStudent = async () => {
    // vamos a seedear la tabla que relaciona los estudiantes con los cursos en los que 
    // participan (es una tabla pivot con 2 foreign keys, una es el id del estudiante, y la otra el id del curso)
    // puede suceder que un estudiante se repita y tenga mas de un curso.
    let i = 1

    for (const student of studentsData) {

        console.log(`Creando relaciones con cursos para el estudiante ${i} de ${studentsData.length} : ${Math.floor((i * 100) / studentsData.length)}% completo`)

        const { attends, name } = student

        const dbStudent = await Student.findOne({ where: { name } })

        const studentId = dbStudent.dataValues.id

        for (const course of attends) {

            const dbCourse = await Course.findOne({ where: { label: course } })

            const courseId = dbCourse.dataValues.id

            const relationExists = await StudentByCourse.findOne({ where: { studentId, courseId } })

            if (!relationExists) {
                const createdRelation = await StudentByCourse.create({ studentId, courseId })
            }
        }

        i++

    }

}

const seedPayments = async () => {

    const allPayments = _.concat(paymentsAgo21, paymentsAgo22, paymentsAgo23, paymentsMar21, paymentsMar22, paymentsMar23)
    let notFoundStudents = []
    let i = 1
    for (const payment of allPayments) {

        console.log(`Creando pago ${i} de ${allPayments.length} : ${Math.floor((i * 100) / allPayments.length)}% completo`)

        let { name, concept, amount, payday, billing } = payment

        if (concept === "matrícula") concept = "matricula"
        if (amount === "") amount = null
        name = name.trim()

        const student = await Student.findOne({ where: { name } })

        if (student) {
            const studentId = student.dataValues.id
            const createdPayment = await Payment.create({
                concept,
                amount,
                payday,
                billing,
                studentId
            })
        } else {
            notFoundStudents.push(name)
        }
        i++
    }
    notFoundStudents = _.uniq(notFoundStudents)
    if (notFoundStudents.length) {
        console.log("Existen alumnos que no fueron encontrados en la base de datos, revisarlos en el archivo notFoundStudents.txt")
          fs.writeFileSync('notFoundStudents.txt', notFoundStudents.join('\n'), (err) => {
            if (err) {
                console.error('Error al crear el archivo notFoundStudents.txt:', err);
                return;
            }
            console.log('notFoundStudents.txt creado con exito');
        });
    }
}


const main = async () => {

    await db.sync({ force: true })   // AL CORRER EL SCRIPT DE SEEDEO, VA A BORRAR TODOS LOS DATOS DE LA BASE
    await seedStudents()
    await seedCourses()
    await seedCoursesByStudent()
    await seedPayments()

    process.exit()

}

main()

