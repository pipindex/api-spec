var seedData = require('seed_data');

module.exports = function (courseSpecId) {
    var course = seedData.objectFromSpecId(courseSpecId);
    return {
        id: String(course._id),
        href: "/v1/course/" + course._id,
        _type: "course",
        name: course.name,
        domain: course.domain,
        logo: course.logo,
        course_color: course.course_color,
        slug: course.slug,
    };
};