const { Course, Payment, Note } = require("../models")

class StudentHelper {

    static processQuery({query}){

        let includeArr = []
        
        const { withCourses, withPayments, withNotes, withComments, ...rest } = query;
        if (withCourses) includeArr.push(Course)
        if (withPayments) includeArr.push(Payment)
        if (withNotes) includeArr.push(Note)
        if (withComments) includeArr.push(Comment)

        const options = {
            where: rest,
            include: includeArr
        };

        return options

    }

}

module.exports = StudentHelper